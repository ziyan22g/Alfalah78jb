import { useEffect } from 'react';
import { App as CapApp } from '@capacitor/app';
import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { AppRoutes } from './Routes/AppRoutes';

const App = () => {

  useEffect(() => {
   const backListener = CapApp.addListener('backButton', ({ canGoBack }) => {
      if (canGoBack) {
        window.history.back();
      } else {
        CapApp.exitApp();
      }
    });

    return () => {
      backListener.then(handler => handler.remove());
    };
  }, []);

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export { App };