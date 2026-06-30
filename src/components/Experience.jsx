import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'IT Intern',
      company: 'Lufthansa Technik Philippines',
      date: 'March 2026 – June 2026',
      description: 'Supported enterprise IT operations, hardware troubleshooting, and systems maintenance across corporate and hangar departments. Assisted in network configurations and resolved technical helpdesk tickets to maximize system uptime.',
    },
    {
      role: 'Freelance Video Editor & Multimedia Specialist',
      company: 'Remote',
      date: '2023 – 2025',
      description: 'Managed end-to-end digital workflows, editing and refining video/audio content for remote clients. Optimized rendering processes and maintained organized digital file structures for high-quality output.',
    },
    {
      role: 'Virtual Assistant Intern',
      company: 'Remote (Senior High School Work Immersion)',
      date: '2021 – 2022',
      description: 'Completed a structured corporate work immersion program, handling scheduling, data entry, and basic online administrative tasks using Google Workspace.',
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-mono text-sm mb-4"
          >
            02. My Journey
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Work Experience</h2>
          <p className="text-slate-400 text-lg">My professional journey so far.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:pl-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Dot with pulse */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"
              />
              
              <div className="md:flex md:gap-8 items-start">
                {/* Date */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                  className="md:w-32 md:text-right mb-2 md:mb-0"
                >
                  <span className="text-sm font-mono text-slate-500">{exp.date}</span>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                  className="flex-1 bg-slate-800/30 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3 }}
                    className="text-xl font-bold text-white mb-1"
                  >
                    {exp.role}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="text-blue-400 font-medium mb-3"
                  >
                    {exp.company}
                  </motion.p>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
                    className="text-slate-400 leading-relaxed text-sm"
                  >
                    {exp.description}
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}