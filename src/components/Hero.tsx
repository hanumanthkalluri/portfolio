import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/hanumanth-kalluri', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/hanumantharaokalluri', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:y22cs077@gmail.com', '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hanumantharao Kalluri
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
            Computer Science Engineering Student & AI/ML Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative AI solutions and building dynamic web applications. 
            Currently pursuing B.Tech in CSE with expertise in Machine Learning, Data Science, and Full-Stack Development.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
  <a
    href="public\certificate\final_resume_hanumanth.pdf"
    download
    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
  >
    <span className="flex items-center gap-2 relative z-10">
      <Download size={20} />
      Download Resume
    </span>
    <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
  </a>

  <button 
    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
    className="px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
  >
    View My Work
  </button>
</div>


          <div className="flex justify-center space-x-6">
            <button
              onClick={handleGitHubClick}
              className="group p-3 border border-cyan-500/30 rounded-full hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={handleLinkedInClick}
              className="group p-3 border border-cyan-500/30 rounded-full hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
            <button
              onClick={handleEmailClick}
              className="group p-3 border border-cyan-500/30 rounded-full hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;