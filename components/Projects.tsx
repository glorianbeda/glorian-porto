import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { Folder } from 'lucide-react';

const Projects = () => {
  return (
    <div id="projects" className="w-full pb-20">
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl text-sm md:text-base">
        A selection of projects demonstrating my expertise in full-stack development.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative bg-slate-50 dark:bg-slate-800/40 rounded-xl p-5 border border-slate-200 dark:border-slate-700/50 hover:border-primary-500 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-md flex flex-col"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="p-2 bg-white dark:bg-slate-800 rounded-lg shadow-sm text-primary-600 dark:text-primary-400">
                <Folder size={20} />
              </div>
              <span className="text-[10px] font-bold font-mono text-slate-400 dark:text-slate-500 uppercase bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                {project.date}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-medium px-2 py-1 rounded-md bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-500 dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;