import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function LoadingScreen({ onComplete }) {
  const [text, setText] = useState('');
  const fullText = "> Fady.dev initializing...\n> Loading modules...\n> Establishing connection...\n> Welcome.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
        setTimeout(onComplete, 800); // Wait a moment before hiding
      }
    }, 40);
    return () => clearInterval(typing);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center text-primary font-mono"
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <Terminal size={48} className="mb-6 animate-pulse" />
      <div className="w-80 h-32 whitespace-pre-wrap text-left text-sm md:text-base">
        {text}
        <span className="animate-ping">_</span>
      </div>
    </motion.div>
  );
}