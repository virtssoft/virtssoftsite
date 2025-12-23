
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, PlayCircle } from 'lucide-react';
import { PRODUCTS, SERVICES, BLOG_POSTS } from '../constants';

export const Home: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Abstract Background or Video placeholder */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
          <img 
            src="https://picsum.photos/seed/techhero/1920/1080" 
            className="w-full h-full object-cover opacity-40" 
            alt="Hero Background"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="https://picsum.photos/seed/producthero/600/400"
            className="w-full max-w-lg mx-auto mb-12 drop-shadow-2xl rounded-2xl"
            alt="Featured Product"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-light tracking-tight mb-6"
          >
            Découvrez l’univers <span className="font-normal text-blue-500">Virtssoft</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl mb-10 font-light"
          >
            Nous transformons vos idées en solutions intelligentes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              to="/about"
              className="px-8 py-4 bg-transparent border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-medium text-sm tracking-widest uppercase"
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-white text-black py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-gray-400 mb-6">Objets connectés</h2>
            <div className="flex space-x-8 overflow-x-auto pb-4 border-b border-gray-100">
              {PRODUCTS.filter(p => p.category === 'Objets connectés').map((p, idx) => (
                <button 
                  key={p.id}
                  className={`text-xs uppercase tracking-widest font-bold whitespace-nowrap pb-4 border-b-2 transition-all ${
                    idx === 0 ? 'border-blue-600 text-black' : 'border-transparent text-gray-300 hover:text-gray-500'
                  }`}
                >
                  {p.id}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl mb-8 flex items-center justify-center">
                <span className="text-blue-600 font-bold">V</span>
              </div>
              <h3 className="text-6xl font-light mb-4">{PRODUCTS[0].name}</h3>
              <p className="text-xl text-gray-500 mb-10">{PRODUCTS[0].description}</p>
              <div className="flex items-center space-x-8">
                <Link to="/store" className="px-10 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-semibold">
                  Acheter
                </Link>
                <Link to={`/store/${PRODUCTS[0].id}`} className="text-blue-600 font-medium underline flex items-center">
                  En savoir plus <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={PRODUCTS[0].image} 
                className="w-full h-auto rounded-3xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition-transform duration-700"
                alt="Product visual" 
              />
              <div className="absolute -bottom-10 -right-10 opacity-10 text-[10rem] font-black select-none pointer-events-none hidden lg:block">
                330
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#0b1c33] text-white py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Service Tabs */}
          <div className="flex flex-wrap gap-8 justify-center mb-20">
            {SERVICES.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => setActiveService(idx)}
                className={`text-sm uppercase tracking-widest font-bold transition-all border-b-2 pb-2 ${
                  activeService === idx ? 'border-white text-white' : 'border-transparent text-white/40 hover:text-white/70'
                }`}
              >
                {service.abbr}
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1">
               <img src={SERVICES[activeService].image} alt={SERVICES[activeService].name} className="rounded-3xl shadow-2xl w-full aspect-video object-cover" />
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <h3 className="text-5xl font-light">{SERVICES[activeService].name}</h3>
              <p className="text-lg text-blue-100 font-light leading-relaxed">
                {SERVICES[activeService].descriptionLong}
              </p>
              <div className="text-xl font-medium text-blue-300">
                {SERVICES[activeService].price}
              </div>
              <div className="flex items-center space-x-8 pt-6">
                <Link to="/services" className="text-white underline underline-offset-8 decoration-blue-500 font-medium">
                  En savoir plus
                </Link>
                <Link to="/contact" className="px-8 py-3 bg-white text-blue-900 rounded-full font-bold hover:bg-blue-100 transition-all">
                  Nous contacter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events/Articles Section */}
      <section className="py-24 bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex justify-between items-end">
            <h2 className="text-4xl font-light">Explorez l'actualité</h2>
            <Link to="/blog" className="text-blue-500 hover:underline">Voir tout le blog</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="relative group overflow-hidden rounded-3xl h-[500px]">
                {/* Background Video/Image placeholder */}
                <div className="absolute inset-0 z-0">
                  <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                </div>
                
                <div className="relative z-10 h-full p-12 flex flex-col justify-center items-center text-center">
                  <div className="mb-4">
                    <span className="text-sm uppercase tracking-[0.2em] border-b border-white/50 pb-1">Explore</span>
                    <h3 className="text-3xl font-bold mt-2">{post.title}</h3>
                  </div>
                  
                  <div className="flex items-center space-x-6 mt-6">
                    <Link to={`/blog/${post.id}`} className="text-sm underline underline-offset-4">En savoir plus</Link>
                    {post.videoUrl && (
                      <a href={post.videoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20 transition-all">
                        <PlayCircle className="w-5 h-5" />
                        <span className="text-xs uppercase font-bold">Voir la vidéo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-gray-400 uppercase tracking-widest text-sm font-bold mb-12">Ils nous font confiance</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {/* Replace with actual partner logos */}
             <div className="text-2xl font-black text-black">UNITECH</div>
             <div className="text-2xl font-black text-black">ULPGL</div>
             <div className="text-2xl font-black text-black">GOMA-IT</div>
             <div className="text-2xl font-black text-black">TECH-RDC</div>
          </div>
        </div>
      </section>
    </div>
  );
};
