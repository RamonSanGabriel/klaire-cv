import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import About from '../About/About';
import Summary from '../Summary/Summary';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <About />
        <Summary />
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
