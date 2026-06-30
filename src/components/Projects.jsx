import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  const projects = [
    {
      title: 'LaserPix',
      subtitle: 'Desktop Laser Controller',
      description: 'Engineered a robust desktop application using React 19 and Electron 39 with USB serial communication for ESP32-based GRBL controllers.',
      stack: ['React 19', 'Electron', 'Node.js', 'ESP32'],
      github: 'https://github.com/Krandelle/LaserPix',
      color: 'from-blue-500 to-purple-600',
      // Add your actual image paths here
      images: [
        { type: '3d', alt: 'LaserPix 3D Model' },
        { type: 'image', src: '/laserpix/laserpix-clean.png', alt: 'LaserPix Machine' },
        { type: 'image', src: '/laserpix/Laserpix-software.png', alt: 'LaserPix Software' },
        { type: 'image', src: '/laserpix/LaserPixDefended.jpg', alt: 'LaserPix Defended' },
            ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-32 px-6 text-white relative overflow-hidden">
      {/* Animated background */}
      
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono text-sm mb-4"
          >
            01. Featured Work
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Projects That Define Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg max-w-2xl"
          >
            Blending modern web technologies with hardware integration to create powerful desktop applications.
          </motion.p>
        </motion.div>

        {/* Project Cards with Carousel */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800/30 to-slate-900/30 rounded-3xl p-8 md:p-12 overflow-hidden hover:from-slate-800/50 hover:to-slate-900/50 transition-all duration-500">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                  {/* Project Info */}
                  <div className="flex-1">
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="text-blue-400 font-mono text-sm mb-3"
                    >
                      Featured Project
                    </motion.p>
                    <motion.h3 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-3xl md:text-4xl font-bold mb-3 group-hover:text-blue-400 transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-slate-300 text-lg mb-6"
                    >
                      {project.subtitle}
                    </motion.p>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-slate-400 leading-relaxed mb-8"
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech Stack */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-3 mb-8"
                    >
                      {project.stack.map((tech) => (
                        <motion.span 
                          key={tech} 
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                          className="px-4 py-2 bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Links */}
                    {/* Links */}
<div className="inline-block">
  {/* Links */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.5 }}
  className="inline-block"
>
  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-all px-4 py-2 -mx-4 -my-2 rounded-lg hover:bg-blue-500/10 cursor-pointer"
  >
    <span className="relative z-10">View on GitHub</span>
    <motion.svg 
      className="w-5 h-5 flex-shrink-0 relative z-10" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
      animate={{ x: [0, 3, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </motion.svg>
    {/* Invisible full-area hit box */}
    <span className="absolute inset-0"></span>
  </a>
</motion.div>
</div>
                  </div>

                  {/* Carousel - Visual Element */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="w-full lg:w-2/5 h-[400px] rounded-2xl overflow-hidden"
                  >
                    <ProjectCarousel images={project.images} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}