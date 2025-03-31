import './App.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
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
