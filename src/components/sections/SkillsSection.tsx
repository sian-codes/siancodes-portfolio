// src/components/sections/SkillsSection.tsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TechStackMarquee from "./TechStackMarquee.tsx";
// import TechStackMarquee from '../components/TechStackMarquee'; // adjust path if needed

const SkillsSection: React.FC = () => {
    return (
        <AnimatedSection id="skills" title="Skills">
            <Box sx={{ maxWidth: 900 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Most of my day-to-day work is in Android, Kotlin and SDKs in the payments space, with a
                    background in full stack and frontend work using TypeScript and React.
                </Typography>

                <Typography
                    variant="subtitle2"
                    sx={{
                        textTransform: 'uppercase',
                        letterSpacing: 1.2,
                        opacity: 0.8,
                        mb: 1,
                    }}
                >
                    TL;DR
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mb: 3 }}>
                    <Typography component="li" variant="body2" sx={{ mb: 0.6 }}>
                        <strong>Android & Kotlin:</strong> building and evolving SDKs, handling lifecycle,
                        coroutines and architecture for payment flows.
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.6 }}>
                        <strong>React & TypeScript:</strong> frontend work, internal tools and developer-facing
                        experiences, plus exposure to web components (Stencil).
                    </Typography>
                    <Typography component="li" variant="body2" sx={{ mb: 0.6 }}>
                        <strong>Payments & SDK design:</strong> card and checkout flows, integration patterns
                        and developer experience for merchant teams.
                    </Typography>
                    <Typography component="li" variant="body2">
                        <strong>Ways of working:</strong> collaborating in cross-functional teams, reviewing
                        code, documenting patterns and supporting other engineers.
                    </Typography>
                </Box>

                <Typography
                    variant="subtitle2"
                    sx={{
                        textTransform: 'uppercase',
                        letterSpacing: 1.2,
                        opacity: 0.8,
                        mb: 1,
                    }}
                >
                    Tools & technologies
                </Typography>

        <Box sx={{ mt: 2 }}>
          <TechStackMarquee />
        </Box>

            </Box>
        </AnimatedSection>
    );
};

export default SkillsSection;
