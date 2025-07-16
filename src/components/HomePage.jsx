import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
    </main>
  );
};

export default HomePage;