import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

const gengarImage =
    'https://img.pokemondb.net/sprites/scarlet-violet/normal/gengar.png';

const GengarSticker: React.FC = () => {
    const handleClick = () => {
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                right: { xs: 12, md: 24 },
                bottom: { xs: 12, md: 24 },
                zIndex: 1200,
                pointerEvents: 'none',
            }}
        >
            <Tooltip title="My favourite Pokémon is Gengar, whats yours?" arrow>
                <motion.button
                    onClick={handleClick}
                    style={{
                        border: 'none',
                        padding: 0,
                        background: 'transparent',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                    }}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.06, rotate: -4 }}
                >
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <Box
                            sx={{
                                width: 72,
                                height: 72,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.35)',
                                boxShadow: '0 18px 40px rgba(0,0,0,0.7)',
                                background:
                                    'radial-gradient(circle at 30% 20%, rgba(186,104,200,0.45), transparent 60%)',
                            }}
                        >
                            <Box
                                component="img"
                                src={gengarImage}
                                alt="Gengar sprite"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    display: 'block',
                                    pt: 1,
                                }}
                            />
                        </Box>
                    </motion.div>
                </motion.button>
            </Tooltip>
        </Box>
    );
};

export default GengarSticker;
