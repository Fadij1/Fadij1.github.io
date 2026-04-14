import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
          <p className="text-gray-400">Languages, frameworks, and tools I use to build systems.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={category} 
              className="bg-surface border border-gray-800 rounded-xl p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-background border border-gray-800 text-gray-300 rounded-lg text-sm font-medium hover:border-primary/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}