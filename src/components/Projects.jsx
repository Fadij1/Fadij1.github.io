import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { Cpu, Globe, Network, Bot } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'Embedded', 'AI', 'Networking'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Interactive Project Lab</h2>
            <p className="text-gray-400">Production-grade systems and simulations.</p>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 mt-6 md:mt-0 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-primary text-background' : 'bg-surface text-gray-400 hover:text-white border border-gray-800'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-surface border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  {project.category === 'Web' && <Globe size={100} />}
                  {project.category === 'Embedded' && <Cpu size={100} />}
                  {project.category === 'Networking' && <Network size={100} />}
                  {project.category === 'AI' && <Bot size={100} />}
                </div>
                
                <span className="text-xs font-mono text-primary mb-3 block">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.hook}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="bg-gray-900 text-gray-300 text-xs px-3 py-1 rounded-md border border-gray-800">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="text-primary text-sm font-medium flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                  View Architecture details &rarr;
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}