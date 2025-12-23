
import React from 'react';
import { motion } from 'framer-motion';
import { HISTORY, TEAM } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero with Video placeholder */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
          <img src="https://picsum.photos/seed/about-virts/1920/1080" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-6xl font-light mb-4">À propos de Virtssoft Technologies</h1>
          <p className="text-xl font-light text-blue-100 max-w-2xl mx-auto">Innovons ensemble, inspirons l'avenir</p>
          <div className="flex gap-4 justify-center mt-10">
            <button className="px-8 py-3 bg-blue-600 rounded-full font-medium">Notre histoire</button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-md rounded-full font-medium">Nos programmes</button>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-32 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-light mb-20 text-center">Notre Histoire</h2>
          <div className="flex overflow-x-auto gap-20 pb-10 hide-scrollbar snap-x">
            {HISTORY.map((event, idx) => (
              <motion.div 
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="min-w-[300px] snap-center"
              >
                <div className="text-6xl font-bold text-gray-100 mb-4">{event.year}</div>
                <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                <p className="text-gray-500 leading-relaxed">{event.description}</p>
                <div className="mt-8 flex items-center space-x-2">
                   <div className="w-10 h-1 bg-blue-600" />
                   <span className="text-xs font-bold text-gray-400 uppercase">{idx + 1} / {HISTORY.length}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comité Exécutif */}
      <section className="py-32 bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light mb-20 text-center">Comité Exécutif</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TEAM.filter(m => m.category === 'Comité Exécutif').map(member => (
              <div key={member.id} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/5 p-8 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-48 h-64 overflow-hidden rounded-2xl flex-shrink-0">
                  <img src={member.image} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={member.name} />
                </div>
                <div className="space-y-4 text-center md:text-left">
                  <div>
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="text-blue-500 font-medium">{member.role}</p>
                  </div>
                  <div className="w-12 h-1 bg-blue-600 hidden md:block" />
                  <p className="text-gray-400 text-sm italic">"Guidant l'innovation technologique avec passion et rigueur."</p>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    {/* Social icons here */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
