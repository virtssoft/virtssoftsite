
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Youtube, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Identity */}
        <div className="flex flex-col items-center mb-20">
          <Link to="/" className="text-2xl font-light tracking-[0.3em] uppercase mb-4">
            Virts<span className="text-blue-500 font-normal">soft</span>
          </Link>
          <p className="text-gray-500 text-sm tracking-widest text-center">
            "Innovons ensemble, inspirons l'avenir."
          </p>
        </div>

        {/* Section 2: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-b border-white/5 pb-20">
          <div className="space-y-6">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">Virtssoft</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-gray-400 text-sm hover:text-white transition-colors">À propos</Link>
              <Link to="/blog" className="text-gray-400 text-sm hover:text-white transition-colors">Blog</Link>
              <Link to="/careers" className="text-gray-400 text-sm hover:text-white transition-colors">Carrières</Link>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">Solutions</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/services#biz" className="text-gray-400 text-sm hover:text-white transition-colors">EM Business</Link>
              <Link to="/services#acad" className="text-gray-400 text-sm hover:text-white transition-colors">EM Academia</Link>
              <Link to="/services#workaa" className="text-gray-400 text-sm hover:text-white transition-colors">Workaa</Link>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">Support</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/support" className="text-gray-400 text-sm hover:text-white transition-colors">Aide</Link>
              <Link to="/support#docs" className="text-gray-400 text-sm hover:text-white transition-colors">Documentation</Link>
              <Link to="/contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="space-y-6">
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest">Légal</h4>
            <nav className="flex flex-col space-y-4">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">Confidentialité</Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">Conditions</Link>
            </nav>
          </div>
        </div>

        {/* Section 3: Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 text-xs">
            © 2025 Virtssoft Technologies. Tous droits réservés.
          </p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
