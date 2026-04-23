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
      {/* Hero Section */}
      <section className="mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-[clamp(2.5rem,5.1vw,3.6rem)] md:whitespace-nowrap font-display font-medium text-[#d44a1c] leading-[1.1] mb-[calc(1rem+1.5vw)] tracking-tight">
            {groupData.name}
          </h1>
          <div className="text-[clamp(1rem,1.7vw,1.2rem)] text-gray-400 font-bold uppercase tracking-[0.2em] mb-[calc(1.5rem+2vw)]">
            Peking University | 北京大学
          </div>
          
          <p className="text-[clamp(1.1rem,2.1vw,1.5rem)] text-gray-700 leading-relaxed max-w-none mb-[calc(1.5rem+1.5vw)] font-medium tracking-tight">
            {groupData.mission}
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6 mb-12">
            <Link
              to="/research"
              className="group inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-sm font-bold uppercase tracking-widest rounded-xl text-gray-700 bg-white hover:bg-[#d44a1c] hover:text-white hover:border-[#d44a1c] transition-all duration-300"
            >
              Explore Our Research
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/group"
              className="group inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-sm font-bold uppercase tracking-widest rounded-xl text-gray-700 bg-white hover:bg-[#d44a1c] hover:text-white hover:border-[#d44a1c] transition-all duration-300"
            >
              Meet Our Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Large Featured Image */}
      <section className="mb-16">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="relative aspect-[21/9] overflow-hidden rounded-2xl shadow-sm border border-gray-100"
        >
          <img
            src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2672"
            alt="Atmospheric Modeling Visualization"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute bottom-10 left-12 right-12 text-white">
             <p className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-80 mb-2">Remote Sensing Observation</p>
             <p className="text-sm font-medium max-w-xl">Satellite-based quantification of global atmospheric composition and greenhouse gases.</p>
          </div>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-8">
        {/* News Column */}
        <div className="lg:col-span-8">
          <section>
            <h2 className="text-[clamp(11px,1.2vw,13px)] font-bold uppercase tracking-[0.3em] text-gray-400 mb-[calc(1.5rem+1vw)] pb-4 border-b border-gray-100">Latest Updates</h2>
            
            <div className="space-y-[calc(2rem+1.5vw)]">
              {news.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <p className="text-[clamp(10px,1vw,12px)] font-bold text-[#d44a1c] uppercase tracking-widest mb-3 font-mono">
                    {item.date}
                  </p>
                  <p className="text-[clamp(1.1rem,1.8vw,1.25rem)] text-gray-800 leading-relaxed font-semibold group-hover:text-[#d44a1c] transition-colors">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* Joining / Sidebar Column */}
        <div className="lg:col-span-4">
          <section className="sticky top-28">
            <h2 className="text-[clamp(11px,1.2vw,13px)] font-bold uppercase tracking-[0.3em] text-gray-400 mb-[calc(1.5rem+1vw)] pb-4 border-b border-gray-100">Joining Us</h2>
            <div className="bg-white border border-gray-100 rounded-2xl p-[calc(1.5rem+1vw)]">
              <p className="text-[clamp(1rem,1.5vw,1.1rem)] text-gray-700 font-medium leading-relaxed mb-8">
                We are actively looking for motivated graduate students and postdocs to join our group.
              </p>
              <Link 
                to="/openings" 
                className="group inline-flex items-center text-sm font-bold uppercase tracking-[0.2em] text-[#d44a1c] hover:text-[#b03a14] transition-all"
              >
                View Open Positions
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  );
}
