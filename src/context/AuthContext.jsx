import { createContext, useContext, useState, useEffect } from 'react';
import { getAccessToken, setTokens, clearTokens } from '@/services/storage/tokenStorage';
import { authService } from '@/features/authentication/services/authService';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = getAccessToken();
      if (token) {
        const userData = await authService.getCurrentUser();
        setUser(userData);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      clearTokens();
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    const { user, accessToken, refreshToken } = await authService.login(credentials);
    setTokens(accessToken, refreshToken);
    setUser(user);
    setIsAuthenticated(true);
  };

  const register = async (userData) => {
    const { user, accessToken, refreshToken } = await authService.register(userData);
    setTokens(accessToken, refreshToken);
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearTokens();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const updateUser = (userData) => {
    setUser((prev) => ({ ...prev, ...userData }));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        register,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
