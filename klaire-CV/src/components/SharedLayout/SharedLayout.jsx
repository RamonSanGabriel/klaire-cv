import { Suspense } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import About from '../About/About';
import Summary from '../Summary/Summary';
import Training from '../Training/Training';

import Navbar from '../Navbar/Navbar';

const SharedLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Suspense fallback={<Loader />}>
        {/*   <About />
        <Summary />
        <Training /> */}
        <Outlet />
      </Suspense>
      <Navbar />
    </>
  );
};

export default SharedLayout;
