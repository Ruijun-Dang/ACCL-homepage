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
    <nav className="sticky top-0 z-50 bg-[#FBFBFC]/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm shadow-gray-100/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl tracking-tight text-gray-900 uppercase">
                {groupData.shortName} <span className="text-blue-600">{groupData.affiliation}</span>
              </span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === link.path ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
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
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-3 py-4 text-base font-medium rounded-md ${
                    location.pathname === link.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
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
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Contact Column - Narrower to make room for links */}
          <div className="md:col-span-7">
            <h3 className="text-xs font-black text-gray-400 tracking-widest uppercase mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="text-xl text-gray-900 font-bold tracking-tight select-all">{groupData.email}</li>
              <li className="text-base text-gray-600 leading-relaxed max-w-2xl font-medium">
                {groupData.department}, {groupData.school}, {groupData.university}
              </li>
            </ul>
          </div>
          
          {/* Related Links Column - Wider to accommodate longer names */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-black text-gray-400 tracking-widest uppercase mb-6">Related Links</h3>
            <div className="flex flex-col space-y-3 text-sm font-semibold">
              <a href="https://www.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-100 mr-3 group-hover:bg-blue-600 transition-colors"></span>
                <span className="whitespace-nowrap">Peking University (PKU)</span>
              </a>
              <a href="https://sess.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-100 mr-3 group-hover:bg-blue-600 transition-colors"></span>
                <span className="whitespace-nowrap">School of Earth and Space Sciences (SESS)</span>
              </a>
              <a href="https://irsgis.pku.edu.cn" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center group">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-100 mr-3 group-hover:bg-blue-600 transition-colors"></span>
                <span className="whitespace-nowrap">Institute of Remote Sensing and GIS (IRS&GIS)</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 tracking-wide uppercase font-bold">
          <p>
            &copy; {new Date().getFullYear()} ACCL @ PKU. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6 text-[10px]">
             <span>{groupData.piName}'s Research Group</span>
             <span className="w-1 h-1 rounded-full bg-gray-300"></span>
             <span>Beijing, China</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageContainer({ children, title, subtitle }: { children: React.ReactNode; title?: string; subtitle?: string }) {
  return (
    <div className="min-h-screen bg-white">
      {(title || subtitle) && (
        <header className="bg-[#FBFBFC] pt-16 pb-12 border-b border-gray-50/80 shadow-sm shadow-gray-100/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {title && <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{title}</h1>}
            {subtitle && <p className="mt-4 text-xl text-gray-500 max-w-3xl">{subtitle}</p>}
          </div>
        </header>
      )}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  );
}
