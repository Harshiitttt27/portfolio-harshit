import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

const Skills = () => {
  const techStack = [
    { name: "Python", icon: <FaPython className="w-full h-full" />, color: "#3776AB" },
    { name: "Java", icon: <FaJava className="w-full h-full" />, color: "#007396" },
    { name: "HTML5", icon: <SiHtml5 className="w-full h-full" />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 className="w-full h-full" />, color: "#1572B6" },
    { name: "Django", icon: <SiDjango className="w-full h-full" />, color: "#092E20" },
    { name: "React", icon: <FaReact className="w-full h-full" />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-full h-full" />, color: "#38B2AC" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-full h-full" />, color: "#336791" },
    { name: "MySQL", icon: <SiMysql className="w-full h-full" />, color: "#4479A1" },
    { name: "SQLite", icon: <SiSqlite className="w-full h-full" />, color: "#003B57" },
  ];

  const capabilities = [
    "Full Stack Web Development",
    "Responsive UI/UX Design",
    "Progressive Web Apps (PWA)",
    "RESTful API Development",
    "Database Design & Optimization",
    "Third-party API Integration",
    "Cloud Services (AWS/Firebase)",
    "Performance Optimization",
  ];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-[#0a192f] to-[#0f2744] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            WHAT I <span className="text-blue-400">DO</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            FULL STACK DEVELOPER WHO EXPLORES EVERY TECH STACK
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            MY TECH STACK
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="flex flex-col items-center p-4 bg-[#112240] hover:bg-[#0f2b45] rounded-lg shadow-sm transition-all">
                  <div className="w-14 h-14 mb-3 flex items-center justify-center">
                    <div
                      className="w-10 h-10 transition-transform group-hover:scale-110"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-medium text-gray-300 text-center">
                    {tech.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="bg-[#112240] rounded-xl shadow-sm p-8">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            DEVELOPMENT CAPABILITIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex items-start p-4 hover:bg-[#0f2b45] rounded-lg transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-gray-300">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
