import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { groupData, news, publications } from '../data';
import { PageContainer } from '../components/Shared';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [newsIndex, setNewsIndex] = useState(0);

  return (
    <PageContainer>
      {/* Centered Hero Section */}
      <section className="relative pt-20 pb-12 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
            {groupData.name}
          </h1>
          <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-12">
            @ Peking University
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
            {groupData.mission}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link
              to="/research"
              className="group w-full sm:w-64 inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-2xl text-gray-700 bg-white hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Explore Research
              <ArrowRight className="ml-0 w-0 opacity-0 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100 transition-all duration-300" />
            </Link>
            <Link
              to="/group"
              className="group w-full sm:w-64 inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-2xl text-gray-700 bg-white hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Meet the Team
              <ArrowRight className="ml-0 w-0 opacity-0 group-hover:ml-2 group-hover:w-5 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          </div>
        </motion.div>

        {/* Visual Anchor */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3 }}
           className="relative mx-auto rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
        >
          <img
            src={groupData.image}
            alt="Atmospheric Modeling Visualization"
            className="w-full aspect-[21/9] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
          <div className="absolute bottom-6 left-8 text-left">
            <div className="text-white/60 text-xs font-mono mb-1 capitalize">Latest Visualization</div>
            <div className="text-white font-bold text-sm tracking-wide">Global Aerosol Optical Depth Simulation</div>
          </div>
        </motion.div>
      </section>

      {/* News Slider Section - Width matching image */}
      <section className="max-w-5xl mx-auto mt-6 mb-16">
        <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm relative">
           <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-50">
            <h3 className="text-lg font-black text-gray-900 tracking-tight uppercase">Latest News</h3>
            
            {/* Dots navigation */}
            <div className="flex space-x-2">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setNewsIndex(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    newsIndex === idx ? 'w-6 bg-blue-600' : 'w-1.5 bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden min-h-[140px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={newsIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                <div className="flex-shrink-0 w-24 text-sm font-black text-blue-500 uppercase tracking-widest font-mono text-left">
                  {news[newsIndex].date}
                </div>
                <div className="flex-grow">
                  <p className="text-xl text-gray-800 leading-relaxed font-semibold">
                    {news[newsIndex].content}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Joining the Lab - Redesigned as a cohesive section */}
      <section className="max-w-5xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-gray-50/50 rounded-3xl p-4 border border-blue-50/50">
           <div className="md:col-span-8 p-6 md:p-10 ml-4">
            <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Joining the Lab</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-0 max-w-2xl font-medium">
              We’re looking for motivated students and postdocs to work with us on cleaner air, a healthier planet, and a sustainable future.
            </p>
          </div>
          <div className="md:col-span-4 p-6 flex justify-center md:justify-end mr-6">
            <Link 
              to="/openings" 
              className="group bg-blue-600 text-white p-6 px-12 rounded-2xl hover:shadow-2xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1"
            >
              <div className="flex items-center font-bold text-lg whitespace-nowrap">
                Work with us
                <ArrowRight className="ml-4 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
