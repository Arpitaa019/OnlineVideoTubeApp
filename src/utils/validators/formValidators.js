export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return {
    isValid:
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar,
    errors: {
      minLength: password.length < minLength,
      hasUpperCase: !hasUpperCase,
      hasLowerCase: !hasLowerCase,
      hasNumber: !hasNumber,
      hasSpecialChar: !hasSpecialChar,
    },
  };
};

export const validateUsername = (username) => {
  const minLength = 3;
  const maxLength = 20;
  const validChars = /^[a-zA-Z0-9_-]+$/;

  return (
    username.length >= minLength &&
    username.length <= maxLength &&
    validChars.test(username)
  );
};

export const validateVideoTitle = (title) => {
  const minLength = 3;
  const maxLength = 100;
  return title.length >= minLength && title.length <= maxLength;
};

export const validateURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
