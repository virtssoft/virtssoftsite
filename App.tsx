
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Account } from './pages/Account';

// Mock pages for skeleton routes
const Blog = () => <div className="pt-32 px-6 min-h-screen text-center"><h1 className="text-4xl font-light">Blog</h1><p className="mt-4 text-gray-500">Contenu à venir...</p></div>;
const Services = () => <div className="pt-32 px-6 min-h-screen text-center"><h1 className="text-4xl font-light">Services</h1><p className="mt-4 text-gray-500">Contenu à venir...</p></div>;
const Support = () => <div className="pt-32 px-6 min-h-screen text-center"><h1 className="text-4xl font-light">Support</h1><p className="mt-4 text-gray-500">Contenu à venir...</p></div>;
const Store = () => <div className="pt-32 px-6 min-h-screen text-center"><h1 className="text-4xl font-light">Store</h1><p className="mt-4 text-gray-500">Bientôt disponible...</p></div>;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the premium loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#f1f1f1]">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Support />} />
          <Route path="/store" element={<Store />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<div className="pt-32 px-6 text-center">404 - Page non trouvée</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
