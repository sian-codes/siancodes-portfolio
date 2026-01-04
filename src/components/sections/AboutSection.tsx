import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const AboutSection: React.FC = () => {
    return (
        <AnimatedSection id="about" title="About">
            <Box sx={{ maxWidth: 760 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    I&apos;m a UK-based Software Engineer who enjoys turning complex systems into clean,
                    reliable user and developer experiences. Right now I focus on{' '}
                    <strong>Android and Kotlin</strong>, building and improving payments SDKs, merchant flows
                    and supporting services.
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    Before specialising in mobile, I spent several years in the{' '}
                    <strong>TypeScript / React / Node</strong> world. That full-stack background means I
                    care a lot about how APIs, SDKs and UIs fit together end-to-end — from architecture and
                    testing to documentation and onboarding.
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    I&apos;m happiest when I&apos;m shaping developer experience, refining interfaces and
                    building tools that make difficult things feel simple. Outside of work, I tinker with
                    Pokémon-themed apps, productivity experiments and cozy UI ideas inspired by games.
                </Typography>
            </Box>
        </AnimatedSection>
    );
};

export default AboutSection;
