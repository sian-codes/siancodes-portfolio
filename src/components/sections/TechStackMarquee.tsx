import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import { keyframes } from '@mui/system';

// Icons
import AndroidIcon from '@mui/icons-material/Android';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import HtmlIcon from '@mui/icons-material/Html';
import TerminalIcon from '@mui/icons-material/Terminal';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import BugReportIcon from '@mui/icons-material/BugReport';
import DataObjectIcon from '@mui/icons-material/DataObject';

// Animation
const scroll = keyframes`
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
`;

const techItems = [
    { label: 'Kotlin · Android', icon: <AndroidIcon /> },
    { label: 'Jetpack · Compose', icon: <DataObjectIcon /> },
    { label: 'TypeScript · JavaScript', icon: <JavascriptIcon /> },
    { label: 'React · Web UI', icon: <WebIcon /> },
    { label: 'HTML · CSS', icon: <HtmlIcon /> },
    { label: 'Node.js · APIs', icon: <StorageIcon /> },
    { label: 'SDKs · DX', icon: <IntegrationInstructionsIcon /> },
    { label: 'Testing · QA', icon: <BugReportIcon /> },
    { label: 'Cloud · Backend', icon: <CloudIcon /> },
    { label: 'Security · Auth', icon: <SecurityIcon /> },
    { label: 'Developer Tools', icon: <TerminalIcon /> },
];

const TechStackMarquee: React.FC = () => {
    return (
        <Box
            sx={{
                mt: 5,
                py: 2,
                overflow: 'hidden',
                position: 'relative',

                // soft fade on the edges
                maskImage:
                    'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',

                WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}
        >
            <Box
                sx={{
                    display: 'inline-flex',
                    whiteSpace: 'nowrap',

                    animation: `${scroll} 28s linear infinite`,
                    '&:hover': { animationPlayState: 'paused' },

                    // chip styling
                    '& .MuiChip-root': {
                        borderRadius: 999,
                        px: 1.6,
                        height: 34,
                        backdropFilter: 'blur(2px)',
                    },
                    '& .MuiChip-icon': {
                        mr: 1,
                    },
                }}
            >
                {/* copy 1 */}
                <Stack direction="row" spacing={2.5} sx={{ mr: 4 }}>
                    {techItems.map((item) => (
                        <Chip
                            key={`tech-1-${item.label}`}
                            icon={item.icon}
                            label={item.label}
                            variant="outlined"
                        />
                    ))}
                </Stack>

                {/* copy 2 — required for seamless loop */}
                <Stack direction="row" spacing={2.5}>
                    {techItems.map((item) => (
                        <Chip
                            key={`tech-2-${item.label}`}
                            icon={item.icon}
                            label={item.label}
                            variant="outlined"
                        />
                    ))}
                </Stack>
            </Box>
        </Box>
    );
};

export default TechStackMarquee;
