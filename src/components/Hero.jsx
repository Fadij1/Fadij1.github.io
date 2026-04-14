import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="text-primary w-6 h-6" />
            <span className="font-mono text-primary tracking-wider uppercase text-sm">System Ready</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            I'm {personalInfo.name}.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Building Intelligent Systems.
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
            {personalInfo.headline} bridging the gap between hardware execution and cloud-scale architecture.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition-colors">
              View Architecture Lab
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border border-gray-700 bg-surface px-6 py-3 rounded-lg font-semibold hover:border-gray-500 transition-colors">
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}