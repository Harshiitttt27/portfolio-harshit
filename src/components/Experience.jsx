import React from "react";
import { motion } from "framer-motion";
import { FaServer, FaLaptopCode, FaTelegram } from "react-icons/fa";
import { SiDjango, SiPostgresql, SiCelery, SiRedis } from "react-icons/si";

const Experience = () => {
  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "Qubitnets Technologies",
      period: "Aug 2024 – Jan 2025",
      description: [
        "Developed scalable backend modules for an e-commerce platform using Django and PostgreSQL",
        "Integrated SMTP-based OTP login, Google OAuth2, and PhonePe payment gateway",
        "Automated background tasks and cron jobs using Celery and Redis",
        "Contributed to building maintainable, production-grade architecture"
      ],
      icon: <FaServer className="text-blue-400 text-2xl" />,
      techIcons: [
        <SiDjango key="django" className="text-green-500" />,
        <SiPostgresql key="postgres" className="text-blue-500" />,
        <SiCelery key="celery" className="text-green-400" />,
        <SiRedis key="redis" className="text-red-500" />
      ]
    },
    {
      role: "Freelance Developer",
      company: "Remote",
      period: "Jun 2025 – Present",
      description: [
        "Created a Telegram-based ordering system with Django and Telegram Bot API",
        "Developed event management site (BLK Swingers) with JWT auth and SMTP OTP",
        "Built dynamic event modules with automated data capture functionality",
        "Delivered full-stack Django solutions with optimized performance"
      ],
      icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
      techIcons: [
        <SiDjango key="django" className="text-green-500" />,
        <FaTelegram key="telegram" className="text-blue-400" />
      ]
    }
  ];

  return (
    <section id="experience" className="bg-[#0a192f] text-white min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Work <span className="text-blue-400">Experience</span>
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-[#112240] p-8 rounded-xl shadow-lg border-l-4 border-blue-400 hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-blue-400">{exp.role}</h3>
                      <p className="text-gray-300">{exp.company}</p>
                    </div>
                    <p className="text-gray-400 text-sm bg-[#0a192f] px-3 py-1 rounded-full">
                      {exp.period}
                    </p>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="mr-2 text-blue-400">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 flex flex-wrap gap-3">
                    {exp.techIcons.map((icon, i) => (
                      <span key={i} className="text-2xl">
                        {icon}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;