import { motion } from 'motion/react';
import { researchAreas } from '../data';
import { PageContainer } from '../components/Shared';

export default function Research() {
  return (
    <PageContainer
      title="Research"
      subtitle="Advancing the understanding of atmospheric composition and its interaction with the global climate system."
    >
      <div className="space-y-24">
        {researchAreas.map((area, idx) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-20 items-start"
          >
            <div className="w-full lg:w-1/2">
              <div className="aspect-[16/9] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.3em] text-[#d44a1c] mb-8 pb-4 border-b border-gray-100">Project Focus</h3>
              <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">{area.title}</h4>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-medium">
                {area.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
}
