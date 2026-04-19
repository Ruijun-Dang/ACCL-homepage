/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar, Footer } from './components/Shared';
import Home from './pages/Home';
import Group from './pages/Group';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Presentations from './pages/Presentations';
import Openings from './pages/Openings';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/group" element={<Group />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/presentations" element={<Presentations />} />
            <Route path="/openings" element={<Openings />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
