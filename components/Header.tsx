
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'À propos', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'Support', path: '/support' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 py-3' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-light tracking-[0.3em] uppercase group">
          Virts<span className="text-blue-500 font-normal transition-colors group-hover:text-blue-400">soft</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-medium hover:text-white transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/store" className="relative group" title="Store">
            <ShoppingBag className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
          <Link to="/account" className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group hover:border-gray-500 transition-colors" title="Compte">
            <User className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center space-x-6">
          <Link to="/store">
            <ShoppingBag className="w-5 h-5 text-gray-400" />
          </Link>
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] bg-[#0a0a0a] flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-light tracking-[0.3em] uppercase">Virtssoft</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-light tracking-wide hover:text-blue-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-white/5 flex flex-col space-y-8">
                <Link to="/store" className="text-2xl font-light flex items-center space-x-4">
                  <ShoppingBag className="w-6 h-6" />
                  <span>Store</span>
                </Link>
                <Link to="/account" className="text-2xl font-light flex items-center space-x-4">
                  <User className="w-6 h-6" />
                  <span>Mon Compte</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
