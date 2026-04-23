import { motion } from 'motion/react';
import { members } from '../data';
import { PageContainer } from '../components/Shared';
import { Twitter, Linkedin, Github, GraduationCap, Link2, Mail, Globe, BookOpen } from 'lucide-react';

export default function Group() {
  const roles = ['PI', 'Postdoc', 'PhD Student', 'Masters Student', 'Undergraduate', 'Alumni'];

  return (
    <PageContainer
      title="People"
      subtitle="A diverse group of researchers dedicated to measuring and modeling the atmosphere."
    >
      <div className="space-y-24">
        {roles.map((role) => {
          const groupMembers = members.filter((m) => m.role === role);
          
          return (
            <section key={role}>
              <h3 className="text-[13px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-16 pb-4 border-b border-gray-100 flex justify-between items-center">
                <span>{role === 'PI' ? 'LAB PRINCIPAL INVESTIGATOR' : role + 's'}</span>
                <span className="text-[10px] opacity-50 font-mono tracking-widest">{groupMembers.length} Person</span>
              </h3>
              
              {groupMembers.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-24">
                  {groupMembers.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.6 }}
                      className="flex flex-col sm:flex-row gap-10 items-start"
                    >
                      <div className="w-56 h-56 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="pt-2">
                        <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">{member.name}</h4>
                        <div className="text-[#d44a1c] text-sm font-bold uppercase tracking-[0.2em] mb-6">
                          {member.education}
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-8 text-base font-medium">
                          {member.bio}
                        </p>
                        <div className="flex flex-wrap gap-6 text-gray-400">
                          {member.links?.email && (
                            <a href={member.links.email} className="hover:text-red-500 transition-colors" title="Email">
                              <Mail className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.scholar && (
                            <a href={member.links.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" title="Google Scholar">
                              <BookOpen className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.website && (
                            <a href={member.links.website} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" title="Personal Website">
                              <Globe className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.github && (
                            <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors" title="GitHub">
                              <Github className="w-5 h-5" />
                            </a>
                          )}
                          {member.links?.linkedin && (
                            <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-colors" title="LinkedIn">
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
