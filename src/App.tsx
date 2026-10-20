import React, { useEffect, useState } from 'react';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutContactPage } from './pages/AboutContactPage';
import { BookingPage } from './pages/Booking';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case '/gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case '/about-contact':
        return <AboutContactPage onNavigate={handleNavigate} />;
      case '/booking':
        return <BookingPage />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <>
      <CustomCursor />
      {renderPage()}
    </>
  );
};
