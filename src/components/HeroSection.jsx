import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import developerIllustration from "../assets/developer.png";
import ResumePDF from "../assets/Resume.pdf";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Harshit_Sethi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section id="home" className="bg-gradient-to-b from-[#0a192f] to-[#0f2744] text-white min-h-screen flex items-center justify-center px-6 md:px-20 pt-28 relative z-0">
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-2xl">
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Hi, I'm <span className="text-white">Harshit Sethi</span>
            </h1>
            <p className="text-xl text-gray-300 font-light tracking-wider">
              Full Stack Solutions for a Connected World
            </p>
          </motion.div>

          <motion.p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed" variants={itemVariants}>
            I craft <span className="text-blue-300 font-medium">scalable web applications</span> with Django and React. 
            Specializing in <span className="text-cyan-300 font-medium">API development</span>, 
            <span className="text-purple-300 font-medium"> Telegram bot integration</span>, and 
            <span className="text-green-300 font-medium"> responsive UI design</span>.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
              <Link to="/contact" className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/30 inline-block text-center">
                CONTACT ME
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Link>
            </motion.div>

            <motion.button
              onClick={handleDownload}
              disabled={isDownloading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gray-500/20"
            >
              <span className="relative z-10">
                {isDownloading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    DOWNLOADING...
                  </span>
                ) : (
                  "DOWNLOAD RESUME"
                )}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.button>
          </motion.div>
        </div>

        {/* Illustration */}
        <motion.div className="mt-10 md:mt-0" variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } } }}>
          <div className="relative">
            <motion.img
              src={developerIllustration}
              alt="Harshit Sethi - Full Stack Developer"
              className="w-80 md:w-[28rem] rounded-lg shadow-2xl relative z-10"
              initial={{ y: 0 }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur-lg opacity-20 -z-10" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
