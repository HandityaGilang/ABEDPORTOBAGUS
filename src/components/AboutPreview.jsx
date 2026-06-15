
import { Linkedin, Mail, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPreview = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Images Side */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/5] md:aspect-[3/4] w-full max-w-[500px] mx-auto overflow-hidden rounded-2xl bg-gray-200"
          >
            <img 
              src="/assets/pic1.jpeg" 
              alt="Abednego at Work" 
              className="w-full h-full object-cover grayscale-[20%]"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
              }}
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-8 -right-4 md:-right-12 w-48 md:w-64 aspect-square bg-white p-2 md:p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:block"
          >
            <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
               <img 
                src="/assets/Design front hero.png" 
                alt="Portrait detail" 
                className="w-full h-full object-cover object-top"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-black"></div>
              <span className="text-xs tracking-widest font-bold uppercase">About Me</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8">
              Turning Data into Decisions. <br />
              <span className="text-gray-500">Processes into Performance.</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-lg">
              I combine analytical thinking with operational understanding to solve real business problems. Passionate about improving systems, ensuring compliance, and driving efficiency across the supply chain.
            </p>

            <div className="flex flex-col w-full max-w-md divide-y divide-gray-200 border-t border-gray-200">
              <a href="#" className="py-4 flex justify-between items-center group hover:pl-2 transition-all">
                <div className="flex items-center gap-3">
                  <Linkedin size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span className="font-medium text-sm">LinkedIn</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>
              
              <a href="mailto:abednego@example.com" className="py-4 flex justify-between items-center group hover:pl-2 transition-all">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span className="font-medium text-sm">Email Me</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>
              
              <a href="#" className="py-4 flex justify-between items-center group hover:pl-2 transition-all">
                <div className="flex items-center gap-3">
                  <Download size={18} className="text-gray-400 group-hover:text-black transition-colors" />
                  <span className="font-medium text-sm">Download CV</span>
                </div>
                <ArrowUpRight size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutPreview;