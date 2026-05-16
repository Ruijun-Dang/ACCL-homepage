import { motion } from 'motion/react';
import { researchAreas } from '../data';
import { PageContainer } from '../components/Shared';

export default function Research() {
  const formatText = (text: string) => {
    return text.split(/(PM2\.5|NOx|NO2|NH3|CO2)/g).map((part, index) => {
      if (part === "PM2.5") return <span key={index}>PM<sub>2.5</sub></span>;
      if (part === "NO2") return <span key={index}>NO<sub>2</sub></span>;
      if (part === "CO2") return <span key={index}>CO<sub>2</sub></span>;
      if (part === "NOx") return <span key={index}>NO<sub>x</sub></span>;
      if (part === "NH3") return <span key={index}>NH<sub>3</sub></span>;
      return part;
    });
  };

  return (
    <PageContainer
      title="Research"
      subtitle="Advancing the understanding of atmospheric composition and its interaction with the global climate system."
    >
      <div className="flex flex-col gap-[calc(var(--spacing)*12)]">
        {researchAreas.map((area, index) => (
          <div key={area.title} className="flex flex-col gap-[calc(var(--spacing)*12)]">
            {index > 0 && (
              <div className="flex items-center justify-center">
                <div className="w-full md:w-3/4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20 items-start"
          >
            <div className="w-full lg:w-[40%] xl:w-[45%] flex-shrink-0 flex flex-col">
              <h4 className="text-[1.8rem] md:text-[2rem] font-medium font-sans text-gray-900 mb-6 leading-tight tracking-tight">
                {formatText(area.title)}
              </h4>
              <div className="overflow-hidden shadow-sm border border-gray-100 rounded-sm mb-6">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {area.relatedPublications && (
                <div className="text-[15px] text-gray-600 leading-relaxed">
                  <span className="font-semibold text-gray-900 uppercase tracking-wider text-[13px] mr-2">Publications:</span>
                  {area.relatedPublications}
                </div>
              )}
            </div>
            <div className="w-full lg:flex-1 mt-2 lg:mt-0">
              <div className="space-y-6">
                {Array.isArray(area.description) ? (
                  area.description.map((paragraph, i) => (
                    <p key={i} className="text-[1rem] text-gray-600 leading-[1.5] text-left md:text-justify fade-in">
                      {formatText(paragraph)}
                    </p>
                  ))
                ) : (
                  <p className="text-[1rem] text-gray-600 leading-[1.5] text-left md:text-justify fade-in">
                    {formatText(area.description as string)}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
