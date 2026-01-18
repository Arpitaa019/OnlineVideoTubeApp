import { Outlet } from 'react-router-dom';
import Header from '@/components/navigation/Header/Header';
import './WatchLayout.css';

export default function WatchLayout() {
  return (
    <div className="watch-layout">
      <Header />
      <div className="watch-layout-content">
        <Outlet />
      </div>
    </div>
  );
}
