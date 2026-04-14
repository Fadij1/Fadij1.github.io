import { motion } from 'framer-motion';
import { Workflow, Code2, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "AI & Workflow Automation",
      description: "Building scalable automated processes, n8n workflows, and AI agent integrations to streamline business operations under the 'We Automate It' initiative.",
      icon: <Workflow size={32} />
    },
    {
      title: "Full-Stack Development",
      description: "Architecting robust web applications, responsive dashboards, and secure RESTful APIs using modern frameworks like React and Node.js.",
      icon: <Code2 size={32} />
    },
    {
      title: "Embedded Systems",
      description: "Developing low-level hardware solutions, RTOS configurations, and micro-controller programming for real-time applications.",
      icon: <Cpu size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-surface border-y border-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Services & Expertise</h2>
          <p className="text-gray-400">Freelance solutions and technical consulting.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background border border-gray-800 p-6 rounded-xl hover:border-primary transition-colors group"
            >
              <div className="text-gray-400 group-hover:text-primary transition-colors mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}