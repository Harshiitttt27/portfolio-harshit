import React from "react";
import { motion } from "framer-motion";
import {
  FaBlog,
  FaBriefcase,
  FaMoneyBillWave,
  FaRobot,
  FaTelegram,
  FaDocker,
  FaChartLine,
  FaYoutube,
} from "react-icons/fa";
import {
  SiDjango,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiSqlite,
  SiStripe,
  SiTensorflow,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Daily Thoughts – Blog Website",
      description:
        "Full-stack blog platform with CRUD operations, user authentication, and profile management.",
      features: [
        "Full CRUD operations for posts and user profiles",
        "User registration, login, and authentication system",
        "Post likes and threaded comments system",
        "Profile management with bio and avatar uploads",
        "Responsive UI optimized for mobile, tablet, and desktop",
        "Admin panel for managing posts and users",
        "SEO-friendly blog URLs",
        "Deployed on Render with production-ready settings",
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-500" /> },
        {
          name: "HTML/CSS",
          icon: <span className="text-orange-500">{"</>"}</span>,
        },
        { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
      ],
      link: "https://github.com/Harshiitttt27/blog-website-django.git",
      icon: <FaBlog className="text-blue-400 text-3xl" />,
    },
    {
      title: "Worknet - Job Portal",
      description:
        "Full-stack job portal connecting employers with job seekers.",
      features: [
        "Employer and job seeker registration with role-based access",
        "Job posting and management system for employers",
        "Job application system for users with application tracking",
        "Admin dashboard for managing jobs, users, and applications",
        "Email notifications for job applications",
        "Responsive interface built with Tailwind CSS and React",
        "JWT Authentication with Django REST Framework",
        "API-first design with React frontend consuming Django APIs",
      ],
      technologies: [
        { name: "Django REST", icon: <SiDjango className="text-green-500" /> },
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
      ],
      link: "https://github.com/Harshiitttt27/worknet-job-portal.git",
      icon: <FaBriefcase className="text-blue-400 text-3xl" />,
    },
    {
      title: "StockInsight - Micro SaaS for Stock Prediction",
      description:
        "A production-ready, Dockerized micro-SaaS platform for stock price prediction using LSTM models with Django, Telegram bot, and Stripe integration.",
      features: [
        "Next-day stock price prediction using LSTM (Keras/TensorFlow)",
        "Django REST API with JWT Authentication",
        "Telegram bot interface for predictions",
        "Stripe integration for Pro subscriptions",
        "Dockerized deployment with Gunicorn & health checks",
        "Web dashboard with Tailwind CSS frontend",
        "Quota system: 5 predictions/day Free; Unlimited Pro",
      ],
      technologies: [
        { name: "Django", icon: <SiDjango className="text-green-500" /> },
        {
          name: "Django REST Framework",
          icon: <SiDjango className="text-green-500" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-blue-400" />,
        },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        {
          name: "Telegram Bot API",
          icon: <FaTelegram className="text-blue-400" />,
        },
        { name: "Stripe API", icon: <SiStripe className="text-purple-500" /> },
        {
          name: "TensorFlow/Keras",
          icon: <SiTensorflow className="text-orange-400" />,
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
      ],
      link: "https://github.com/Harshiitttt27/stockinsight.git",
      icon: <FaChartLine className="text-indigo-500 text-3xl" />,
    },
    {
      title: "YouTube Data Collector",
      description:
        "A Flask-based project that scrapes YouTube channel and video data using YouTube API, with metrics, key rotation, and PostgreSQL storage.",
      features: [
        "Scrapes YouTube channel info (name, stats, topics, language)",
        "Fetches video details and calculates metrics (views, uploads)",
        "Uses rotating API keys to avoid quota exhaustion",
        "Stores data in PostgreSQL with duplicate handling",
        "Exposes Flask REST API endpoints for scraping and analysis",
        "Supports discovery of similar channels based on topics/language",
        "Modular structure with service classes and main entrypoint",
        "Can integrate with AI tools for smarter channel suggestions",
      ],
      technologies: [
        {
          name: "Python",
          icon: <span className="text-yellow-500 font-bold">Py</span>,
        },
        { name: "Flask", icon: <FaRobot className="text-red-500" /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="text-blue-600" />,
        },
        { name: "YouTube Data API", icon: <FaYoutube className="text-red-500" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      ],
      link: "https://github.com/Harshiitttt27/youtube-collector",
      icon: <FaRobot className="text-rose-500 text-3xl" />,
    },
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
                    target="_blank" rel="noopener noreferrer"
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
