import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Footer from './components/Footer';
import Project from './pages/Project';



// ✅ ScrollToTop reste ici
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
    
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/projets" element={<Project />} />

      

       
      </Routes>

      <Footer />

    
    </div>
  );
}

export default App;