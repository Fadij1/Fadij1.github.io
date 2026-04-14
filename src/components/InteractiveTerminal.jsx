import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Terminal } from 'lucide-react';
import { personalInfo, projects, skills } from '../data/portfolioData';

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Welcome to FadyOS v1.0.0' },
    { type: 'system', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      const cmd = input.trim().toLowerCase();
      let output = '';

      switch (cmd) {
        case 'help':
          output = 'Available commands: \n  ls        List directory contents\n  cat <file> Read file content\n  whoami    Print current user info\n  clear     Clear terminal output';
          break;
        case 'ls':
          output = 'projects/   skills/   about.txt   contact.txt';
          break;
        case 'cat about.txt':
          output = `Name: ${personalInfo.name}\nHeadline: ${personalInfo.headline}\nLocation: ${personalInfo.location}`;
          break;
        case 'cat contact.txt':
          output = `Email: ${personalInfo.email}\nGitHub: ${personalInfo.github}\nLinkedIn: ${personalInfo.linkedin}`;
          break;
        case 'whoami':
          output = 'guest_user';
          break;
        case 'ls projects':
          output = projects.map(p => `- ${p.title} (${p.category})`).join('\n');
          break;
        case 'ls skills':
          output = Object.entries(skills).map(([category, items]) => `${category}:\n  ${items.join(', ')}`).join('\n\n');
          break;
        case 'clear':
          setHistory([]);
          setInput('');
          return;
        default:
          if (cmd.startsWith('cat ')) {
            output = `cat: ${cmd.replace('cat ', '')}: No such file or directory`;
          } else {
            output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
          }
      }

      setHistory(prev => [...prev, { type: 'input', text: `guest@fady.dev:~$ ${input}` }, { type: 'output', text: output }]);
      setInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl h-[500px] bg-[#1e1e1e] rounded-lg shadow-2xl border border-gray-700 flex flex-col overflow-hidden font-mono text-sm"
      >
        {/* Terminal Header */}
        <div className="bg-[#323233] px-4 py-2 flex justify-between items-center border-b border-black">
          <div className="flex items-center gap-2 text-gray-400">
            <Terminal size={16} />
            <span>guest@fady.dev - bash</span>
          </div>
          <div className="flex gap-2">
            <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400" aria-label="minimize"></button>
            <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400" aria-label="maximize"></button>
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center group" aria-label="close">
               <X size={10} className="opacity-0 group-hover:opacity-100 text-black" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto text-gray-300 space-y-2 cursor-text" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className={`${line.type === 'input' ? 'text-green-400' : 'text-gray-300'} whitespace-pre-wrap`}>
              {line.text}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="text-green-400">guest@fady.dev:~$</span>
            <input 
              ref={inputRef}
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent outline-none text-white border-none focus:ring-0 p-0"
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </motion.div>
    </div>
  );
}