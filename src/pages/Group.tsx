import { motion } from 'motion/react';
import { members } from '../data';
import { PageContainer } from '../components/Shared';
import { Twitter, Linkedin, Github, GraduationCap, Link2, Mail, Globe, BookOpen, FileText } from 'lucide-react';

export default function Group() {
  const roles = ['PI', 'Postdoc', 'PhD Student', 'Undergraduate'];

  return (
    <PageContainer
      title="Group"
      subtitle="Dedicated to remotely sensing and modeling the atmospheric composition."
    >
      <div className="space-y-24">
        {roles.map((role) => {
          const groupMembers = members.filter((m) => m.role === role);
          
          return (
            <section key={role}>
              <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-16 pb-4 border-b border-gray-100 flex justify-between items-center">
                <span>{role === 'PI' ? 'LAB PRINCIPAL INVESTIGATOR' : role + 's'}</span>
              </h3>
              
              {groupMembers.length > 0 ? (
                <div className="flex flex-col space-y-24">
                  {groupMembers.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="flex flex-col sm:flex-row gap-10 items-start"
                    >
                      <div className="w-56 flex-shrink-0">
                        <div className="w-56 h-56 transition-all duration-500 overflow-hidden mt-[0.35rem]">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-[center_30%]"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        {member.role === 'PI' && (
                          <div className="space-y-2 mt-6 text-[14px] text-gray-800">
                            {member.links?.email && (
                              <div className="leading-snug"><strong className="font-semibold text-gray-900 mr-1.5">Email:</strong> <a href={member.links.email} className="hover:text-[#d44a1c] underline outline-none underline-offset-4 decoration-gray-300 break-all">{member.links.email.replace('mailto:', '')}</a></div>
                            )}
                            {member.office && (
                               <div className="leading-snug"><strong className="font-semibold text-gray-900 mr-1.5">Office:</strong> <span>{member.office}</span></div>
                            )}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col min-h-[14rem]">
                        <h4 className="text-3xl md:text-[2.5rem] font-sans font-medium text-gray-900 mb-2 uppercase tracking-tight leading-none">
                          {member.name.split('党瑞君')[0]}
                          {member.name.includes('党瑞君') && (
                            <span className="text-[34px] mt-0 normal-case tracking-normal font-normal">党瑞君</span>
                          )}
                        </h4>
                        <div className="text-gray-600 text-lg md:text-xl font-normal mb-6">
                          {member.education}
                        </div>

                        {member.timeline && member.timeline.length > 0 && (
                          <div className="space-y-2 mb-8 text-[15px] text-gray-900 font-medium">
                            {member.timeline.map((item, i) => (
                              <p key={i}>
                                {item.title}, {item.institution}, {item.year}
                              </p>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-6 text-gray-400 mt-auto">
                          {member.links?.email && member.role !== 'PI' && (
                            <a href={member.links.email} className="hover:text-red-500 transition-colors" title="Email">
                              <Mail className="w-5 h-5 -mt-2" />
                            </a>
                          )}
                          {member.links?.scholar && (
                            <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" title="Google Scholar">
                              <BookOpen className="w-5 h-5 -mt-2" />
                            </a>
                          )}
                          {member.links?.cv && (
                            <a href={member.links.cv} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" title="Curriculum Vitae">
                              <FileText className="w-5 h-5 -mt-2" />
                            </a>
                          )}
                          {member.links?.website && (
                            <a href={member.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" title="Personal Website">
                              <Globe className="w-5 h-5 -mt-2" />
                            </a>
                          )}
                          {member.links?.github && (
                            <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" title="GitHub">
                              <Github className="w-5 h-5 -mt-2" />
                            </a>
                          )}
                          {member.links?.linkedin && (
                            <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" title="LinkedIn">
                              <Linkedin className="w-5 h-5 -mt-2" />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-400 italic">
                  Currently seeking motivated {role}s.
                </div>
              )}
            </section>
          );
        })}
      </div>
    </PageContainer>
  );
}
