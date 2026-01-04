// src/App.tsx
import React from 'react';
import Layout from './components/layout/Layout';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from "./components/sections/SkillsSection.tsx";
// TODO: create and import the remaining sections
// import SkillsSection from './components/sections/SkillsSection';
// import ExperienceSection from './components/sections/ExperienceSection';
// import ProjectsSection from './components/sections/ProjectsSection';
// import GoalsSection from './components/sections/GoalsSection';
// import ContactSection from './components/sections/ContactSection';

const App: React.FC = () => {
    return (
        <Layout>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            {/*<ExperienceSection />*/}
            {/*<ProjectsSection />*/}
            {/*<GoalsSection />*/}
            {/*<ContactSection />*/}
        </Layout>
    );
};

export default App;
