import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import avatar from '../../assets/heroDP.png';

const HeroSection: React.FC = () => {
    const handleContactScroll = () => {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Box
            id="hero"
            sx={{
                minHeight: '85vh',
                display: 'flex',
                alignItems: 'center',
                pb: { xs: 4, md: 8 },
            }}
        >
            <Grid container spacing={6} alignItems="center">
                {/* LEFT SIDE — TEXT */}
                <Grid
                    size={{ xs: 12, md: 7 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        style={{ width: '100%' }}
                    >
                        <Stack spacing={3}>
                            <Typography variant="overline" sx={{ letterSpacing: 2 }}>
                                FULL-STACK SOFTWARE ENGINEER
                            </Typography>

                            <Typography variant="h1">
                                Hi, I&apos;m{' '}
                                <Box component="span" sx={{ color: 'primary.main' }}>
                                    Siân
                                </Box>
                                .
                            </Typography>

                            <Typography variant="h5" sx={{ maxWidth: 720, opacity: 0.9 }}>
                                I build reliable payment and mobile experiences in{' '}
                                <strong>Kotlin &amp; Android</strong>, with a background in{' '}
                                <strong>TypeScript, React and SDK development</strong>.
                            </Typography>

                            <Stack direction="row" spacing={1} flexWrap="wrap">
                                <Chip label="Android & Kotlin" color="primary" variant="outlined" />
                                <Chip label="Payments & SDKs" color="primary" variant="outlined" />
                                <Chip
                                    label="Full-stack (React + Node)"
                                    color="secondary"
                                    variant="outlined"
                                />
                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <Button variant="contained" size="large" onClick={handleContactScroll}>
                                    Contact Me
                                </Button>

                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="/cv.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Download CV
                                </Button>
                            </Stack>
                        </Stack>
                    </motion.div>
                </Grid>

                {/* RIGHT SIDE — IMAGE */}
                <Grid size={{ xs: 12, md: 5 }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-end' },
                            }}
                        >
                            <Box
                                sx={{
                                    width: 300,
                                    height: 380,
                                    borderRadius: '26px',
                                    overflow: 'hidden',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
                                    background:
                                        'linear-gradient(145deg, rgba(102,187,106,0.15), rgba(255,183,77,0.12))',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={avatar}
                                    alt="Portrait of Siân Codes"
                                    loading="eager"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />
                            </Box>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;
