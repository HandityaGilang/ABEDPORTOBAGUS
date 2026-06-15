
import { motion } from 'framer-motion';

const skillsList = [
  "Supply Chain Management", "Operations", "Process Improvement", 
  "SOP Deployment", "Compliance Audit", "Data Analytics", 
  "Excel Automation", "Google Apps Script", "Power BI", 
  "SAP", "Primavera P6", "SolidWorks", 
  "Inventory Management", "Project Control", "Public Speaking", 
  "Team Leadership"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="h-[1px] w-12 bg-black mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">Core Capabilities</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {skillsList.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-700 hover:border-black hover:bg-black hover:text-white transition-all cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;