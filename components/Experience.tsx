import React from 'react';
import { EXPERIENCE, ACHIEVEMENTS } from '../constants';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <div id="experience" className="w-full pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Work Experience */}
        <div>
          <div className="flex items-center gap-2 mb-6 sticky top-0 bg-white/50 dark:bg-carddark/50 backdrop-blur-sm p-2 rounded-lg z-10">
            <div className="p-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Experience</h3>
          </div>

          <div className="space-y-8 border-l-2 border-slate-200 dark:border-slate-700 ml-3 pl-6 relative">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[37px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-carddark border-4 border-blue-500 dark:border-blue-400 z-10 group-hover:scale-110 transition-transform" />
                
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2 mt-1">
                   <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">{exp.company}</p>
                   <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
                   <div className="flex items-center gap-1 text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded w-fit">
                      <Calendar size={10} />
                      {exp.date}
                   </div>
                </div>

                <ul className="space-y-2 mt-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
           <div className="flex items-center gap-2 mb-6 sticky top-0 bg-white/50 dark:bg-carddark/50 backdrop-blur-sm p-2 rounded-lg z-10">
            <div className="p-1.5 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 dark:text-yellow-400">
              <Trophy size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Achievements</h3>
          </div>

          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-50 dark:bg-slate-800/30 p-5 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-yellow-400/50 hover:bg-yellow-50/50 dark:hover:bg-yellow-900/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">{ach.title}</h4>
                  <span className="shrink-0 text-[10px] font-bold text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 rounded-full border border-yellow-200 dark:border-yellow-800/50">
                    {ach.rank}
                  </span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2 font-medium flex items-center gap-2">
                  <span>{ach.event}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>{ach.date}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ach.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;