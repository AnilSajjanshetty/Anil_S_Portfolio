import React, { useState } from 'react';
import { Mail, Github, Linkedin, Code, Database, Server, Cloud, ChevronRight, ExternalLink, Sparkles, Zap, Users, TrendingUp, Award, Briefcase, GraduationCap, MapPin, Phone } from 'lucide-react';
import profilePic from "./assets/anils_profile.jpeg";
import shraddhsjinsImg from "./assets/images/shraddhsjinsImg.jpeg";
import shraddhsjinsVideo from "./assets/videos/shraddhsjinsVideo.mp4";
import schoolmanagementImg from "./assets/images/schoolmanagementImg.jpeg";
import schoolmanagementVideo from "./assets/videos/schoolmanagementVideo.mp4";
import functionhallImg from "./assets/images/functionhallImg.jpeg";
import functionhallVideo from "./assets/videos/functionhallVideo.mp4";
import learndexImg from "./assets/images/learndexImg.jpeg";
import learndexVideo from "./assets/videos/learndexVideo.mp4";
import glamsImg from "./assets/images/glamsImg.png";
import glamsVideo from "./assets/videos/glamsVideo.mp4";
// import vegishopImg from "./assets/images/vegishopImg.jpeg"; // Assuming this exists, adjust path if needed
// import vegishopVideo from "./assets/videos/vegishopVideo.mp4"; // Assuming this exists

