import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactPage from "./components/ContactPage";
import Skills from "./components/Skills";
import HeroSection from "./components/HeroSection";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<HeroSection />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;