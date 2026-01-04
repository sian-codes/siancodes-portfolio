import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

interface ExperienceItem {
    title: string;
    timeframe: string;
    level: 'grad' | 'engineer' | 'assignment';
    bullets: string[];
    tags: string[];
}

const experienceItems: ExperienceItem[] = [
    {
        title: 'Graduate / Junior Full Stack Software Engineer · Access Worldpay Checkout',
        timeframe: 'September 2020 – September 2022',
        level: 'grad',
        bullets: [
            'Joined the Access Worldpay Checkout team as a graduate engineer, working across frontend and backend parts of the payments journey.',
            'Contributed to SDK and API features under guidance from senior engineers, focusing on correctness, reliability and clear integration behaviour.',
            'Built confidence with the payments domain, card flows and the expectations merchants have of the SDKs.',
        ],
        tags: ['Graduate role', 'Payments', 'Checkout SDKs', 'Full stack'],
    },
    {
        title: 'Full Stack Software Engineer · Access Worldpay Checkout',
        timeframe: 'September 2022 – Present',
        level: 'engineer',
        bullets: [
            'Continue to work on the Checkout SDKs and supporting services, with a stronger focus on Android and Kotlin in recent years.',
            'Own and refactor parts of the SDK architecture and lifecycle to make flows safer, easier to reason about and easier to integrate.',
            'Collaborate with product, docs and other SDK teams so integration patterns stay aligned across Android, Web and other platforms.',
        ],
        tags: ['Full stack', 'Android & Kotlin', 'SDK design', 'Developer experience'],
    },
    {
        title: 'Frontend Components Team · Stencil.js Web Components Library (PI assignment)',
        timeframe: 'August 2025 – October 2025 (1 PI / quarter)',
        level: 'assignment',
        bullets: [
            'Temporarily joined the Frontend Components team for a PI to help bootstrap a Stencil.js-based web components library.',
            'Worked on setting up patterns, structure and DX for reusable components that could be shared across products.',
            'Brought experience from SDK work into the design of APIs, documentation and integration examples for the component library.',
        ],
        tags: ['Stencil.js', 'Web components', 'Frontend components', 'DX'],
    },
];

const levelColor = (level: ExperienceItem['level']) => {
    switch (level) {
        case 'grad':
            return 'rgba(102,187,106,0.9)'; // green-ish
        case 'engineer':
            return 'rgba(255,183,77,0.95)'; // amber-ish
        case 'assignment':
            return 'rgba(129,212,250,0.95)'; // blue-ish
        default:
            return 'rgba(255,255,255,0.9)';
    }
};

const ExperienceSection: React.FC = () => {
    const worldpaySummary = [
        'I’ve been part of Worldpay since 2020, working on Access Worldpay Checkout – the product merchants use to build secure, branded checkout experiences.',
        'Across my time in the team I’ve consistently contributed to and collaborated on the SDKs, from my first graduate role through to my current position.',
        'That’s meant working with the payments domain, SDK design, lifecycle concerns and developer experience for several years rather than just as a short rotation.',
    ];

    return (
        <AnimatedSection id="experience" title="Experience">
            {/* Worldpay summary block */}
            <Box sx={{ mb: 5, maxWidth: 900 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Worldpay · Access Worldpay Checkout
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                    September 2020 – Present · 4+ years
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mb: 2.5 }}>
                    {worldpaySummary.map((line) => (
                        <Typography
                            key={line}
                            component="li"
                            variant="body1"
                            sx={{ mb: 0.6 }}
                        >
                            {line}
                        </Typography>
                    ))}
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.8 }}>
                    <Chip label="Payments" size="small" variant="outlined" />
                    <Chip label="Checkout SDKs" size="small" variant="outlined" />
                    <Chip label="Android & Kotlin" size="small" variant="outlined" />
                    <Chip label="React & TypeScript" size="small" variant="outlined" />
                    <Chip label="Developer Experience" size="small" variant="outlined" />
                </Stack>
            </Box>

            {/* Timeline */}
            <Box
                sx={{
                    position: 'relative',
                    pl: { xs: 4.5, md: 8 },
                    mt: 2,
                }}
            >
                {/* vertical rail */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: 16, md: 28 },
                        top: 0,
                        bottom: 0,
                        width: 2,
                        bgcolor: 'rgba(255,255,255,0.14)',
                    }}
                />

                <Stack spacing={3.5}>
                    {experienceItems.map((item) => (
                        <Box
                            key={item.title}
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: { xs: 2, md: 3 },
                            }}
                        >
                            {/* timeline node */}
                            <Box
                                sx={{
                                    position: 'relative',
                                    mt: 0.5,
                                    flexShrink: 0,
                                    width: { xs: 32, md: 40 },
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 14,
                                        height: 14,
                                        borderRadius: '50%',
                                        bgcolor: levelColor(item.level),
                                        boxShadow: '0 0 0 4px rgba(0,0,0,0.6)',
                                    }}
                                />
                            </Box>

                            {/* content */}
                            <Box
                                sx={{
                                    flex: 1,
                                    borderRadius: 3,
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    p: 2.2,
                                    bgcolor: 'rgba(0,0,0,0.35)',
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    sx={{
                                        letterSpacing: 1.5,
                                        opacity: 0.9,
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    {item.level === 'grad'
                                        ? 'Early career'
                                        : item.level === 'engineer'
                                            ? 'Current role'
                                            : 'Assignment'}
                                </Typography>

                                <Typography variant="h6" sx={{ mb: 0.5 }}>
                                    {item.title}
                                </Typography>

                                <Typography
                                    variant="caption"
                                    sx={{ mb: 1.5, display: 'block', opacity: 0.8 }}
                                >
                                    {item.timeframe}
                                </Typography>

                                <Box component="ul" sx={{ pl: 2.5, mb: 2 }}>
                                    {item.bullets.map((b) => (
                                        <Typography
                                            key={b}
                                            component="li"
                                            variant="body2"
                                            sx={{ mb: 0.5, opacity: 0.95 }}
                                        >
                                            {b}
                                        </Typography>
                                    ))}
                                </Box>

                                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.6 }}>
                                    {item.tags.map((tag) => (
                                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                                    ))}
                                </Stack>
                            </Box>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </AnimatedSection>
    );
};

export default ExperienceSection;
