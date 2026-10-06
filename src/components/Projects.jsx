import { motion } from 'framer-motion';
import ProjectCarousel from './ProjectCarousel';

export default function Projects() {
  const projects = [
    {
      title: 'LaserPix',
      subtitle: 'Desktop Laser Controller & Image Processing System',
      description: 'Engineered a robust full-stack desktop application using React 19 (Frontend) and Node.js/Electron 39 (Backend), featuring a modern UI for real-time hardware control and pixel-perfect image processing.',
      details: [
        'Developed a highly reliable backend communication layer using Node.js serialport, enabling auto-detection, dynamic baud rate management, and seamless G-code streaming to ESP32-based GRBL controllers.',
        'Secured the application architecture using contextBridge and preload.js to safely expose native Node.js backend APIs to the React frontend without compromising system security boundaries.'
      ],
      stack: ['React 19', 'Electron 39', 'Node.js', 'serialport', 'GRBL', 'ESP32'],
      github: 'https://github.com/Krandelle/LaserPix',
      liveUrl: null,
      color: 'from-blue-500 to-purple-600',
      images: [
        { type: '3d', alt: 'LaserPix 3D Model' },
        { type: 'image', src: '/laserpix/laserpix-clean.png', alt: 'LaserPix Machine' },
        { type: 'image', src: '/laserpix/Laserpix-software.png', alt: 'LaserPix Software' },
        { type: 'image', src: '/laserpix/LaserPixDefended.jpg', alt: 'LaserPix Defended' },
      ],
    },
    {
      title: 'Happy-Cars',
      subtitle: 'Full-Stack Car Rental & Booking System',
      description: 'Developed a dynamic, full-stack web application using PHP and MySQL to manage vehicle inventory, user bookings, and administrative operations.',
      details: [
        'Designed and implemented a relational database schema to handle complex data relationships between users, vehicles, and reservation records.',
        'Built a comprehensive booking system with date/time selection, allowing users to reserve vehicles with specific pickup schedules and hourly time slots.',
        'Created detailed vehicle listings with specifications including transmission type, fuel type, seating capacity, and comprehensive descriptions.',
        'Implemented core CRUD operations and server-side session management for secure user authentication and role-based access control.'
      ],
      stack: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP'],
      github: 'https://github.com/Krandelle/Happy-Cars',
      liveUrl: 'https://happy-cars-demo.freedev.app',
      color: 'from-cyan-500 to-blue-600',
      images: [
        { type: 'live', alt: 'Happy-Cars Live Demo' },
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

                    {/* Details */}
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 }}
                      className="space-y-2 mb-8"
                    >
                      {project.details.map((detail, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">▹</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </motion.ul>

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

                    {/* GitHub Link */}
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
                      </a>
                    </motion.div>
                  </div>

                  {/* Carousel - Visual Element */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="w-full lg:w-2/5 h-[400px] rounded-2xl overflow-hidden"
                  >
                    <ProjectCarousel images={project.images} liveUrl={project.liveUrl} />
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