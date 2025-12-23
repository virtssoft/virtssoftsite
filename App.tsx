
import React, { useState, useEffect, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Account } from './pages/Account';

// Mock simple pages for the rest
const Blog = () => <div className="pt-32 px-6 min-h-screen">Blog Page Content</div>;
const Services = () => <div className="pt-32 px-6 min-h-screen">Services Page Content</div>;
const Support = () => <div className="pt-32 px-6 min-h-screen">Support Page Content</div>;
const Store = () => <div className="pt-32 px-6 min-h-screen">Store Page Content</div>;

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
    // Simulate initial loading sequence
    const timer = setTimeout(() => setLoading(false), 2000);
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
          {/* Catch-all route can be added here */}
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
