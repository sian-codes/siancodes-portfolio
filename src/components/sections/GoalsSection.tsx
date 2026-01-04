// src/components/sections/GoalsSection.tsx
import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const GoalsSection: React.FC = () => {
    return (
        <AnimatedSection id="next-chapter" title="Professional Goals">
            {/* super short intro */}
            <Box sx={{ maxWidth: 800, mb: 3 }}>
                <Typography variant="body1">
                    I&apos;m most excited by roles where I can keep growing as a mobile & SDK engineer, work
                    on reliable products and make life easier for other developers.
                </Typography>
            </Box>

            {/* Accordion 1: Work I enjoy */}
            <Accordion
                disableGutters
                sx={{
                    mb: 1.5,
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.12)',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    '&:before': { display: 'none' },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ px: 2.5, py: 1.5 }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Work I enjoy
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Android, SDKs and products where reliability actually matters.
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2.5, pb: 2.2, pt: 0 }}>
                    <Box component="ul" sx={{ pl: 2.5, mb: 1.5 }}>
                        <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                            Android & Kotlin engineering, especially SDK and platform-style work.
                        </Typography>
                        <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                            Domains like payments / fintech where correctness & trust are key.
                        </Typography>
                        <Typography component="li" variant="body2">
                            Teams that care about clear APIs, good docs and long-term quality.
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.6 }}>
                        <Chip label="Android" size="small" variant="outlined" />
                        <Chip label="SDKs" size="small" variant="outlined" />
                        <Chip label="Payments" size="small" variant="outlined" />
                    </Stack>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 2: Craft & learning */}
            <Accordion
                disableGutters
                sx={{
                    mb: 1.5,
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.12)',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    '&:before': { display: 'none' },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ px: 2.5, py: 1.5 }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Craft I&apos;m growing
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Getting better at the details of great mobile & SDK design.
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2.5, pb: 2.2, pt: 0 }}>
                    <Box component="ul" sx={{ pl: 2.5, mb: 1.5 }}>
                        <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                            Deepening Kotlin, coroutines and Android architecture patterns.
                        </Typography>
                        <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                            Designing safe, intuitive SDKs and APIs for other engineers.
                        </Typography>
                        <Typography component="li" variant="body2">
                            Improving testing, observability and overall developer experience.
                        </Typography>
                    </Box>
                </AccordionDetails>
            </Accordion>

            {/* Accordion 3: Working globally */}
            <Accordion
                disableGutters
                sx={{
                    borderRadius: 2,
                    border: '1px solid rgba(255,255,255,0.12)',
                    bgcolor: 'rgba(0,0,0,0.4)',
                    '&:before': { display: 'none' },
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ px: 2.5, py: 1.5 }}
                >
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                            Working globally
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            Comfortable in distributed teams and open to future international work.
                        </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 2.5, pb: 2.2, pt: 0 }}>
                    <Typography variant="body2" sx={{ mb: 1.2 }}>
                        I’ve enjoyed collaborating with international teams across time-zones, and I’m open to
                        roles that involve global collaboration or relocation in the future when it aligns with
                        the kind of engineering work I care about.
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.6 }}>
                        <Chip label="Distributed teams" size="small" variant="outlined" />
                        <Chip label="Async collaboration" size="small" variant="outlined" />
                        <Chip label="International experience" size="small" variant="outlined" />
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </AnimatedSection>
    );
};

export default GoalsSection;
