import React from 'react';
import { FileCheck, ShieldCheck, TrendingUp, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    icon: <FileCheck className="text-gray-400" size={24} />,
    value: "10",
    label: "SOPs Approved",
    desc: "Standardization & Compliance"
  },
  {
    icon: <ShieldCheck className="text-gray-400" size={24} />,
    value: "32",
    label: "Hubs Audited",
    desc: "Operational & Compliance Audit"
  },
  {
    icon: <TrendingUp className="text-gray-400" size={24} />,
    value: "95%",
    label: "Faster Checklist Creation",
    desc: "Process Improvement Impact"
  },
  {
    icon: <BarChart2 className="text-gray-400" size={24} />,
    value: "90%",
    label: "Faster Reporting",
    desc: "Data Analytics & Automation"
  }
];

const Metrics = () => {
  return (
    <div className="px-4 md:px-12 relative z-20">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 flex items-start gap-4 hover:bg-gray-50 transition-colors"
            >
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                {metric.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-serif text-3xl font-medium">{metric.value}</span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-700">{metric.label}</span>
                </div>
                <p className="text-xs text-gray-500">{metric.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Metrics;