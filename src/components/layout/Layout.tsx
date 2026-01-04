import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import NavBar from './NavBar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <NavBar />
            <Box component="main" sx={{ pt: 10 }}>
                <Container maxWidth="lg">{children}</Container>
            </Box>
        </Box>
    );
};

export default Layout;
