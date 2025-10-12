import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code, Database, Server, Cloud, ChevronRight, ExternalLink, Sparkles, Zap, Users, TrendingUp, Award, Briefcase, GraduationCap, MapPin, Phone } from 'lucide-react';
import profilePic from "./assets/anils_profile.jpeg"
const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "LearnDex",
      subtitle: "E-Learning Platform",
      description: "Full-stack e-learning platform with video streaming, PDF rendering, and real-time progress tracking serving 500+ active users.",
      tech: ["Django", "React.js", "MySQL", "Redis", "Docker"],
      metrics: [
        { icon: Users, value: "500+", label: "Active Users" },
        { icon: TrendingUp, value: "95%", label: "Uptime" },
        { icon: Zap, value: "30%", label: "Faster Load" }
      ],
      featured: true,
      gradient: "from-blue-600 via-purple-600 to-pink-600"
    },
    {
      id: 2,
      title: "GLAMS",
      subtitle: "Real-Time Quiz Platform",
      description: "Scalable multiplayer quiz platform with WebSocket protocol supporting 1,000+ concurrent connections and sub-100ms latency.",
      tech: ["Node.js", "WebSocket", "RabbitMQ", "Redis", "MongoDB"],
      metrics: [
        { icon: Users, value: "1,000+", label: "Concurrent" },
        { icon: Zap, value: "<100ms", label: "Latency" }
      ],
      featured: false,
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      id: 3,
      title: "VegiShop",
      subtitle: "E-Commerce Platform",
      description: "Full-stack e-commerce application for fresh produce with inventory management and optimized data retrieval.",
      tech: ["Spring Boot", "React.js", "MySQL", "Redux", "REST APIs"],
      metrics: [
        { icon: Zap, value: "40%", label: "Faster Retrieval" }
      ],
      featured: false,
      gradient: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  const skills = {
    frontend: ["React.js", "Redux", "TypeScript", "HTML5/CSS3", "Bootstrap", "Responsive Design"],
    backend: ["Node.js", "Django", "Spring Boot", "Express.js", "RESTful APIs", "Microservices"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Query Optimization"],
    devops: ["Docker", "CI/CD", "Git", "Linux", "Nginx", "GitHub Actions"]
  };

  const Navigation = () => (
    <nav className="bg-slate-900/95 border-b border-amber-500/20 sticky top-0 z-50 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center space-x-3">
              {/* Gradient blur background */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-md opacity-50"></div>

              {/* Profile picture */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <img
                  src={profilePic} // imported image
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <span className="text-white font-semibold text-lg hidden md:block">
                Anil Sajjanshetty
              </span>
            </div>
          </div>
          <div className="flex gap-8">
            {['home', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`capitalize transition-all duration-300 relative ${activePage === page
                  ? 'text-amber-500 font-semibold'
                  : 'text-slate-300 hover:text-amber-400'
                  }`}
              >
                {page}
                {activePage === page && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
              <span className="text-amber-500 font-semibold">Full Stack Developer</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Scalable
              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Architecting high-performance applications with React, Node.js, Django, and Spring Boot.
              Delivering production systems serving <span className="text-amber-500 font-semibold">1,000+ concurrent users</span> with
              <span className="text-green-500 font-semibold"> 95% uptime</span>.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="mailto:anilsajjanshetty112@gmail.com"
                className="group bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center gap-2">
                Get In Touch
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={() => setActivePage('about')}
                className="border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full font-semibold hover:bg-amber-500/10 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-500" />
                <span>2+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-500" />
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Animated Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>

              {/* Profile Photo Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl rotate-6 transform transition-transform duration-500 hover:rotate-12"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-500/30">
                  {/* Profile Photo Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      {/* <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg"> */}
                      <img
                        src={profilePic} // replace with your image path
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      {/* </div> */}
                    </div>
                  </div>

                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl px-6 py-3 shadow-xl border-4 border-slate-900">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <span className="text-white font-bold">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2+", label: "Years Experience", icon: Award },
            { value: "1,000+", label: "Concurrent Users", icon: Users },
            { value: "95%", label: "System Uptime", icon: TrendingUp },
            { value: "3+", label: "Major Projects", icon: Code }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105">
              <stat.icon className="w-8 h-8 text-amber-500 mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-amber-500" />
          <h2 className="text-4xl font-bold text-white">Featured Project</h2>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-amber-500/20 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500">
          {/* Project Image */}
          <div className={`relative h-96 bg-gradient-to-br ${projects[0].gradient} overflow-hidden group`}>
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm group-hover:bg-slate-900/40 transition-all duration-500"></div>

            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse delay-75"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse delay-150"></div>
            </div>

            {/* Project Preview */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8">
              <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-amber-500/30 transform group-hover:scale-105 transition-all duration-500 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{projects[0].title}</h3>
                    <p className="text-amber-400 text-lg">{projects[0].subtitle}</p>
                  </div>
                </div>

                {/* Mock Browser Window */}
                <div className="bg-slate-950 rounded-lg overflow-hidden border border-slate-700">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-slate-700 rounded w-3/4 mb-2"></div>
                        <div className="h-2 bg-slate-800 rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg"></div>
                      <div className="h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ExternalLink className="absolute top-6 right-6 w-8 h-8 text-white opacity-60 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="p-8">
            <p className="text-slate-300 mb-6 leading-relaxed text-lg">
              {projects[0].description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {projects[0].metrics.map((metric, idx) => (
                <div key={idx} className="text-center p-4 bg-slate-900/50 rounded-xl border border-amber-500/20">
                  <metric.icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-slate-400 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {projects[0].tech.map((tech) => (
                <span key={tech} className="bg-gradient-to-r from-slate-900 to-slate-800 text-amber-400 px-4 py-2 rounded-full text-sm border border-amber-500/30 hover:border-amber-500/50 transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 group"
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-all"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-6 border border-amber-500/30 transform group-hover:scale-110 transition-all">
                    <Database className="w-16 h-16 text-amber-500" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-amber-500 text-sm mb-3">{project.subtitle}</p>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex items-center gap-4 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <metric.icon className="w-4 h-4 text-amber-500" />
                      <span className="text-white font-semibold text-sm">{metric.value}</span>
                      <span className="text-slate-500 text-xs">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-slate-900 text-amber-400 px-3 py-1 rounded-full text-xs border border-amber-500/30">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-slate-500 text-xs self-center">+{project.tech.length - 3} more</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-amber-500" />
          <h1 className="text-5xl font-bold text-white">About Me</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Profile Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500">
            <div className="relative w-48 h-48 mx-auto mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden border-4 border-amber-500/30">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-slate-900 text-4xl font-bold">
                    AS
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white text-center mb-2">Anil Sajjanshetty</h2>
            <p className="text-amber-500 text-center mb-6">Full Stack Engineer</p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="font-semibold">2+ Years</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-semibold">Pune, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <GraduationCap className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500">Education</p>
                  <p className="font-semibold">PG-DAC, CDAC</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20">
              <h2 className="text-2xl font-bold text-amber-500 mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Professional Summary
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Full Stack Software Engineer with 2 years of experience at the <span className="text-white font-semibold">Centre for Development of Advanced Computing (CDAC)</span>, specializing in architecting scalable, high-performance web applications using modern tech stacks.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                I've delivered production systems serving <span className="text-amber-500 font-semibold">1,000+ concurrent users</span> with <span className="text-green-500 font-semibold">95% uptime</span>. My expertise spans React, Node.js, Django, Spring Boot, and microservices architecture, with a strong focus on RESTful APIs, real-time communication, database optimization, containerization, and CI/CD practices.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently based in Pune, India, I'm passionate about building robust, user-centric applications that solve real-world problems at scale. I thrive on transforming complex requirements into elegant, performant solutions.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Career Highlights</h3>
              <div className="space-y-4">
                {[
                  { icon: Award, text: "Architected LearnDex platform serving 500+ active users" },
                  { icon: Zap, text: "Achieved 30% faster page load times through optimization" },
                  { icon: Users, text: "Built real-time systems handling 1,000+ concurrent connections" },
                  { icon: TrendingUp, text: "Maintained 95% uptime across production systems" }
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-300 leading-relaxed pt-2">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <Code className="w-8 h-8 text-amber-500" />
          Technical Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Frontend Development", icon: Code, skills: skills.frontend, gradient: "from-blue-500 to-cyan-500" },
            { title: "Backend Development", icon: Server, skills: skills.backend, gradient: "from-green-500 to-emerald-500" },
            { title: "Database & Caching", icon: Database, skills: skills.database, gradient: "from-purple-500 to-pink-500" },
            { title: "DevOps & Tools", icon: Cloud, skills: skills.devops, gradient: "from-orange-500 to-red-500" }
          ].map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-slate-900/50 text-slate-300 px-3 py-2 rounded-lg text-sm border border-slate-700 hover:border-amber-500/50 hover:text-amber-400 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-amber-500" />
            Work Experience
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500"></div>

            <div className="space-y-8 ml-20">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-amber-500 relative">
                <div className="absolute -left-24 top-6 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-slate-900">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Project Engineer</h3>
                    <p className="text-amber-500">Centre for Development of Advanced Computing (CDAC)</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded-full">Nov 2023 - Present</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Architecting full-stack applications including LearnDex and GLAMS, implementing microservices architecture, real-time communication systems, and optimizing performance for 1,000+ concurrent users. Delivered 25% increase in user engagement through comprehensive course management systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setTimeout(() => setSubmitStatus(null), 5000);
        } else {
          setSubmitStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
              <h1 className="text-5xl font-bold text-white">Let's Connect</h1>
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have an exciting project in mind? Looking to collaborate? I'd love to hear from you!
              Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Email Address</h3>
                    <a href="mailto:anilsajjanshetty112@gmail.com"
                      className="text-slate-300 hover:text-amber-500 transition-colors break-all">
                      anilsajjanshetty112@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Phone Number</h3>
                    <a href="tel:+918180951367" className="text-slate-300 hover:text-amber-500 transition-colors">
                      +91-8180951367
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-slate-300">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Connect on Social Media
                </h3>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-slate-900/50 p-4 rounded-xl hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/50 group">
                    <Github className="w-8 h-8 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 text-sm text-center">GitHub</p>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-slate-900/50 p-4 rounded-xl hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/50 group">
                    <Linkedin className="w-8 h-8 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 text-sm text-center">LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-amber-500" />
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-slate-300 mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 text-sm font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600"
                    placeholder="Project Collaboration"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 text-sm font-medium">Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all resize-none placeholder-slate-600"
                    placeholder="Tell me about your project or how we can work together..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-xl px-4 py-3 text-green-400 text-sm">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-xl px-4 py-3 text-red-400 text-sm">
                    ✗ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  {!isSubmitting && <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-amber-500" />
              <h3 className="text-xl font-bold text-white">Quick Response Time</h3>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I typically respond to all inquiries within 24 hours. Whether you have a question about my work,
              want to discuss a project, or just want to say hi, I'm always happy to connect with fellow developers
              and potential collaborators!
            </p>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      {activePage === 'home' && <HomePage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'contact' && <ContactPage />}

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-amber-500/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-slate-900 font-bold">
                  AS
                </div>
                <span className="text-white font-bold text-lg">Anil Sajjanshetty</span>
              </div>
              <p className="text-slate-400 text-sm">
                Full Stack Software Engineer passionate about building scalable web applications.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'about', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => setActivePage(page)}
                    className="block text-slate-400 hover:text-amber-500 transition-colors capitalize"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  anilsajjanshetty112@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  +91-8180951367
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Pune, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © 2025 Anil Sajjanshetty. Crafted with React & Tailwind CSS.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-slate-400 hover:text-amber-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
