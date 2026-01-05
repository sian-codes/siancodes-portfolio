import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

const ContactSection: React.FC = () => {
    return (
        <AnimatedSection id="contact">
            <Box
                sx={{
                    maxWidth: 800,
                    mx: 'auto',
                    textAlign: 'center',
                }}
            >
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                    If you&apos;d like to connect or talk about engineering work, you can reach me here:
                </Typography>

                <Stack
                    direction="row"
                    spacing={3}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    {/* Email */}
                    <Tooltip title="Email me" arrow>
                        <IconButton
                            component="a"
                            href="mailto:sian@siancodes.com"
                            sx={{
                                border: '1px solid rgba(255,255,255,0.15)',
                                p: 2,
                                borderRadius: 3,
                                bgcolor: 'rgba(0,0,0,0.35)',
                                transition: 'all .2s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <EmailIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>

                    {/* LinkedIn */}
                    <Tooltip title="Visit my LinkedIn" arrow>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/siân-kearley-32151986"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                border: '1px solid rgba(255,255,255,0.15)',
                                p: 2,
                                borderRadius: 3,
                                bgcolor: 'rgba(0,0,0,0.35)',
                                transition: 'all .2s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <LinkedInIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>

                    {/* GitHub */}
                    <Tooltip title="View my GitHub" arrow>
                        <IconButton
                            component="a"
                            href="https://github.com/sian-codes"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                border: '1px solid rgba(255,255,255,0.15)',
                                p: 2,
                                borderRadius: 3,
                                bgcolor: 'rgba(0,0,0,0.35)',
                                transition: 'all .2s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <GitHubIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>

                    {/* CV (optional) */}
                    <Tooltip title="Download my CV" arrow>
                        <IconButton
                            component="a"
                            href="/public/SianCV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                border: '1px solid rgba(255,255,255,0.15)',
                                p: 2,
                                borderRadius: 3,
                                bgcolor: 'rgba(0,0,0,0.35)',
                                transition: 'all .2s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(255,255,255,0.1)',
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            <ArticleIcon fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Stack>

                <Typography variant="body2" sx={{ opacity: 0.6 }}>
                    I&apos;m always happy to talk about engineering, developer experience, mobile SDKs and Pokémon.
                </Typography>
            </Box>
        </AnimatedSection>
    );
};

export default ContactSection;
