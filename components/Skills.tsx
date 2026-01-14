import React from 'react';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <div id="skills" className="pb-20 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {SKILLS.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-slate-100 dark:border-slate-700/50 ${index === 2 ? 'md:col-span-2' : ''}`}
          >
            <h3 className="text-sm font-bold mb-4 text-primary-600 dark:text-primary-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 bg-white dark:bg-slate-700/50 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-primary-400 transition-colors group cursor-default shadow-sm flex-grow md:flex-grow-0"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                      {skill.iconUrl ? (
                        <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                      ) : (
                        <div className="w-full h-full bg-slate-300 rounded-full" />
                      )}
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;