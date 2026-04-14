import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Professional Experience</h2>
          <p className="text-gray-400">Where I've applied engineering principles in the real world.</p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-800 bg-surface text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <Briefcase size={18} />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border border-gray-800 bg-surface/50 hover:bg-surface transition-colors">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                  <h3 className="font-bold text-white text-lg">{exp.role}</h3>
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded mt-2 md:mt-0 inline-block md:inline w-max">{exp.period}</span>
                </div>
                <h4 className="text-sm font-medium text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{exp.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}