import { motion } from 'motion/react';
import { presentations } from '../data';
import { PageContainer } from '../components/Shared';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function Presentations() {
  return (
    <PageContainer
      title="Presentations"
      subtitle="Sharing our findings at major atmospheric science conferences and invited university seminars."
    >
      <div className="space-y-24">
        {presentations.map((pres, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-3">
                 <p className="text-xs font-bold text-[#d44a1c] uppercase tracking-[0.2em] mb-4 font-mono">
                   {pres.date}
                 </p>
                 <div className="px-3 py-1 border border-gray-100 text-gray-400 font-bold text-[10px] uppercase tracking-widest inline-block rounded-full">
                   {pres.type}
                 </div>
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-snug group-hover:text-blue-700 transition-colors">{pres.title}</h3>
                <div className="flex flex-wrap gap-y-4 gap-x-10 text-[13px] font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-3 opacity-30" />
                    {pres.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 opacity-30" />
                    {pres.location}
                  </div>
                  <div className="flex items-center text-gray-800 font-bold">
                    {pres.event}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
}