const App = () => {
  const [activePage, setActivePage] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showVideo, setShowVideo] = useState({});

  const projects = [
    {
      id: 1,
      slug: "shraddhsjins",
      title: "Shraddha Jins",
      subtitle: "MERN Stack E-Shopping Platform",
      description: "Full-stack e-commerce application enabling admins to add and manage products, with seamless user purchasing, inventory tracking, and secure payment integration for a smooth shopping experience.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      metrics: [
        { icon: TrendingUp, value: "50%", label: "Conversion Rate" },
        { icon: Users, value: "300+", label: "Registered Users" },
        { icon: Zap, value: "2x", label: "Faster Checkout" }
      ],
      image: shraddhsjinsImg,
      video: shraddhsjinsVideo,
      featured: true,
      gradient: "from-pink-600 via-red-500 to-orange-500"
    },
    {
      id: 2,
      slug: "schoolmanagement",
      title: "School Management System",
      subtitle: "MERN Stack Role-Based School Portal",
      description: "Comprehensive school management platform with multi-role access: Headmaster manages staff/students, Class Teachers track progress/announcements/events, Teachers handle subjects/schedules, Students view attendance/exams/progress for efficient educational workflows.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      metrics: [
        { icon: Users, value: "500+", label: "Student Capacity" },
        { icon: TrendingUp, value: "40%", label: "Efficiency Gain" },
        { icon: Zap, value: "<1s", label: "Page Load" }
      ],
      image: schoolmanagementImg,
      video: schoolmanagementVideo,
      featured: true,
      gradient: "from-blue-600 via-indigo-500 to-purple-600"
    },
    {
      id: 3,
      slug: "functionhall",
      title: "Function Hall Booking",
      subtitle: "MERN Stack Event Booking System",
      description: "Dynamic booking platform where admins manage announcements/events/offers/services, users book slots for events, provide feedback, and experience seamless reservations with real-time availability.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
      metrics: [
        { icon: TrendingUp, value: "60%", label: "Booking Increase" },
        { icon: Users, value: "200+", label: "Monthly Bookings" },
        { icon: Zap, value: "99%", label: "Availability Sync" }
      ],
      image: functionhallImg,
      video: functionhallVideo,
      featured: false,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      id: 4,
      slug: "learndex",
      title: "LearnDex",
      subtitle: "E-Learning Platform",
      description: "Advanced e-learning ecosystem where students enroll in courses, earn certificates, and track progress; instructors create/upload modules/content and learn themselves; admins oversee enrollments, course creation, and platform management with video streaming and role-based access.",
      tech: ["Django", "React.js", "PostgreSQL", "MySQL", "Redis", "Docker"],
      metrics: [
        { icon: Users, value: "500+", label: "Active Users" },
        { icon: TrendingUp, value: "95%", label: "Uptime" },
        { icon: Zap, value: "30%", label: "Faster Load" },
        { icon: Award, value: "100+", label: "Certificates Issued" }
      ],
      image: learndexImg,
      video: learndexVideo,
      featured: false,
      gradient: "from-purple-600 via-pink-500 to-rose-500"
    },
    {
      id: 5,
      slug: "glams",
      title: "GLAMS",
      subtitle: "Real-Time Quiz Platform",
      description: "Scalable multiplayer quiz platform with WebSocket protocol supporting 1,000+ concurrent connections and sub-100ms latency.",
      tech: ["Node.js", "WebSocket", "RabbitMQ", "Redis", "MongoDB"],
      metrics: [
        { icon: Users, value: "1,000+", label: "Concurrent" },
        { icon: Zap, value: "<100ms", label: "Latency" }
      ],
      image: glamsImg,
      video: glamsVideo,
      featured: false,
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      id: 6,
      slug: "vegishop",
      title: "VegiShop",
      subtitle: "E-Commerce Platform",
      description: "Full-stack e-commerce application for fresh produce with inventory management and optimized data retrieval using Spring Boot and React.",
      tech: ["Spring Boot", "React.js", "MySQL", "Redux", "REST APIs"],
      metrics: [
        { icon: Zap, value: "40%", label: "Faster Retrieval" }
      ],
      image: null,
      video: null,
      //  image: vegishopImg,
      // video: vegishopVideo,
      featured: false,
      gradient: "from-orange-500 via-red-500 to-pink-500"
    }
  ];

  const skills = {
    frontend: ["ReactJS", "HTML5", "CSS3", "Bootstrap", "Tailwind-css", "Responsive Design", "jQuery", "AJAX", "JSON", "XML"],
    backend: ["Java", "JavaScript (ES6+)", "TypeScript", "Python", "Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "JSP", "Node.js", "Express.js", "Django"],
    database: ["PostgreSQL", "MySQL", "Oracle", "MongoDB", "SQL", "Redis", "Database Design"],
    devops: ["Docker", "CI/CD", "Git", "Apache Tomcat", "Eclipse", "Visual Studio Code", "Postman", "Prometheus", "Grafana",],
    other: ["RESTful APIs", "Microservices Architecture", "RabbitMQ", "Web Services", "JWT Authentication", "OAuth 2.0", "Unit Testing", "Integration Testing", "UAT", "Code Quality Assurance", "Agile/Scrum", "Sprint Planning", "Requirements Analysis", "Technical Documentation"]
  };

  const handleMouseEnter = (id) => {
    setHoveredProject(id);
    setShowVideo(prev => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoveredProject(null);
    setShowVideo(prev => ({ ...prev, [id]: false }));
  };

  const Navigation = () => (
    <nav className="bg-slate-900/95 border-b border-amber-500/20 sticky top-0 z-50 backdrop-blur-md shadow-lg px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex items-center space-x-3">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-full blur-md opacity-50"></div>
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-semibold text-lg hidden sm:block">
                Anil Sajjanshetty
              </span>
            </div>
          </div>
          <div className="flex gap-4 sm:gap-8 w-full sm:w-auto justify-center sm:justify-end">
            {['home', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`capitalize transition-all duration-300 relative text-sm sm:text-base ${activePage === page
                  ? 'text-amber-500 font-semibold'
                  : 'text-slate-300 hover:text-amber-400'
                  }`}
              >
                {page}
                {activePage === page && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
              <span className="text-amber-500 font-semibold text-sm sm:text-base">Full Stack Developer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
              Building Scalable
              <span className="block bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed px-4 lg:px-0">
              Web Application Developer with 2 years of hands-on experience in building scalable Java-based web applications using Spring Boot, Hibernate, and ReactJS. Proficient in full-stack development with strong expertise in backend services, RESTful APIs, microservices architecture, and frontend technologies including TypeScript, HTML5, CSS3, and Bootstrap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <a href="mailto:anilsajjanshetty112@gmail.com"
                className="group bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                Get In Touch
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button onClick={() => setActivePage('about')}
                className="border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-full font-semibold hover:bg-amber-500/10 transition-all duration-300 w-full sm:w-auto">
                Learn More
              </button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-slate-400 text-sm sm:text-base">
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

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-orange-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-3xl rotate-6 transform transition-transform duration-500 hover:rotate-12"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-500/30">
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src={profilePic}
                        alt="Profile"
                        className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover rounded-full shadow-2xl border-4 border-white/20"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-800 rounded-xl px-6 py-3 shadow-[0_0_20px_rgba(16,185,129,0.8)] border border-emerald-400/50 backdrop-blur-md">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_3px_rgba(74,222,128,0.8)]"></div>
                    <span className="text-emerald-200 font-semibold drop-shadow-[0_0_6px_rgba(74,222,128,0.8)] text-sm">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: "2+", label: "Years Experience", icon: Award },
            { value: "1,000+", label: "Concurrent Users", icon: Users },
            { value: "95%", label: "System Uptime", icon: TrendingUp },
            { value: "6+", label: "Major Projects", icon: Code }
          ].map((stat, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
              <stat.icon className="w-8 h-8 text-amber-500 mb-3 mx-auto" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-amber-500" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={() => handleMouseLeave(project.id)}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 group relative cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900/40 flex items-center justify-center">
                {/* ✅ If image exists */}
                {project?.image ? (
                  <img
                    src={project.image}
                    alt={project.title || "Project image"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : null}

                {/* ✅ If video exists and is toggled to show */}
                {showVideo[project.id] && project?.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    onError={() => {
                      console.warn(`Video load error for ${project.title}`);
                      setShowVideo((prev) => ({ ...prev, [project.id]: false }));
                    }}
                  />
                ) : null}

                {/* 🚫 If neither image nor video exists */}
                {!project?.image && !project?.video && (
                  <div className="flex flex-col items-center justify-center w-full h-full text-slate-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 mb-2 text-amber-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-6-6l2-2a2 2 0 012.828 0L20 10M12 6V4m0 0a8 8 0 00-8 8v4a8 8 0 008 8v-2m0-14a8 8 0 018 8v4a8 8 0 01-8 8v-2"
                      />
                    </svg>
                    <p className="text-xs">No preview available</p>
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />

                {/* External link icon */}
                <ExternalLink className="absolute top-4 right-4 w-6 h-6 text-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Featured badge */}
                {project?.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                )}
              </div>


              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-amber-500 text-xs sm:text-sm mb-3">{project.subtitle}</p>
                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>

                <div className="grid grid-cols-3 gap-2 mb-4 hidden sm:grid">
                  {project.metrics.slice(0, 3).map((metric, idx) => (
                    <div key={idx} className="text-center p-2 bg-slate-900/50 rounded-lg">
                      <metric.icon className="w-4 h-4 text-amber-500 mx-auto mb-1" />
                      <div className="text-sm font-bold text-white">{metric.value}</div>
                      <div className="text-slate-500 text-xs">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 text-amber-400 px-2 py-1 rounded-full text-xs border border-amber-500/30 hover:border-amber-500/50 transition-all">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-slate-500 text-xs self-center">+{project.tech.length - 4} more</span>
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-12">
          <Sparkles className="w-6 h-6 text-amber-500" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About Me</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 text-center lg:text-left">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto lg:mx-0 mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl overflow-hidden border-4 border-amber-500/30">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full shadow-2xl"
                  />
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Anil Sajjanshetty</h2>
            <p className="text-amber-500 mb-6">Full Stack Engineer</p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-300">
                <Briefcase className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500">Experience</p>
                  <p className="font-semibold">2+ Years</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500">Location</p>
                  <p className="font-semibold">Pune, India</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-300">
                <GraduationCap className="w-5 h-5 text-amber-500" />
                <div>
                  <p className="text-xs text-slate-500">Education</p>
                  <p className="font-semibold">PG-DAC, CDAC | BE Mechanical</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-amber-500/20">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-500 mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                Professional Summary
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                Web Application Developer with 2 years of hands-on experience in building scalable Java-based web applications using Spring Boot, Hibernate, and ReactJS. Proficient in full-stack development with strong expertise in backend services, RESTful APIs, microservices architecture, and frontend technologies including TypeScript, HTML5, CSS3, and Bootstrap.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                Experienced in PostgreSQL/MySQL database design, SQL query optimization, and working with Apache Tomcat. Skilled in Agile/Scrum methodologies, implementation support, user requirement analysis, and facilitating communication between development teams and end users. Fluent in English and Hindi with excellent problem-solving and collaboration skills.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Currently based in Pune, India, I've delivered production systems serving <span className="text-amber-500 font-semibold">1,000+ concurrent users</span> with <span className="text-green-500 font-semibold">95% uptime</span>. Passionate about building robust, user-centric applications that solve real-world problems at scale.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6">Key Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Code, text: "Technical Expertise: Strong foundation in Java web application development, Spring Boot, Hibernate, and full-stack technologies" },
                  { icon: Users, text: "Implementation Support: Proven experience in client-side support, requirement gathering, UAT coordination, and issue resolution" },
                  { icon: TrendingUp, text: "Communication Skills: Excellent verbal and written communication abilities in English and Hindi for effective stakeholder engagement" },
                  { icon: Zap, text: "Team Collaboration: Strong team player with experience in Agile/Scrum environments and cross-functional collaboration" },
                  { icon: Award, text: "Problem Solving: Analytical mindset with systematic approach to troubleshooting and optimizing application performance" },
                  { icon: Briefcase, text: "Documentation: Skilled in creating technical documentation, user guides, and project-related documentation" },
                  { icon: Sparkles, text: "Adaptability: Quick learner who successfully transitioned from mechanical engineering to software development in 2 years" }
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <highlight.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-slate-300 leading-relaxed text-sm">{highlight.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center justify-center lg:justify-start gap-3">
          <Code className="w-8 h-8 text-amber-500" />
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Frontend Development", icon: Code, skills: skills.frontend, gradient: "from-blue-500 to-cyan-500" },
            { title: "Backend Development", icon: Server, skills: skills.backend, gradient: "from-green-500 to-emerald-500" },
            { title: "Database & Caching", icon: Database, skills: skills.database, gradient: "from-purple-500 to-pink-500" },
            { title: "DevOps & Tools", icon: Cloud, skills: skills.devops, gradient: "from-orange-500 to-red-500" },
            { title: "Other Skills", icon: Sparkles, skills: skills.other, gradient: "from-amber-500 to-yellow-500" }
          ].map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-slate-900/50 text-slate-300 px-3 py-2 rounded-lg text-sm border border-slate-700 hover:border-amber-500/50 hover:text-amber-400 transition-all whitespace-nowrap">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center justify-center lg:justify-start gap-3">
            <Briefcase className="w-8 h-8 text-amber-500" />
            Work Experience
          </h2>
          <div className="relative">
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 to-orange-500 hidden lg:block"></div>

            <div className="space-y-8 ml-0 lg:ml-20">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-amber-500 relative">
                <div className="absolute -left-6 top-6 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-slate-900 hidden lg:block">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Project Engineer - Web Application Developer</h3>
                    <p className="text-amber-500">Centre for Development of Advanced Computing (CDAC)</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded-full">Nov 2023 - Present</span>
                </div>
                <ul className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-2">
                  <li>• Developed backend services using Django, implementing RESTful APIs and microservices architecture for scalable e-learning and quiz game applications</li>
                  <li>• Created dynamic user interfaces using ReactJS, TypeScript, HTML5, CSS3, and Bootstrap, ensuring responsive design and cross-browser compatibility for 500+ active users</li>
                  <li>• Designed and optimized PostgreSQL and MySQL database schemas, wrote complex SQL queries, and implemented database indexing for 40% faster data retrieval and efficient query performance</li>
                  <li>• Developed LearnDex web application with course management, video streaming, progress tracking, JWT authentication, and role-based access control, achieving 95% uptime</li>
                  <li>• Built GLAMS real-time quiz platform using Express and microservices, supporting 1,000+ concurrent users with WebSocket communication and message queues</li>
                  <li>• Wrote unit tests and integration tests to ensure code quality and application functionality, participating in code reviews and quality assurance processes</li>
                  <li>• Participated actively in Agile/Scrum processes including daily standups, sprint planning, and retrospectives, collaborating effectively with cross-functional development teams</li>
                  <li>• Provided implementation and maintenance support, gathered and analyzed user requirements, and facilitated communication between end users and technical teams</li>
                  <li>• Created comprehensive project documentation including technical specifications, user guides, and API documentation for knowledge transfer and maintenance</li>
                  <li>• Coordinated User Acceptance Testing (UAT) with stakeholders, collected feedback, and worked with teams to ensure application functionality met user expectations</li>
                  <li>• Deployed applications using Docker containerization and Apache Tomcat, setting up CI/CD pipelines with GitHub Actions for automated deployment</li>
                  <li>• Used Eclipse and Visual Studio Code for development, Postman for API testing, and Git for version control and collaborative development</li>
                </ul>
              </div>
              {/* <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-amber-500 relative">
                <div className="absolute -left-6 top-6 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-slate-900 hidden lg:block">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Quality Control Engineer</h3>
                    <p className="text-amber-500">Arcatron Mobility</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded-full">Sep 2021 - Mar 2023</span>
                </div>
                <ul className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-2">
                  <li>• Collaborated with cross-functional teams to develop quality control procedures and standards, achieving 50% increase in production efficiency through systematic process improvements</li>
                  <li>• Analyzed data and user requirements to identify areas for optimization, demonstrating strong analytical and problem-solving skills transferable to software development</li>
                  <li>• Maintained detailed documentation and communicated effectively with stakeholders in English and Hindi, ensuring clear understanding of requirements and processes</li>
                </ul>
              </div> */}
              {/* <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-amber-500 relative">
                <div className="absolute -left-6 top-6 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center border-4 border-slate-900 hidden lg:block">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start mb-3 gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">Quality Control Engineer</h3>
                    <p className="text-amber-500">Kunjan Fasteners Pvt. Ltd.</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-900 px-3 py-1 rounded-full">Jun 2020 - Sep 2021</span>
                </div>
                <ul className="text-slate-300 leading-relaxed text-sm sm:text-base space-y-2">
                  <li>• Validated technical documentation ensuring compliance with industry standards, identifying and resolving 20+ critical issues through attention to detail and systematic analysis</li>
                  <li>• Coordinated with teams to implement corrective measures and maintained comprehensive inspection records, developing strong communication and documentation skills</li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center justify-center lg:justify-start gap-3">
            <GraduationCap className="w-8 h-8 text-amber-500" />
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Post Graduate Diploma in Advanced Computing (PG-DAC)</h3>
              <p className="text-amber-500 mb-2">Centre for Development of Advanced Computing (CDAC)</p>
              <p className="text-slate-400 text-sm">2023 | Patna, India</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Bachelor of Engineering in Mechanical Engineering</h3>
              <p className="text-amber-500 mb-2">Dr. Babasaheb Ambedkar Marathwada University</p>
              <p className="text-slate-400 text-sm">2012 - 2016 | Aurangabad, India</p>
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
      mobile: null,
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
        const response = await fetch(`${import.meta.env.VITE_API_BASE}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitStatus('success');
          setFormData({ name: '', email: '', subject: '', mobile: null, message: '' });
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
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Let's Connect</h1>
              <Sparkles className="w-6 h-6 text-amber-500 animate-pulse" />
            </div>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Have an exciting project in mind? Looking to collaborate? I'd love to hear from you!
              Let's build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">Email Address</h3>
                    <a href="mailto:anilsajjanshetty112@gmail.com"
                      className="text-slate-300 hover:text-amber-500 transition-colors break-all text-sm">
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
                    <a href="tel:+918180951367" className="text-slate-300 hover:text-amber-500 transition-colors text-sm">
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
                    <p className="text-slate-300 text-sm">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-500" />
                  Connect on Social Media
                </h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-slate-900/50 p-4 rounded-xl hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/50 group text-center">
                    <Github className="w-8 h-8 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 text-sm">GitHub</p>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-slate-900/50 p-4 rounded-xl hover:bg-amber-500/20 transition-all duration-300 border border-amber-500/20 hover:border-amber-500/50 group text-center">
                    <Linkedin className="w-8 h-8 text-amber-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-slate-300 text-sm">LinkedIn</p>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-2">
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
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600 text-sm"
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
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 text-sm font-medium">Your Mobile No.</label>
                  <input
                    type="number"
                    name="mobile"
                    value={formData.mobile || ''}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600 text-sm"
                    placeholder="9999999999"
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
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all placeholder-slate-600 text-sm"
                    placeholder="Project Collaboration"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 text-sm font-medium">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all resize-none placeholder-slate-600 text-sm"
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
                  {!isSubmitting && (
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-amber-500/20 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Zap className="w-6 h-6 text-amber-500" />
              <h3 className="text-lg sm:text-xl font-bold text-white">Quick Response Time</h3>
            </div>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
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
      <footer className="bg-slate-950 border-t border-amber-500/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-slate-900 font-bold">
                  AS
                </div>
                <span className="text-white font-bold text-lg">Anil Sajjanshetty</span>
              </div>
              <p className="text-slate-400 text-sm">
                Full Stack Software Engineer passionate about building scalable web applications.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <div className="space-y-2">
                {['home', 'about', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => setActivePage(page)}
                    className="block text-slate-400 hover:text-amber-500 transition-colors capitalize text-sm"
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="text-white font-semibold mb-3">Get in Touch</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p className="flex items-center justify-start  gap-2">
                  <Mail className="w-4 h-4 text-amber-500" />
                  anilsajjanshetty112@gmail.com
                </p>
                <p className="flex items-center justify-start  gap-2">
                  <Phone className="w-4 h-4 text-amber-500" />
                  +91-8180951367
                </p>
                <p className="flex items-center justify-start gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Pune, India
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-500/20 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-center sm:text-left">
            <p className="text-slate-400 text-sm">
              © 2025 Anil Sajjanshetty.
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