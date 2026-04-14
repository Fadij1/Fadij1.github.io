import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-background py-8 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2 font-mono">
          Engineered with React, Vite & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}