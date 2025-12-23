
import React from 'react';
import { motion } from 'framer-motion';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Neon Rings */}
        <motion.div
          className="absolute inset-0 border-t-2 border-b-2 border-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 border-l-2 border-r-2 border-blue-300 rounded-full opacity-50"
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Logo Text */}
        <motion.div
          initial={{ opacity: 0.5, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="text-white font-light tracking-[0.3em] text-sm uppercase"
        >
          Virtssoft
        </motion.div>
      </div>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        className="mt-8 text-xs tracking-widest uppercase text-gray-400"
      >
        Innovons Ensemble
      </motion.p>
    </div>
  );
};
