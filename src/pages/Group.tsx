import { motion } from 'motion/react';
import { members } from '../data';
import { PageContainer } from '../components/Shared';
import { Twitter, Linkedin, Github, GraduationCap, Link2, Mail, Globe, BookOpen } from 'lucide-react';

export default function Group() {
  const roles = ['PI', 'Postdoc', 'PhD Student', 'Masters Student', 'Undergraduate', 'Alumni'];

  return (
    <PageContainer
      title="Our Team"
      subtitle="Diverse researchers united by the passion for atmospheric remote sensing and climate modeling."
    >
      <div className="space-y-24">
        {roles.map((role) => {
          const groupMembers = members.filter((m) => m.role === role);
          
          return (
            <section key={role}>
              <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest mb-12 flex items-center">
                {role === 'PI' ? 'GROUP PI' : role + 's'} 
                <span className="ml-4 flex-grow h-px bg-gray-100"></span>
              </h3>
              
              {groupMembers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
                  {groupMembers.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex flex-col sm:flex-row gap-6 group"
                    >
                      <div className="w-48 h-48 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm border border-gray-100 ring-4 ring-white group-hover:ring-blue-50 transition-all duration-500">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h4>
                        <div className="flex items-center text-blue-600 text-sm font-medium mb-3">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          {member.education}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                          {member.bio}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          {member.links?.scholar && (
                            <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors" title="Google Scholar">
                              <BookOpen className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.researchgate && (
                            <a href={member.links.researchgate} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors" title="ResearchGate">
                              <Link2 className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.website && (
                            <a href={member.links.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-600 transition-colors" title="Personal Website">
                              <Globe className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.email && (
                            <a href={member.links.email} className="text-gray-400 hover:text-red-500 transition-colors" title="Email">
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.github && (
                            <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors" title="GitHub">
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.linkedin && (
                            <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors" title="LinkedIn">
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-400 italic">
                  Currently seeking motivated {role}s. See <a href="/openings" className="text-blue-400 hover:underline">Openings</a> for more details.
                </div>
              )}
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
}
