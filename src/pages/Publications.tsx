import { motion } from 'motion/react';
import { publications } from '../data';
import { PageContainer } from '../components/Shared';
import { FileText, Github, Star } from 'lucide-react';

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <PageContainer
      title="Publications"
      subtitle="Complete list of our research output in journals and conferences."
    >
      <div className="space-y-16">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-3xl font-black text-gray-200 mb-8 border-b border-gray-50 pb-2">
              {year}
            </h2>
            <div className="space-y-8">
              {publications
                .filter((p) => p.year === year)
                .map((pub, idx) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-8 group"
                  >
                    {pub.featured && (
                      <div className="absolute left-0 top-1 p-1 bg-yellow-50 rounded-full text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {pub.authors.map((author, i) => (
                        <span key={i} className={author.includes('Jane Smith') ? 'font-bold underline decoration-blue-200' : ''}>
                          {author}{i < pub.authors.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="text-sm font-bold text-gray-500 italic p-1 px-2 bg-gray-50 rounded">{pub.venue}</span>
                      <div className="flex space-x-3">
                        {pub.pdf && (
                          <a
                            href={pub.pdf}
                            className="inline-flex items-center text-xs font-semibold text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
                          >
                            <FileText className="w-3 h-3 mr-1" /> PDF
                          </a>
                        )}
                        {pub.code && (
                          <a
                            href={pub.code}
                            className="inline-flex items-center text-xs font-semibold text-gray-600 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                          >
                            <Github className="w-3 h-3 mr-1" /> Code
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
