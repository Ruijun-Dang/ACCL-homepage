import { motion } from 'motion/react';
import { publications } from '../data';
import { PageContainer } from '../components/Shared';
import { FileText, Github, Star } from 'lucide-react';

export default function Publications() {
  const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

  return (
    <PageContainer title="Publications">
      <div className="space-y-16">
        {years.map((year) => (
          <div key={year}>
            <h2 className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 pb-4 border-b border-gray-100 flex justify-between items-center">
              <span>{year}</span>
            </h2>
            <div className="space-y-8">
              {publications
                .filter((p) => p.year === year)
                .map((pub, idx) => (
                  <div
                    key={pub.id}
                    className="group"
                  >
                    <h3 className="text-lg font-medium text-gray-900 mb-2 leading-snug group-has-[a:hover]:text-[#d44a1c] transition-colors">
                      {pub.title.split(/(PM2\.5|NOx|NO2|CO2)/g).map((part, index) => {
                        if (part === "PM2.5") return <span key={index}>PM<sub>2.5</sub></span>;
                        if (part === "NO2") return <span key={index}>NO<sub>2</sub></span>;
                        if (part === "CO2") return <span key={index}>CO<sub>2</sub></span>;
                        if (part === "NOx") return <span key={index}>NO<sub>x</sub></span>;
                        return part;
                      })}
                    </h3>
                    <p className="text-[15px] text-gray-600 mb-2 leading-relaxed">
                      {pub.authors.map((author, i) => (
                        <span key={i} className={author.includes('Dang, R.') ? 'text-gray-900 font-semibold' : ''}>
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
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#d44a1c] hover:text-[#b03a14] transition-colors"
                          >
                            <FileText className="w-3.5 h-3.5 mr-2" /> Link
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
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
