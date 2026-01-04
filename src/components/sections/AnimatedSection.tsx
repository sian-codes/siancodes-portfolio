import React from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface AnimatedSectionProps {
    id: string;
    title?: string;
    children: React.ReactNode;
}

const AnimatedSection2: React.FC<AnimatedSectionProps> = ({ id, title, children }) => {
    return (
        <Box id={id} sx={{ py: 10 }}>
            <motion.div
                initial={{ opacity: 0, y: 120 }} // amend to change dramatic of the slide
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: false, amount: 0.3 }} // trigger when ~30% visible (can change this to be earlier or later)
                style={{ willChange: 'transform, opacity'}} // for smoother animation
            >
                {title && (
                    <Typography variant="h2" gutterBottom>
                        {title}
                    </Typography>
                )}
                {children}
            </motion.div>
        </Box>
    );
};

export default AnimatedSection2;
