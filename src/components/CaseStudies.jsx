import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: "Technical Audit Automation",
    description: "Reduced checklist creation time from 1 hour to 3 minutes using automation.",
    metric: "95% faster",
    category: "Process Improvement"
  },
  {
    title: "Monthly Report Compilation",
    description: "Reduced reporting compilation from 1 hour to 5 minutes.",
    metric: "90% faster",
    category: "Data Analytics"
  },
  {
    title: "VAT & WHT Reconciliation",
    description: "Improved reconciliation tracking and reduced initial processing time.",
    metric: "75% faster",
    category: "Compliance & Audit"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-serif text-3xl font-medium tracking-tight">Case Studies</h2>
        <div className="h-[1px] flex-1 bg-gray-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-black transition-colors"
          >
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{item.category}</span>
              <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 rounded-full">{item.metric}</span>
            </div>
            
            <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-brand-blue transition-colors">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;