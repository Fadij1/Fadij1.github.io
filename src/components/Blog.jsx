import { motion } from 'framer-motion';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';

export default function Blog() {
  return (
    <section id="notes" className="py-24 bg-surface border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <BookOpen className="text-primary" /> Technical Notes
          </h2>
          <p className="text-gray-400">Documenting my learning process, architectures, and bug fixes.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-gray-800 rounded-xl p-6 hover:border-primary/50 transition-colors flex flex-col h-full group"
            >
              <div className="flex justify-between items-center text-xs text-gray-500 mb-4 font-mono">
                <span>{post.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {post.summary}
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-900 text-primary/80 text-xs px-2 py-1 rounded border border-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-sm font-medium text-white flex items-center gap-1 group-hover:text-primary transition-colors">
                  Read Note <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}