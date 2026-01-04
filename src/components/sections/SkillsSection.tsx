import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TechStackMarquee from "./TechStackMarquee.tsx";


const SkillsSection: React.FC = () => {
    return (
        <AnimatedSection id="skills" title="Skills">
            <Typography variant="h5" sx={{ mb: 2 }}>
                TL;DR — What I’m good at
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    building <strong>clean, maintainable architecture</strong> with clear ownership boundaries
                </Typography>

                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    designing <strong>developer-friendly SDKs & APIs</strong> that reduce integration friction
                </Typography>

                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    handling <strong>async + lifecycle complexity safely</strong> in Android & Kotlin
                </Typography>

                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    writing code that is <strong>readable, testable & production-ready</strong>
                </Typography>

                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    improving <strong>developer experience through docs, examples & tooling</strong>
                </Typography>

                <Typography component="li" variant="body1" sx={{ mb: 1 }}>
                    working <strong>end-to-end across mobile, frontend & backend APIs</strong>
                </Typography>

                <Typography component="li" variant="body1">
                    collaborating <strong>calmly & thoughtfully</strong> in cross-functional teams
                </Typography>
            </Box>
            <TechStackMarquee />
        </AnimatedSection>
    );
};

export default SkillsSection;
