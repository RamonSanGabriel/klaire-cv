import './App.css';
import { lazy } from 'react';

import SharedLayout from './components/SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const Work = lazy(() => import('./pages/Work/Work'));
const CVPage = lazy(() => import('./pages/CVPage/CVPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="work" element={<Work />} />
          <Route path="cv" element={<CVPage />} />
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
