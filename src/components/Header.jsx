import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import ResumePDF from "../assets/Resume.pdf";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const navItems = [
    { label: "About", link: "/about", isRoute: true },
    { label: "Skills", link: "/skills", isRoute: true },
    { label: "Experience", link: "/experience", isRoute: true },
    { label: "Projects", link: "/projects", isRoute: true },
    { label: "Resume", link: ResumePDF, isRoute: false, isDownload: true },
    { label: "Contact", link: "/contact", isRoute: true }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
  }, [mobileMenuOpen]);

  const handleDownload = (e, url) => {
    e.preventDefault();
    setIsDownloading(true);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'Harshit_Sethi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <header className="bg-[#0a192f]/90 backdrop-blur-md text-white py-5 px-6 md:px-20 fixed w-full z-[999] border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Branding */}
        <motion.div className="flex items-center space-x-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-bold text-white">HARSHIT SETHI</span>
            <span className="text-xs font-light text-gray-300 tracking-widest">BACKEND BRAINS. FRONTEND FLAIR.</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <motion.ul className="flex space-x-8">
            {navItems.map(({ label, link, isRoute, isDownload }) => (
              <li key={label}>
                {isRoute ? (
                  <Link
                    to={link}
                    className="relative group font-medium text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {label.toUpperCase()}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                  </Link>
                ) : isDownload ? (
                  <button
                    onClick={(e) => handleDownload(e, link)}
                    className="relative group font-medium text-gray-300 hover:text-white transition-colors text-sm"
                    disabled={isDownloading}
                  >
                    {isDownloading ? "DOWNLOADING..." : (
                      <>
                        {label.toUpperCase()}
                        <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                      </>
                    )}
                  </button>
                ) : (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group font-medium text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {label.toUpperCase()}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                  </a>
                )}
              </li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-300 focus:outline-none z-20" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
  {mobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:hidden fixed inset-0 h-screen bg-[#0a192f] px-6 py-8 z-[998] flex flex-col justify-start space-y-8"
    >
      {/* Top Branding / Close */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-white font-bold text-xl">MENU</span>
        <button
          onClick={toggleMobileMenu}
          className="text-gray-400 hover:text-white text-2xl"
          aria-label="Close menu"
        >
          &times;
        </button>
      </div>

      {/* Nav Items */}
      <motion.ul
        className="flex flex-col gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {navItems.map(({ label, link, isRoute, isDownload }) => (
          <motion.li
            key={label}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isRoute ? (
              <Link
                to={link}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-medium text-white hover:text-blue-400 py-2 border-l-4 pl-4 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                {label}
              </Link>
            ) : isDownload ? (
              <button
                onClick={(e) => {
                  handleDownload(e, link);
                  setMobileMenuOpen(false);
                }}
                disabled={isDownloading}
                className="block w-full text-left text-xl font-medium text-white hover:text-blue-400 py-2 border-l-4 pl-4 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                {isDownloading ? "DOWNLOADING..." : label}
              </button>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xl font-medium text-white hover:text-blue-400 py-2 border-l-4 pl-4 border-transparent hover:border-blue-500 transition-all duration-300"
              >
                {label}
              </a>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
