import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div
         initial={{ opacity: 0, scale: 0.9 }}
         whileInView={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8 }}
         className="space-y-12"
      >
        <p className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-200 leading-tight text-center md:text-left text-balance">
          {PERSONAL_INFO.summary}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="group p-8 bg-primary-500/5 dark:bg-primary-500/10 rounded-3xl border border-primary-500/10 hover:border-primary-500/30 transition-all duration-500 text-center">
             <h3 className="text-5xl font-black text-primary-600 dark:text-primary-400 mb-2 group-hover:scale-110 transition-transform">2+</h3>
             <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Years Coding</p>
          </div>
          <div className="group p-8 bg-purple-500/5 dark:bg-purple-500/10 rounded-3xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-500 text-center">
             <h3 className="text-5xl font-black text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">10+</h3>
             <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Live Projects</p>
          </div>
           <div className="group p-8 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-500 text-center">
             <h3 className="text-5xl font-black text-emerald-600 dark:text-emerald-400 mb-2 group-hover:scale-110 transition-transform">4</h3>
             <p className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Competition Wins</p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
           <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic text-lg text-center">
             "Detail-oriented and ambitious learner aiming to contribute in dynamic tech environments."
           </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;