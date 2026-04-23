import { motion } from 'motion/react';
import { publications } from '../data';
import { PageContainer } from '../components/Shared';
import { FileText, Github, Star } from 'lucide-react';

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <PageContainer
      title="Publications"
      subtitle="The lab's research output covering satellite remote sensing, greenhouse gas quantification, and atmospheric modeling."
    >
      <div className="space-y-16">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-12 pb-4 border-b border-gray-100 flex justify-between items-center">
              <span>{year}</span>
            </h2>
            <div className="space-y-12">
              {publications
                .filter((p) => p.year === year)
                .map((pub, idx) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#d44a1c] transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-base text-gray-600 mb-4 leading-relaxed font-medium">
                      {pub.authors.map((author, i) => (
                        <span key={i} className={author.includes('Ruijun Dang') ? 'text-gray-900 font-bold border-b border-orange-200' : ''}>
                          {author}{i < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                    <div className="flex flex-wrap items-center gap-6">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{pub.venue}</span>
                      <div className="flex space-x-6">
                        {pub.pdf && (
                          <a
                            href={pub.pdf}
                            className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#d44a1c] hover:text-[#b03a14] transition-colors"
                          >
                            <FileText className="w-3.5 h-3.5 mr-2" /> Download PDF
                          </a>
                        )}
                        {pub.code && (
                          <a
                            href={pub.code}
                            className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 mr-2" /> Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
