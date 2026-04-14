import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Star } from 'lucide-react';
import { GithubIcon } from './Contact';

export default function GithubStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/Fadij1')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.error('Failed to fetch GitHub stats', err));
  }, []);

  if (!stats) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <a href={stats.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-2xl font-bold text-white hover:text-primary transition-colors mb-8">
          <GithubIcon size={28} /> Live GitHub Activity
        </a>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Public Repos", value: stats.public_repos, icon: <BookOpen /> },
            { label: "Followers", value: stats.followers, icon: <Users /> },
            { label: "Following", value: stats.following, icon: <Users /> },
            { label: "Gists", value: stats.public_gists, icon: <Star /> }
          ].map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-surface border border-gray-800 p-4 rounded-lg flex flex-col items-center justify-center gap-2"
             >
               <div className="text-primary">{stat.icon}</div>
               <span className="text-3xl font-mono font-bold text-white">{stat.value}</span>
               <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}