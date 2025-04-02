import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import About from '../About/About';
import Summary from '../Summary/Summary';
import Training from '../Training/Training';
import Footer from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <About />
        <Summary />
        <Training />
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
