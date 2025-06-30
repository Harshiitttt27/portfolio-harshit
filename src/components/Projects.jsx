import React from "react";
import { motion } from "framer-motion";
import { FaBlog, FaBriefcase, FaMoneyBillWave, FaRobot, FaTelegram } from "react-icons/fa";
import { SiDjango, SiReact, SiTailwindcss, SiPostgresql, SiSqlite } from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Daily Thoughts – Blog Website",
      description: "Full-stack blog platform with CRUD operations, user authentication, and profile management.",
      features: [
        "Post likes and comments system",
        "Responsive UI for all devices",
        "Admin control panel",
        "Deployed on Render"
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-500" /> },
        { name: "HTML/CSS", icon: <span className="text-orange-500">{"</>"}</span> },
        { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> }
      ],
      link: "https://github.com/Harshiitttt27/blog-website-django.git",
      icon: <FaBlog className="text-blue-400 text-3xl" />
    },
    {
      title: "Worknet - Job Portal",
      description: "Full-stack job portal connecting employers with job seekers.",
      features: [
        "Admin job management",
        "User application system",
        "Responsive interface",
        "Django REST API backend"
      ],
      technologies: [
        { name: "Django REST", icon: <SiDjango className="text-green-500" /> },
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      link: "https://github.com/Harshiitttt27/worknet-job-portal.git",
      icon: <FaBriefcase className="text-blue-400 text-3xl" />
    },
    {
      title: "Expense Tracker Backend",
      description: "REST API for tracking expenses with analytics dashboard.",
      features: [
        "JWT Authentication",
        "Expense analytics",
        "Date range filtering",
        "Custom user model"
      ],
      technologies: [
        { name: "Django REST", icon: <SiDjango className="text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> }
      ],
      link: "https://github.com/Harshiitttt27/expense_tracker.git",
      icon: <FaMoneyBillWave className="text-blue-400 text-3xl" />
    },
    {
      title: "E-commerce Chatbot",
      description: "AI-powered shopping assistant for e-commerce platforms.",
      features: [
        "Product search by keywords",
        "Conversational interface",
        "Instant product filtering",
        "Django REST backend"
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-500" /> },
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      link: "https://github.com/Harshiitttt27/ecom-chatbot.git",
      icon: <FaRobot className="text-blue-400 text-3xl" />
    },
    {
      title: "Django Telegram Bot",
      description: "Backend system with Telegram bot integration.",
      features: [
        "Celery background tasks",
        "Redis integration",
        "Telegram Bot API",
        "Django REST Framework"
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-500" /> },
        { name: "Telegram API", icon: <FaTelegram className="text-blue-400" /> }
      ],
      link: "https://github.com/Harshiitttt27/Telegram_bot.git",
      icon: <FaTelegram className="text-blue-400 text-3xl" />
    }
  ];

  return (
    <section id="projects" className="bg-[#0a192f] text-white min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-blue-400">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-[#112240] rounded-xl shadow-lg overflow-hidden border-l-4 border-blue-400 hover:border-blue-300 transition-colors"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="mt-1">
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-400">{project.title}</h3>
                    <p className="text-gray-300 mt-1">{project.description}</p>
                  </div>
                </div>
                
                <div className="mb-4 flex-1">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">FEATURES:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-300 text-sm">
                        <span className="mr-2 text-blue-400">▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="flex items-center gap-1 bg-[#0a192f] px-3 py-1 rounded-full">
                          <span className="text-lg">{tech.icon}</span>
                          <span className="text-xs">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block text-blue-400 hover:text-blue-300 font-medium border border-blue-400 px-4 py-2 rounded hover:bg-blue-400/10 transition-colors text-center"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;