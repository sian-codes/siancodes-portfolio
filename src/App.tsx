import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from "./components/sections/SkillsSection.tsx";
import ProjectsSection from "./components/sections/ProjectSection.tsx";
import ExperienceSection from "./components/sections/ExperienceSection.tsx";
import GoalsSection from "./components/sections/GoalsSection.tsx";
import ContactSection from "./components/sections/ContactSection.tsx";
import GengarSticker from "./theme/GengarSticker.tsx";

const App: React.FC = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <GoalsSection />
            <ContactSection />
            <GengarSticker />
        </Layout>
    );
};

export default App;
