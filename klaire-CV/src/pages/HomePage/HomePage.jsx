import { Suspense, useEffect } from 'react';
import About from '../../components/About/About';
import Header from '../../components/Header/Header';
import Summary from '../../components/Summary/Summary';
import Training from '../../components/Training/Training';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Suspense>
        <Header />
        <About />
        <Summary />
        <Training />
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HomePage;
