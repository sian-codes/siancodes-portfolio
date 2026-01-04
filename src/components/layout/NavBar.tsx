import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'goals', label: 'Next Chapter' },
    { id: 'contact', label: 'Contact' },
];

const NavBar: React.FC = () => {
    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <Toolbar sx={{ backdropFilter: 'blur(10px)', bgcolor: 'rgba(0,0,0,0.6)' }}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                    siancodes
                </Typography>
                <Stack direction="row" spacing={1}>
                    {sections.map((section) => (
                        <Button
                            key={section.id}
                            color="inherit"
                            size="small"
                            onClick={() => handleScroll(section.id)}
                        >
                            {section.label}
                        </Button>
                    ))}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
