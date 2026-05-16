import { motion } from 'motion/react';
import { PageContainer } from '../components/Shared';
import { Mail, Send, Info, CheckCircle2 } from 'lucide-react';
import { groupData } from '../data';

export default function Openings() {
  return (
    <PageContainer
      title="Join Us"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-16">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">PhD & Master Students</h3>
            <p className="text-[1.1rem] text-gray-600 leading-relaxed font-medium">
              We are currently seeking motivated students for projects involving high-performance computing, satellite data analysis, and atmospheric chemistry modeling.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Postdocs</h3>
            <p className="text-[1.1rem] text-gray-600 leading-relaxed font-medium">
              We welcome postdoctoral researchers to join our group. Please contact us to discuss potential projects and fellowship opportunities.
            </p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight">Undergraduates</h3>
            <p className="text-[1.1rem] text-gray-600 leading-relaxed font-medium">
              If you are an undergraduate student at PKU looking for research experience in atmospheric chemistry or climate, please email us with your CV.
            </p>
          </section>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-6 lg:space-y-8">
          <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">What We Value</h4>
            <ul className="space-y-4">
              {[
                "Strong quantitative background",
                "Computational proficiency (Python/Fortran/Matlab)",
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
          
          <div className="bg-white border border-gray-100 p-8 lg:p-10 rounded-2xl">
            <p className="text-gray-500 text-sm mb-4 font-medium uppercase tracking-widest">Direct inquiries to:</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">{groupData.email}</p>
            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-loose">
              Please include a CV and a brief statement of research interests in your email.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
