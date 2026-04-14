import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2, Layers, Zap } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface border border-gray-800 rounded-2xl overflow-y-auto shadow-2xl flex flex-col"
          >
            <div className="sticky top-0 bg-surface/90 backdrop-blur-md border-b border-gray-800 p-6 flex justify-between items-center z-10">
              <div>
                <span className="text-primary font-mono text-sm">{project.category}</span>
                <h2 className="text-2xl font-bold text-white">{project.title}</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-full text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 md:p-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Layers className="text-primary" size={20}/> System Overview
                </h3>
                <p className="text-gray-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Simulated Architecture Visualizer */}
              <div className="bg-gray-950 rounded-xl p-6 border border-gray-800">
                <h3 className="text-sm font-mono text-gray-500 mb-4 uppercase">Architecture Flow</h3>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                   {project.architectureDetails.map((detail, idx) => (
                     <div key={idx} className="flex-1 w-full bg-surface border border-gray-800 p-4 rounded-lg text-center relative group">
                        <span className="text-gray-300 text-sm font-medium">{detail}</span>
                        {/* Connecting lines for desktop */}
                        {idx !== project.architectureDetails.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-[2px] bg-primary/50" />
                        )}
                     </div>
                   ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Code2 className="text-primary" size={20}/> Technical Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}