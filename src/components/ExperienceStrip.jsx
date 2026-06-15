import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "PT Astro Technologies Indonesia",
    role: "Technical Audit – SOP Deployment",
    period: "Sep 2025 – Present",
    logoText: "ASTRO",
    logoSrc: "https://prod-talentics-storage.s3.ap-southeast-1.amazonaws.com/organizations/111435/logos/1667969737_03aca11e63e8507b29d03a128ee9e1bd08258022.png"
  },
  {
    company: "PT Unilever Tbk",
    role: "Supply Chain Customer Operation – Intern",
    period: "Feb 2025 – Aug 2025",
    logoText: "UNILEVER",
    logoSrc: "https://upload.wikimedia.org/wikipedia/id/3/37/Unilever.png"
  },
  {
    company: "PT JGC Indonesia",
    role: "Project Control & Administration – Intern",
    period: "Nov 2024 – Feb 2025",
    logoText: "JGC",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/e/ec/JGC_Corporation_company_logo.png"
  },
  {
    company: "PT Kaldu Sari Nabati Indonesia",
    role: "Warehouse Inbound – Intern",
    period: "Jan 2023 – Feb 2023",
    logoText: "NABATI",
    logoSrc: "https://upload.wikimedia.org/wikipedia/commons/8/88/Nabati_logo.svg"
  }
];

const ExperienceStrip = () => {
  return (
    <section id="experience" className="px-4 md:px-12 mt-8">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="flex justify-between items-center p-4 md:px-8 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-xs font-bold tracking-widest uppercase">Professional Experience</h3>
          <a href="#" className="text-xs font-medium flex items-center gap-1 text-gray-500 hover:text-black transition-colors">
            View All Experience <ArrowRight size={12} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100 overflow-x-auto custom-scrollbar">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 md:p-8 flex flex-col justify-between hover:bg-gray-50 transition-colors min-w-[250px]"
            >
              <div className="mb-8">
                <div className="h-10 md:h-12 w-20 px-2 bg-white rounded-lg border border-gray-100 shadow-sm flex items-center justify-center mb-4 inline-flex overflow-hidden relative">
                  <img src={exp.logoSrc} alt={exp.company} className="h-full w-full object-contain p-1.5 absolute inset-0" />
                </div>
                <h4 className="font-bold text-sm mb-1">{exp.company}</h4>
                <p className="text-xs text-gray-600 mb-2">{exp.role}</p>
              </div>
              <p className="text-xs text-gray-400 font-medium">{exp.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceStrip;