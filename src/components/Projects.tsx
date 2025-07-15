import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Mind Map Maker',
      description: 'Built a full-stack AI tool to generate dynamic mind maps from natural language prompts using the Gemini API. Features React frontend and Flask backend for real-time prompt handling.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Flask', 'Gemini API', 'Python'],
      liveUrl: 'https://aimindmapmaker.netlify.app/',
      githubUrl: 'https://github.com/hanumantharaokalluri',
      achievements: ['90% semantic alignment accuracy', 'Real-time mind map rendering', 'Export functionality']
    },
    {
      title: 'Medical Chatbot',
      description: 'Leveraged Meta\'s LLaMA2 language model via Hugging Face Transformers to simulate human-like medical interactions with contextual accuracy for general health queries.',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['LLaMA2', 'Python', 'Streamlit', 'Hugging Face'],
      liveUrl: 'https://invoice-p2wm.onrender.com',
      githubUrl: 'https://github.com/hanumantharaokalluri',
      achievements: ['Real-time medical interactions', 'Token filtering system', 'Prompt engineering for safety']
    },
    {
      title: 'QR Code Generator',
      description: 'Developed a responsive web application that allows users to generate QR codes for various data types such as text, URLs, contact details, and Wi-Fi credentials.',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'qrcode.js'],
      liveUrl: 'https://hanumantharaokalluri.github.io/qrgenerator/',
      githubUrl: 'https://github.com/hanumantharaokalluri',
      achievements: ['High scan accuracy', 'Custom styling options', 'One-click download feature']
    }
  ];

  const handleProjectClick = (project: any) => {
    // Create a zoom and glow effect
    const projectElement = document.querySelector(`[data-project="${project.title}"]`);
    if (projectElement) {
      projectElement.classList.add('animate-pulse', 'scale-105');
      setTimeout(() => {
        projectElement.classList.remove('animate-pulse', 'scale-105');
      }, 800);
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-project={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/40 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-cyan-400 font-semibold mb-2">Key Achievements:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 border border-cyan-500 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/hanumantharaokalluri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 rounded-full text-cyan-400 font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 group"
          >
            View All Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;