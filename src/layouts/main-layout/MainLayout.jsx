import { Outlet } from 'react-router-dom';
import Header from '@/components/navigation/Header/Header';
import Sidebar from '@/components/navigation/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import './MainLayout.css';

export default function MainLayout() {
  const { sidebarOpen } = useSelector((state) => state.ui);

  return (
    <div className="main-layout">
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className={`main-content ${!sidebarOpen ? 'sidebar-closed' : ''}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
