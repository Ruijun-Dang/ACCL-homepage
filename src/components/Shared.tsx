import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Users, BookOpen, Presentation as Talk, UserPlus, Home as HomeIcon } from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { groupData } from '../data';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Research', path: '/research', icon: Rocket },
    { name: 'Group', path: '/group', icon: Users },
    { name: 'Publications', path: '/publications', icon: BookOpen },
    { name: 'Presentations', path: '/presentations', icon: Talk },
    { name: 'Openings', path: '/openings', icon: UserPlus },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-lg tracking-tight text-gray-900 font-sans uppercase">
                {groupData.shortName}@PKU
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] font-bold uppercase tracking-[0.12em] transition-colors hover:text-[#d44a1c] ${
                  location.pathname === link.path ? 'text-[#d44a1c]' : 'text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-4 text-base font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-[#d44a1c]/10 text-[#d44a1c]'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#d44a1c]'
                  }`}
                >
                  <link.icon className="mr-4 h-5 w-5" />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-gray-100 py-10">
      <div className="max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          <div>
            <h3 className="text-base font-bold text-gray-900 mb-2 tracking-tight">{groupData.name}</h3>
            <p className="text-sm text-gray-500 font-medium letter-spacing-[0.02em]">{groupData.university} | {groupData.school}</p>
          </div>
          
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-[12px] font-bold uppercase tracking-[0.15em] text-gray-400">
            <a href="https://www.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-[#d44a1c] transition-all">PKU</a>
            <a href="https://sess.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-[#d44a1c] transition-all">SESS</a>
            <a href="https://irsgis.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="hover:text-[#d44a1c] transition-all">IRS&GIS</a>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center text-[11px] text-gray-400 uppercase tracking-[0.2em] font-bold">
          <p>&copy; {new Date().getFullYear()} {groupData.shortName} @ PKU. All rights reserved.</p>
          <div className="mt-6 md:mt-0 flex space-x-8">
            <a href={`mailto:${groupData.email}`} className="hover:text-gray-900 underline underline-offset-4 decoration-gray-200 hover:decoration-blue-400 transition-all">Contact</a>
            <span className="opacity-50">Beijing, China</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageContainer({ children, title, subtitle }: { children: React.ReactNode; title?: string; subtitle?: string }) {
  const hasHeader = Boolean(title || subtitle);
  
  return (
    <div className="min-h-screen">
      {hasHeader && (
        <header className="pt-24 pb-12 border-b border-gray-100">
          <div className="max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-16">
            {title && <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gray-900 leading-[1.05]">{title}</h1>}
            {subtitle && <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-5xl leading-relaxed font-medium tracking-tight whitespace-pre-line">{subtitle}</p>}
          </div>
        </header>
      )}
      <main className={`max-w-[1120px] mx-auto px-6 sm:px-10 lg:px-16 pb-12 md:pb-16 ${hasHeader ? 'pt-12 md:pt-16' : 'pt-24'}`}>
        {children}
      </main>
    </div>
  );
}
