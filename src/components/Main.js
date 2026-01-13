import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Coffee,
} from "lucide-react";
import CircularText from "../animations/CircularText";
import myimage from "../assets/mypic.png";
import SkillsSection from "./SkillsSection";

const Main = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentProject, setCurrentProject] = useState(0);
  // Carousel navigation functions
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Job Candidature Analysis",
      description:
        "Built a Python-based web application that parses resumes and job descriptions to generate real-time matching scores, skill gap insights, and soft-skill indicators using NLP and semantic embeddings. Delivered an end-to-end system with robust PDF parsing, explainable scoring, and admin analytics for efficient candidate evaluation.",
      tech: ["Streamlit", "Python", "NLP", "Semantic Embeddings"],
      github:
        "https://github.com/kritisharma1303/Job-Candidature-Analysis",
      live: "#",
      emoji: "👩‍🎓",
    },
    {
      title: "Loan Origination System",
      description:
        "Built a full-stack loan origination system using React, Spring Boot, and PostgreSQL, integrating OCR to automate document processing and reduce manual effort by 60%. Designed scalable UIs and REST APIs to ensure efficient workflow management and seamless data integration.",
      tech: ["React", "Spring Boot", "PostgreSQL", "OCR"],
      github: "#",
      live: "#",
      emoji: "👩‍🎓",
    },
    
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "CSS/Tailwind", level: 85 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              <img
                src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                width="35px"
                alt="Hi! wave"
              ></img>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize hover:text-blue-400 transition-colors ${
                      activeSection === item ? "text-blue-400" : "text-gray-300"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left py-2 capitalize hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <CircularText
                    text="Hi, I'm Kriti"
                    animateOn="view"
                    revealDirection="center"
                    speed={200}
                  />
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                  ☕️ 💻 🧠
                </p>
                <p className="text-xl md:text-xl text-gray-300 mb-8">
                  Backend Developer | AI/ML 
                </p>
                <div className="flex justify-center space-x-6 mb-12">
                  <a
                    href="https://github.com/kritisharma1303"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Github size={28} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kriti-sharma-78a030195/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={28} />
                  </a>
                  <a
                    href="mailto:kritisharma1303@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    <Mail size={28} />
                  </a>
                </div>
                <button
                  onClick={() => scrollToSection("about")}
                  className="animate-bounce"
                >
                  <ChevronDown size={32} className="text-blue-400" />
                </button>
              </div>
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center">
                    <img alt="my-pic" src={myimage} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-8xl">💻</span>
                  </div>
                </div>
              </div>
              <div className="text-left z-10">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Backend-focused Software Engineer with 2.7 years of experience
building scalable systems using Java and Spring Boot in the
banking domain. Strong in REST APIs, authentication (SSO/SAML),
messaging systems, and SQL-backed applications.
 I build scalable,
                  high-performance systems. If you’re looking for someone to
                  drive impactful projects, let’s connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


        <SkillsSection/>
      {/* Skills Section */}
    

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl py-3 font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Carousel Container */}
          <div className="relative max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => ( 
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gray-900 rounded-lg overflow-hidden mx-4">
                      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-4xl">🚀</span>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tech.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 bg-blue-900 text-blue-200 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-6">
                          <a
                            href={project.github}
                            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-lg"
                          target="_blank"
                          rel="noreferrer"
                          >
                            <ExternalLink size={24} />
                            <span>Take me there!</span>
                          </a>
                          {/* <a
                            href={project.live}
                            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors text-lg"
                          >
                            <ExternalLink size={24} />
                            <span>Live Demo</span>
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-gray-900 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            {/* <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? "bg-blue-400 scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div> */}

            {/* Project Counter */}
            {/* <div className="text-center mt-4 text-gray-400">
              {currentProject + 1} / {projects.length}
            </div> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can work together!
            </p>
            <div className="space-y-12">
              </div>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:kritisharma1303@gmail.com"
                className="flex items-center space-x-3 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
             >
                <Mail size={24} />
                <span>Email Me</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kriti-sharma-78a030195/"
                className="flex items-center space-x-3 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
               {/* <a
                href="https://share.google/AkWHZbr46Ndxnb7YH"
                className="flex items-center space-x-3 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors"
              >
                <Coffee size={24} />
                <span>Coffee</span>
              </a> */}
            </div>
            
          </div>
        </div>
      </section>

     

      {/* Footer */}
      <footer className="bg-gray-800 py-6 text-center text-gray-400">
        <p>&copy; 2025 </p>
      </footer>
    </div>
  );
};

export default Main;
