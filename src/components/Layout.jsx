import React, { useState, useEffect } from 'react';
import DesktopSidebar from './DesktopSidebar';
import MobileTabBar from './MobileTabBar';

const Layout = ({ children, activeTab, onTabChange, onLogout }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <DesktopSidebar activeTab={activeTab} onTabChange={onTabChange} onLogout={onLogout} />
      
      {/* Main Content */}
      <div className={`${isMobile ? 'pb-20' : 'md:ml-64'} min-h-screen`}>
        <main className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
          {children}
        </main>
      </div>
      
      {/* Mobile Tab Bar */}
      <MobileTabBar activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
};

export default Layout;

