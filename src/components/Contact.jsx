import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="py-32 px-6 text-white text-center relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-blue-400 font-mono text-sm mb-4"
        >
          03. What's Next?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let's Build Something Great.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-slate-400 text-lg mb-10 max-w-xl mx-auto"
        >
          I am currently available for immediate full-time employment. Whether you have a role in mind or just want to talk about React, Electron, or hardware integration, my inbox is open!
        </motion.p>

        {/* Big Email Button */}
        <motion.a 
          href="mailto:krandellek@gmail.com" 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20 mb-12"
        >
          Say Hello →
        </motion.a>

        {/* Contact Details Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto mt-16"
        >
          {[
            { label: 'EMAIL', value: 'krandellek@gmail.com', href: 'mailto:krandellek@gmail.com' },
            { label: 'PHONE', value: '+63 976 310 2760', href: 'tel:+639763102760' },
            { label: 'LOCATION', value: 'Dasmarinas City, Cavite', href: null }
          ].map((item, index) => (
            <motion.div 
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
              className="p-4 bg-slate-800/50 rounded-lg border border-slate-700 transition-all duration-300"
            >
              <p className="text-slate-500 text-xs font-mono mb-1">{item.label}</p>
              {item.href ? (
                <a href={item.href} className="text-white hover:text-blue-400 transition-colors text-sm break-all">
                  {item.value}
                </a>
              ) : (
                <p className="text-white text-sm">{item.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Simple Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
        className="mt-32 pt-8 border-t border-slate-800 text-slate-600 text-sm"
      >
        <p>Designed & Built by Krandelle Josh Kalaw © 2026</p>
      </motion.div>
    </section>
  );
}