import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'AI/ML Development',
      description: 'Building intelligent solutions with Python, TensorFlow, and LLaMA2'
    },
    {
      icon: Palette,
      title: 'Full-Stack Development',
      description: 'Creating dynamic web applications with React, Node.js, and Flask'
    },
    {
      icon: Zap,
      title: 'Data Science',
      description: 'Extracting insights from data using advanced analytics and visualization'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-xl"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate Computer Science Engineering student at RVR & JC College of Engineering 
                  with a strong focus on Artificial Intelligence and Machine Learning. Currently maintaining 
                  a CGPA of 9.1, I'm dedicated to creating innovative solutions that bridge technology and real-world problems.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  My expertise spans across AI/ML development, full-stack web development, and data science. 
                  I've successfully completed internships at Skill Dzire and AICTE-Google AI/ML program, 
                  gaining hands-on experience in building intelligent systems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With 300+ problems solved on LeetCode and HackerRank, I combine strong problem-solving 
                  skills with practical development experience to create impactful projects.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={title}
                className="group flex items-start space-x-4 p-6 rounded-lg bg-slate-800/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:bg-slate-800/50 transform hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
                  <p className="text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;