import { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Create transform values for the mask
  const maskX = mouseX;
  const maskY = mouseY;

  const pcbPattern = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L50 10 L50 50 M70 10 L110 10 L110 70 M10 70 L10 110 L70 110' stroke='%230ea5e9' stroke-width='1.5' fill='none' opacity='0.4'/%3E%3Ccircle cx='10' cy='10' r='3' fill='%230ea5e9' opacity='0.6'/%3E%3Ccircle cx='50' cy='50' r='4' fill='%230ea5e9' opacity='0.6'/%3E%3Ccircle cx='110' cy='10' r='3' fill='%230ea5e9' opacity='0.6'/%3E%3Ccircle cx='110' cy='70' r='4' fill='%230ea5e9' opacity='0.6'/%3E%3Ccircle cx='10' cy='110' r='3' fill='%230ea5e9' opacity='0.6'/%3E%3Ccircle cx='70' cy='110' r='4' fill='%230ea5e9' opacity='0.6'/%3E%3C/svg%3E")`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center px-6 bg-slate-900 text-white relative overflow-hidden">
      
      {/* LAYER 1: PCB Board Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: pcbPattern,
          backgroundColor: '#020617',
        }}
      />

      {/* LAYER 2: Blue Overlay with Cursor Mask - Using motion.div for smooth updates */}
      <motion.div 
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          maskImage: useTransform(
            [maskX, maskY],
            ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, transparent 0%, black 100%)`
          ),
          WebkitMaskImage: useTransform(
            [maskX, maskY],
            ([x, y]) => `radial-gradient(circle 300px at ${x}px ${y}px, transparent 0%, black 100%)`
          ),
        }}
      />

      {/* LAYER 3: Grid Pattern */}
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-cyan-400/50 rounded-full z-[3]"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
        />
      ))}

      {/* Content with Alyssa-style animations */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center justify-center h-full pt-16 pb-8"
      >
        {/* Name */}
        <motion.div variants={itemVariants} className="text-center mb-3">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Krandelle
            </span>
            <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Josh Kalaw
            </span>
          </h1>
        </motion.div>
        
        {/* Tagline */}
        <motion.div variants={itemVariants} className="text-center mb-2">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-light text-slate-300">
            Front-End & <span className="text-cyan-400 font-medium">Software Developer</span>
          </h2>
        </motion.div>
        
        {/* Description */}
        <motion.p variants={itemVariants} className="text-center max-w-xl mx-auto text-slate-400 text-sm md:text-base mb-6">
          I craft <span className="text-white font-medium">modern web interfaces</span> that bridge the gap to <span className="text-white font-medium">physical hardware</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-6">
          <motion.a 
            href="#projects" 
            className="group relative px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-medium text-sm overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              View My Work
              <motion.svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.a>
          
          <motion.a 
            href="#" 
            className="px-6 py-2.5 border-2 border-slate-600 hover:border-cyan-500/70 hover:bg-slate-800/50 rounded-lg font-medium text-sm transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center items-center gap-6">
          {[
            { name: 'GitHub', href: 'https://github.com/Krandelle', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
            { name: 'Email', href: 'mailto:krandellek@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
              whileHover={{ y: -5 }}
            >
              <div className="relative mb-1">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.4 }}
                />
                <div className="relative w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center group-hover:border-cyan-500/50 transition-all">
                  <svg className="w-4 h-4 text-slate-400 group-hover:text-white transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </div>
              </div>
              <div className="h-4 flex items-center justify-center overflow-hidden">
                <span className="text-xs text-slate-500 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 font-medium">
                  {social.name}
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}