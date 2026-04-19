import { motion } from 'motion/react';
import { PageContainer } from '../components/Shared';
import { Mail, Send, Info, CheckCircle2 } from 'lucide-react';
import { groupData } from '../data';

export default function Openings() {
  return (
    <PageContainer
      title="Join the Group"
      subtitle="We are always looking for motivated students and postdocs to join our team."
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-600 rounded-3xl p-12 text-white shadow-xl mb-16 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-6">Currently Hiring: PhD Positions</h2>
            <p className="text-blue-50 text-xl leading-relaxed mb-10">
              We have 2 fully-funded PhD positions starting Fall 2025. Projects focus on "Tactile-based Active Perception" and "Collaborative Multi-Robot Learning".
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${groupData.email}`}
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
              >
                Apply Now <Send className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-white rounded-full opacity-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Info className="w-6 h-6 mr-3 text-blue-600" />
              Information for Prospective Students
            </h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-lg mb-2">PhD / Master's Students</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Prospective PhD and Master's students must apply through the university's graduate admission portal. Please mention <b>{groupData.piName}</b> in your Statement of Purpose.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-lg mb-2">Postdoctoral Fellows</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Please email your CV, Research Statement, and 3 reference letters directly to {groupData.piName}.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-3 text-green-500" />
              What we look for
            </h3>
            <ul className="space-y-4">
              {[
                "Strong background in Linear Algebra and Calculus",
                "Proficiency in Python and PyTorch / TensorFlow",
                "Passionate about robotics and autonomous systems",
                "Excellent communication and collaboration skills",
                "Prior research experience is a plus",
                "Self-motivated and curious"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="w-5 h-5 bg-green-50 text-green-600 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-20 p-8 border-2 border-dashed border-gray-200 rounded-3xl text-center">
          <h4 className="text-xl font-bold text-gray-900 mb-4">Undergraduate / Internships</h4>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We offer research opportunities for motivated undergraduates. If you are interested in a summer internship or a semester project, please check back in Spring.
          </p>
          <a href={`mailto:${groupData.email}`} className="text-blue-600 font-bold hover:underline inline-flex items-center">
            <Mail className="mr-2 w-5 h-5" /> Inquire about Internships
          </a>
        </div>
      </div>
    </PageContainer>
  );
}
