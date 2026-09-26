import { Footer } from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
import { AppRoutes } from './Routes/AppRoutes';

const App = () => {

  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
};

export { App };