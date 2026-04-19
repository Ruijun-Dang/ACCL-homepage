import { motion } from 'motion/react';
import { presentations } from '../data';
import { PageContainer } from '../components/Shared';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function Presentations() {
  return (
    <PageContainer
      title="Presentations"
      subtitle="Invited talks, conference presentations, and community posters."
    >
      <div className="max-w-4xl space-y-12">
        {presentations.map((pres, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-50 last:border-0"
          >
            <div className="w-full md:w-48 flex-shrink-0">
               <div className="flex flex-col h-full justify-between">
                <div className="text-3xl font-black text-gray-100 mb-2">{pres.date.split(' ')[1]}</div>
                <div className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest inline-block rounded w-fit">
                  {pres.type}
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{pres.title}</h3>
              <div className="flex flex-wrap gap-y-2 gap-x-6 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {pres.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                  {pres.location}
                </div>
                <div className="flex items-center font-bold text-gray-600">
                  {pres.event}
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <button className="p-2 text-gray-300 hover:text-blue-500 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
}
