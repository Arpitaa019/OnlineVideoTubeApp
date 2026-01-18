import { Outlet } from 'react-router-dom';
import Header from '@/components/navigation/Header/Header';
import StudioSidebar from '@/features/studio/components/StudioSidebar';
import './StudioLayout.css';

export default function StudioLayout() {
  return (
    <div className="studio-layout">
      <Header />
      <div className="studio-content">
        <StudioSidebar />
        <main className="studio-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
