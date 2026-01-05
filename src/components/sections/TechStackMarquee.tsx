import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { keyframes } from '@mui/system';

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const stackItems = [
    'Android',
    'Kotlin',
    'Jetpack Compose',
    'Coroutines',
    'SDK Development',
    'Payments / Checkout',
    'API Integrations',
    'Developer Experience',
    'React',
    'TypeScript',
    'Web Components (Stencil)',
    'Node.js',
    'Testing',
    'CI/CD',
    'REST APIs',
];

export default function TechStackMarquee() {
    // duplicate the list to form a seamless loop
    const loopItems = [...stackItems, ...stackItems];

    return (
        <Box
            sx={{
                overflow: 'hidden',
                width: '100%',
                py: 1,
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    gap: 1.2,
                    width: 'max-content',
                    animation: `${scroll} 35s linear infinite`,
                    '&:hover': {
                        animationPlayState: 'paused',
                    },
                }}
            >
                {loopItems.map((item, index) => (
                    <Chip
                        key={`${item}-${index}`}
                        label={item}
                        size="small"
                        variant="outlined"
                        sx={{
                            borderRadius: 2,
                            bgcolor: 'rgba(255,255,255,0.04)',
                            borderColor: 'rgba(255,255,255,0.15)',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
