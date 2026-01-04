import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

interface Project {
    title: string;
    role?: string;
    timeframe?: string;
    description: string;
    bullets: string[];
    tech: string[];
    linkLabel?: string;
    linkUrl?: string;
}

const professionalProjects: Project[] = [
    {
        title: 'Access Worldpay Checkout — Android SDK',
        role: 'Full-stack Software Engineer · Worldpay',
        timeframe: 'Ongoing',
        description:
            'Contributing to the Android SDK that powers merchant checkout flows by securely creating encrypted sessions used with Access payment APIs.',
        bullets: [
            'Work on lifecycle-safe payment flows, card entry and Google Pay integration.',
            'Improve internal architecture, error handling and observability for merchant integrations.',
            'Collaborate with docs and SDK teams so integration paths are clear and consistent across platforms.',
        ],
        tech: ['Kotlin', 'Android SDK', 'Coroutines', 'Flows', 'Payments'],
        linkLabel: 'View Checkout Android docs',
        linkUrl: 'https://developer.worldpay.com/products/checkout/android',
    },
    {
        title: 'Access Worldpay Checkout — Web & Cross-platform SDKs',
        role: 'Full-stack Software Engineer · Worldpay',
        timeframe: 'Ongoing',
        description:
            'Support the broader Checkout SDK ecosystem used by web and mobile merchants to collect card details and generate sessions for payments and tokens.',
        bullets: [
            'Work with teams maintaining Web SDK to keep patterns and behaviours aligned.',
            'Help debug and refine merchant integrations across different tech stacks.',
            'Feed back DX improvements into examples, documentation and configuration guidance.',
        ],
        tech: ['JavaScript', 'TypeScript', 'React', 'SDK design', 'Developer Experience'],
        linkLabel: 'View Checkout product page',
        linkUrl: 'https://developer.worldpay.com/products/checkout/web',
    },
    {
        title: 'Access Worldpay Checkout — React Native SDK',
        role: 'Full-stack Software Engineer · Worldpay',
        timeframe: 'Ongoing',
        description:
            'Support the broader Checkout SDK ecosystem used by web and mobile merchants to collect card details and generate sessions for payments and tokens.',
        bullets: [
            'Work with team maintaining React Native and iOS SDKs to keep patterns and behaviours aligned across SDKs.',
            'Help debug and refine merchant integrations across different tech stacks.',
            'Feed back DX improvements into examples, documentation and configuration guidance.',
        ],
        tech: ['JavaScript', 'TypeScript', 'React', 'SDK design', 'Developer Experience'],
        linkLabel: 'View Checkout product page',
        linkUrl: 'https://developer.worldpay.com/products/checkout/reactnative',
    },
    {
        title: 'Internal — Integration Guide',
        role: 'Full-stack Software Engineer · Worldpay',
        timeframe: 'Ongoing',
        description:
            'Support customers with their onboarding experience, specifically creating an integration guide for products.',
        bullets: [
            'Work with team maintaining our onboarding experience site.',
            'Ensuring only the right customers have access working with JWT tokens.',
            'Setting up a backend in Cassandra to populate use cases with API calls',
        ],
        tech: ['JavaScript', 'TypeScript', 'React', 'SDK design', 'Merchant Experience', 'Cassandra'],
    },
];

const personalProjects: Project[] = [
    {
        title: 'PokéScan — Pokémon Card Tracker',
        description:
            'Personal Android app for tracking a Pokémon card collection with a calm, playful UI that still feels production-quality.',
        bullets: [
            'Designs data models and flows to manage sets, cards and valuations over time.',
            'Experiments with camera / scanning flows to make adding cards fast and low-friction.',
            'Uses the project as a playground for Compose, architecture patterns and testing.',
        ],
        tech: ['Kotlin', 'Jetpack Compose', 'Android', 'ML Kit (planned)'],
    },
    {
        title: 'siancodes.com — Portfolio & Developer Story',
        description:
            'This site — a single-page React experience built to tell my story as a payments and mobile engineer through smooth scroll, motion and thoughtful content.',
        bullets: [
            'Implements scroll-driven sections with subtle animation using Framer Motion.',
            'Uses a custom Material UI theme to keep the visual language calm and consistent.',
            'Prioritises recruiter-friendly copy and structure so my experience is easy to scan.',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'Material UI', 'Framer Motion'],
        linkLabel: 'View this repo on GitHub',
        linkUrl: 'https://github.com/your-username/siancodes-portfolio', // TODO: replace with real URL
    },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                border: '1px solid rgba(255,255,255,0.08)',
                background:
                    'linear-gradient(145deg, rgba(255,255,255,0.03), rgba(0,0,0,0.6))',
            }}
        >
            <CardContent sx={{ pb: 2.5 }}>
                {project.role && (
                    <Typography
                        variant="overline"
                        sx={{ letterSpacing: 1.5, opacity: 0.85 }}
                    >
                        {project.role}
                    </Typography>
                )}

                <Typography variant="h6" sx={{ mb: 1 }}>
                    {project.title}
                </Typography>

                {project.timeframe && (
                    <Typography variant="caption" sx={{ opacity: 0.7, display: 'block', mb: 1 }}>
                        {project.timeframe}
                    </Typography>
                )}

                <Typography variant="body2" sx={{ mb: 1.5, opacity: 0.9 }}>
                    {project.description}
                </Typography>

                <Box component="ul" sx={{ pl: 2.5, mb: 2 }}>
                    {project.bullets.map((item) => (
                        <Typography
                            key={item}
                            component="li"
                            variant="body2"
                            sx={{ mb: 0.5, opacity: 0.9 }}
                        >
                            {item}
                        </Typography>
                    ))}
                </Box>

                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.8 }}>
                    {project.tech.map((tag) => (
                        <Chip key={tag} label={tag} size="small" variant="outlined" />
                    ))}
                </Stack>
            </CardContent>

            {project.linkUrl && project.linkLabel && (
                <CardActions sx={{ mt: 'auto', pt: 0, px: 2.5, pb: 2 }}>
                    <Button
                        size="small"
                        variant="outlined"
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.linkLabel}
                    </Button>
                </CardActions>
            )}
        </Card>
    );
};

const ProjectsSection: React.FC = () => {
    return (
        <AnimatedSection id="projects" title="Projects">
            <Box sx={{ mb: 4 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Professional
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, maxWidth: 800 }}>
                    I currently work on{' '}
                    <strong>Access Worldpay Checkout</strong>, a set of SDKs that merchants use to build
                    their own branded checkout forms while securely creating encrypted card sessions for
                    use with Access payment APIs.
                </Typography>
                <Grid container spacing={3}>
                    {professionalProjects.map((p) => (
                        <Grid key={p.title} size={{ xs: 12, md: 6 }}>
                            <ProjectCard project={p} />
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ mt: 6 }}>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Personal
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, maxWidth: 800 }}>
                    Outside of work, I like exploring ideas around collections, cozy interfaces and
                    developer experience through smaller projects.
                </Typography>
                <Grid container spacing={3}>
                    {personalProjects.map((p) => (
                        <Grid key={p.title} size={{ xs: 12, md: 6 }}>
                            <ProjectCard project={p} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </AnimatedSection>
    );
};

export default ProjectsSection;
