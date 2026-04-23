import { motion } from 'motion/react';
import { PageContainer } from '../components/Shared';
import { Mail, Send, Info, CheckCircle2 } from 'lucide-react';
import { groupData } from '../data';

export default function Openings() {
  return (
    <PageContainer
      title="Join Us"
      subtitle="The ACCL lab is always looking for motivated researchers to help advance atmospheric science."
    >
      <div className="space-y-40">
        {/* Highlight Section */}
        <section>
          <h2 className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-12 pb-4 border-b border-gray-100">Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-8 tracking-tight">Graduate & Postdoc Positions</h3>
              <p className="text-xl text-gray-600 leading-relaxed font-medium mb-10">
                We are currently seeking motivated researchers for projects involving high-performance computing, satellite data analysis, and climate modeling.
              </p>
              <a
                href={`mailto:${groupData.email}`}
                className="text-sm font-bold uppercase tracking-[0.2em] text-[#d44a1c] border-b-2 border-[#d44a1c] pb-1 hover:text-[#b03a14] hover:border-[#b03a14] transition-all"
              >
                Inquire about Openings
              </a>
            </div>
            <div className="bg-white border border-gray-100 p-12 rounded-2xl">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">What We Value</h4>
              <ul className="space-y-6">
                {[
                  "Strong quantitative background",
                  "Computational proficiency (Python/Fortran)",
                  "Curiosity about Earth systems",
                  "Collaborative mindset"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 bg-[#d44a1c] rounded-full mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Prospective Students</h3>
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">MSc & PhD</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Students interested in pursuing graduate degrees at Peking University should mention <b>{groupData.piName}</b> in their application. We encourage you to reach out early.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Undergraduates</h4>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    If you are an undergraduate student at PKU looking for research experience in atmospheric chemistry or climate, please email us with your CV.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-10">Contact Info</h3>
              <div className="p-12 border border-gray-100 rounded-2xl">
                <p className="text-gray-500 text-sm mb-4 font-medium">Direct inquiries to:</p>
                <p className="text-2xl font-bold text-gray-900 mb-8">{groupData.email}</p>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-loose">
                  Please include a CV and a brief statement of research interests in your email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
