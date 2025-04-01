import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import About from '../About/About';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <About />
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
