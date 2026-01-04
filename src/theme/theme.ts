// src/theme/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark', // TODO:  flip to 'light' with a toggle
        primary: {
            main: '#4caf50', // TODO: swap to forest brand green
        },
        secondary: {
            main: '#ffb300', // TODO: adjust for accent (gamer/console vibes)
        },
        background: {
            default: '#0b0f0c',
            paper: '#121712',
        },
    },
    typography: {
        fontFamily: `'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.2rem',
            fontWeight: 600,
        },
        body1: {
            fontSize: '1rem',
        },
    },
    shape: {
        borderRadius: 18, // softer
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 2,
            },
            styleOverrides: {
                root: {
                    borderRadius: 18,
                },
            },
        },
    },
});

export default theme;
