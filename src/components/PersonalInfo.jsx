import { motion } from 'framer-motion';
import { personalInfo, certificatesAndVolunteering } from '../data/portfolioData';
import { User, GraduationCap, Globe2, Calendar, MapPin, Phone, Award } from 'lucide-react';

export default function PersonalInfo() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Personal Information</h2>
          <p className="text-gray-400">Background, education, and achievements.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="text-primary" size={24} /> Details
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <span className="font-bold w-24">Name:</span> {personalInfo.name}
              </li>
              <li className="flex items-center gap-3">
                <span className="font-bold w-24">ID:</span> {personalInfo.studentId}
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-gray-500"/> {personalInfo.location}
              </li>
              <li className="flex items-center gap-3">
                <Calendar size={18} className="text-gray-500"/> {personalInfo.dateOfBirth}
              </li>
              <li className="flex items-center gap-3">
                <Globe2 size={18} className="text-gray-500"/> {personalInfo.nationality}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500"/> {personalInfo.phone}
              </li>
            </ul>

            <h3 className="text-xl font-bold text-white mb-4 mt-8 flex items-center gap-2">
              <Globe2 className="text-primary" size={24} /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {personalInfo.languages.map((lang, idx) => (
                <span key={idx} className="bg-gray-900 text-gray-300 text-sm px-3 py-1 rounded-md border border-gray-800">
                  <strong className="text-white">{lang.name}:</strong> {lang.proficiency}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Education & Certificates Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} /> Education
            </h3>
            <div className="space-y-6">
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-gray-800 pl-4 relative">
                  <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2"></div>
                  <h4 className="font-bold text-white">{edu.degree}</h4>
                  <p className="text-primary text-sm font-mono mt-1">{edu.school}</p>
                  <div className="flex justify-between text-gray-400 text-sm mt-2">
                    <span>{edu.period}</span>
                    {edu.gpa && <span>GPA: {edu.gpa}</span>}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-white mb-4 mt-8 flex items-center gap-2">
              <Award className="text-primary" size={24} /> Certificates & Volunteering
            </h3>
            <ul className="space-y-3">
              {certificatesAndVolunteering.map((item, idx) => (
                <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}