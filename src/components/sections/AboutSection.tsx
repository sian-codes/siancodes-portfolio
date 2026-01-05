import React from 'react';
import AnimatedSection from './AnimatedSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HorizontalImageBand from "../HorizontalImageBand.tsx";
import athens from '../../assets/section/Athens.jpg';
import cave from '../../assets/section/cavewalks.jpg';
import nightcode from '../../assets/section/nightcoding.jpeg';
import singapore from '../../assets/section/Singapore.jpeg';
import cny from '../../assets/section/SingaporeCNY.jpg';
import walk from '../../assets/section/walks.jpeg';
import dogwalk from '../../assets/section/dogwalk.png';
import favfood from '../../assets/section/favfood.jpg';
import flowers from '../../assets/section/Flowers.png';
import gengar from '../../assets/section/Gengar.png';
import greece from '../../assets/section/greece.png';
import lego from '../../assets/section/lego.jpg';
import starbotton from '../../assets/section/Starbotton.png';
import timburton from '../../assets/section/timburton.jpg';
import dog from '../../assets/section/Dog.png';
import countryliving from '../../assets/section/CountryLiving.png';



const aboutImages = [
    { img: athens, title: "Exploring Cities" },
    { img: cave, title: "One time cave explorer" },
    { img: nightcode, title: "Coding Racoon" },
    { img: singapore, title: "Favourite place" },
    { img: cny, title: "Looking out for all the cute things" },
    { img: walk, title: "Exploring forests" },
    { img: dogwalk, title: "Walking Doggos" },
    { img: favfood, title: "Unagi for life" },
    { img: flowers, title: "Love walking among flowers" },
    { img: gengar, title: "Favourite Pokémon" },
    { img: greece, title: "Bouncing from country to country" },
    { img: lego, title: "Exploring Lego Cities in Legoland" },
    { img: starbotton, title: "Lived in a tiny village in the Dales" },
    { img: timburton, title: "Love going to exhibits" },
    { img: dog, title: "Mans best Friend" },
    { img: countryliving, title: "Always finding food with a view" },
];

const AboutSection: React.FC = () => {
    return (
        <AnimatedSection id="about" title="About">
            <Box sx={{ maxWidth: 760 }}>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    I&apos;m a UK-based Software Engineer who enjoys turning complex systems into clean,
                    reliable user and developer experiences. Right now I focus on{' '}
                    <strong>Android and Kotlin</strong>, building and improving payments SDKs, merchant flows
                    and supporting services.
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    Before specialising in mobile, I spent several years in the{' '}
                    <strong>TypeScript / React / Node</strong> world. That full-stack background means I
                    care a lot about how APIs, SDKs and UIs fit together end-to-end — from architecture and
                    testing to documentation and onboarding.
                </Typography>

                <Typography variant="body1" sx={{ mb: 2 }}>
                    I&apos;m happiest when I&apos;m shaping developer experience, refining interfaces and
                    building tools that make difficult things feel simple. Outside of work, I tinker with
                    Pokémon-themed apps, productivity experiments and cozy UI ideas inspired by games.
                </Typography>

                <Typography variant="body1" sx={{ mb: 2}}>
                    Away from the keyboard, I’m a traveller, museum-wanderer and forest-walker at
                    heart — with a big soft spot for good food, cozy adventures, and anything
                    Pokémon.
                </Typography>
            </Box>
            <HorizontalImageBand images={aboutImages} />
        </AnimatedSection>
    );
};

export default AboutSection;
