import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-[#0a192f] text-white min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              With a strong foundation in both frontend and backend technologies, I create efficient,
              scalable, and user-friendly solutions.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or enjoying outdoor activities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#112240] p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6 text-blue-400">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'Python', 'React', 'Django', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Git'].map((skill) => (
                <span key={skill} className="bg-[#0a192f] text-blue-400 px-4 py-2 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;