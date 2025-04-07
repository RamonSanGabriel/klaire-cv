import './App.css';
import { lazy, useEffect } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

/* Components */
const Button = lazy(() => import('./components/Button/Button'));
const About = lazy(() => import('./components/About/About'));
const Summary = lazy(() => import('./components/Summary/Summary'));
const Training = lazy(() => import('./components/Training/Training'));

/* Pages */
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const WorkPage = lazy(() => import('./pages/WorkPage/WorkPage'));
const CVPage = lazy(() => import('./pages/CVPage/CVPage'));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          {/*  <Route path="about" element={<About />} />
          <Route path="summary" element={<Summary />} />
          <Route path="training" element={<Training />} /> */}

          <Route path="/about" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/cv" element={<CVPage />}>
            <Route path="print" element={<Button />} />
          </Route>
        </Route>
      </Routes>
      {/* Header */}
      {/* Navbar */}
      {/* Hero */}
      {/* Features */}
      {/* Call to Action */}
      {/* Footer */}
    </>
  );
}

export default App;
