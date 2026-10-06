import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import LaserPixModel from './LaserPixModel';

export default function ProjectCarousel({ images, liveUrl }) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index) => {
    const newDirection = index > page ? 1 : -1;
    setPage([index, newDirection]);
  };

  const currentIndex = ((page % images.length) + images.length) % images.length;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  // Check if this is a single live demo (no carousel needed)
  const isSingleLiveDemo = images.length === 1 && images[0].type === 'live' && liveUrl;

  if (isSingleLiveDemo) {
    return (
      <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 shadow-2xl flex items-center justify-center p-8" style={{ pointerEvents: 'auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-sm mx-auto"
        >
          {/* Icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
          >
            <ExternalLink className="w-10 h-10 text-white" />
          </motion.div>
          
          {/* Title */}
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-bold text-white mb-3"
          >
            Live Website
          </motion.h3>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-sm mb-8 leading-relaxed"
          >
            This project is hosted externally. Click below to visit the live site.
          </motion.p>
          
          {/* CTA Button */}

<motion.a
  href={liveUrl}
  target="_blank"
  rel="noopener noreferrer"
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.5 }}
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25 mb-4 relative z-10"
  style={{ pointerEvents: 'auto' }}
>
  <span>View Live Site</span>
  <ExternalLink className="w-5 h-5" />
</motion.a>
          
          {/* URL */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-slate-500 text-xs font-mono tracking-wide"
          >
            {liveUrl.replace(/^https?:\/\//, '')}
          </motion.p>
        </motion.div>
      </div>
    );
  }

  // Regular carousel for multiple items
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Left Arrow */}
      <motion.button
        onClick={() => paginate(-1)}
        className="absolute left-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Main Carousel Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute w-full h-full flex items-center justify-center p-4"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 shadow-2xl flex items-center justify-center">
              {images[currentIndex].type === '3d' ? (
                <div className="w-full h-full">
                  <LaserPixModel />
                </div>
              ) : images[currentIndex].type === 'live' && liveUrl ? (
                <div className="text-center p-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
                  >
                    <ExternalLink className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Live Website</h3>
                  <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
                    This project is hosted externally. Click below to visit the live site.
                  </p>
                  
                  <motion.a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/25"
                  >
                    <span>View Live Site</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                  
                  <p className="text-slate-500 text-xs mt-4 font-mono">
                    {liveUrl.replace(/^https?:\/\//, '')}
                  </p>
                </div>
              ) : (
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="w-full h-full object-contain bg-slate-900/50"
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Arrow */}
      <motion.button
        onClick={() => paginate(1)}
        className="absolute right-4 z-20 w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-blue-600 transition-all group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-500 w-6'
                : 'bg-slate-600 w-2 hover:bg-slate-500'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}