import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const internships = [
     {
      title: 'AI/ML Intern',
      company: 'AICTE - Google AI/ML Virtual Internship',
      location: 'Virtual',
      period: 'Jan 2025',
      type: 'internship',
      certificateUrl: 'certificates/KALLURIaicte.pdf',
      description: [
        'Completed a structured training program focused on core AI/ML concepts and model deployment',
        'Built ML projects such as sentiment analysis and image classification using Python and TensorFlow',
        'Learned model evaluation techniques including accuracy, precision, recall, and F1-score',
      ],
    },
    {
      title: 'Data Science Intern',
      company: 'Skill Dzire',
      location: 'Remote',
      period: 'May 2025 - Present',
      type: 'internship',
      certificateUrl: 'certificates/datascience.pdf',
      description: [
        'Performed exploratory data analysis and preprocessing on real-world datasets to extract actionable insights',
        'Built classification models using Logistic Regression, Decision Trees, and Random Forest for predictive analytics',
        'Visualized trends and correlations using Matplotlib and Seaborn to support data-driven decision-making',
      ],
    },
   
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      school: 'RVR & JC College of Engineering',
      location: 'Andhra Pradesh, India',
      period: 'Dec 2022 - May 2026',
      score: 'CGPA: 9.1',
      type: 'education',
    },
    {
      degree: 'Intermediate - MPC',
      school: 'Sri Chaitanya Junior College',
      location: 'Andhra Pradesh, India',
      period: 'Aug 2020 - May 2022',
      score: 'Score: 95.7%',
      type: 'education',
    },
  ];

  const certifications = [
    {
      name: 'Database Management System with Python',
      url: 'certificates/dbmsnptel.pdf',
    },
    {
      name: 'AWS Skill Builder Course Completion Certificate',
      url: 'certificates/awscertificate.pdf',
    },
    {
      name: 'AICTE - Google AI/ML Virtual Internship Certification',
      url: 'certificates/KALLURIaicte.pdf',
    },
    {
      name: 'Infosys Springboard 6.0 Generative AI Internship',
      url: 'certificates/infsyisprompt.pdf',
    },
    {
      name: '300+ Problems Solved on LeetCode & HackerRank',
      url: 'https://leetcode.com/u/sonukalluri9/',
    },
  ];

  const handleItemClick = (item: any, type: string) => {
    const element = document.querySelector(`[data-${type}="${item.title || item.name}"]`);
    if (element) {
      element.classList.add('animate-bounce');
      setTimeout(() => {
        element.classList.remove('animate-bounce');
      }, 1000);
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">Internships</h3>
            <div className="space-y-8">
              {internships.map((internship, index) => (
                <div
                  key={index}
                  data-internship={internship.title}
                  className="relative pl-8 pb-8 border-l-2 border-cyan-500/30 last:border-l-0 last:pb-0 cursor-pointer"
                  onClick={() => handleItemClick(internship, 'internship')}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all duration-300 transform hover:scale-105">
                    <h4 className="text-xl font-bold text-white mb-2">{internship.title}</h4>
                    <h5 className="text-lg text-cyan-400 mb-2">{internship.company}</h5>
                    <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {internship.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {internship.location}
                      </div>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {internship.description.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm leading-relaxed">
                          • {item}
                        </li>
                      ))}
                    </ul>

                    {internship.certificateUrl && (
                      <a
                        href={internship.certificateUrl}
                        download
                        className="inline-block px-4 py-2 mt-2 text-sm text-cyan-400 border border-cyan-400 rounded hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        Download Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400 mb-8">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  data-education={edu.degree}
                  className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
                  onClick={() => handleItemClick(edu, 'education')}
                >
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <h5 className="text-lg text-cyan-400 mb-2">{edu.school}</h5>
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-cyan-400" />
                    <span className="text-cyan-300 font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Certifications & Achievements</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a
                    key={index}
                    href={cert.url}
                    {...(cert.url.endsWith('.pdf')
                      ? { download: '', target: undefined, rel: undefined }
                      : { target: '_blank', rel: 'noopener noreferrer' })}
                    data-certification={cert.name}
                    className="block bg-slate-800/30 border border-cyan-500/20 rounded-lg p-4 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => handleItemClick(cert, 'certification')}
                  >
                    <div className="flex items-center gap-3">
                      <Award size={16} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-white font-medium">{cert.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
