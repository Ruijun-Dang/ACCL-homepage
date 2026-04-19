import { motion } from 'motion/react';
import { researchAreas } from '../data';
import { PageContainer } from '../components/Shared';

export default function Research() {
  return (
    <PageContainer
      title="Research Directions"
      subtitle="Pushing the boundaries of robot learning, physical interaction, and autonomous coordination."
    >
      <div className="space-y-20">
        {researchAreas.map((area, idx) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{area.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {area.description}
              </p>
              <div className="flex items-center space-x-2 text-sm font-semibold text-blue-600">
                <span className="w-8 h-px bg-blue-600"></span>
                <span>Ongoing Project</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageContainer>
  );
}
