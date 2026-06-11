import React from 'react';
import { Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 md:px-12 bg-black text-white relative overflow-hidden mt-12 rounded-t-[2.5rem] mx-4 md:mx-12">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none flex justify-center items-center">
         <span className="font-serif text-[20vw] leading-none whitespace-nowrap opacity-20">AW</span>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Let's build better <br className="hidden md:block"/> systems together.
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mb-12">
            Open to opportunities in Supply Chain, Operations, Data Analytics, FMCG, and Process Improvement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              <Mail size={18} />
              Contact Me
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white px-8 py-4 rounded-full text-sm font-semibold hover:border-white transition-colors">
              <Download size={18} />
              Download CV
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Abednego Lanang Wicaksono. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;