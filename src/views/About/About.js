import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Story,
  WhoWeAre,
  Application,
  HeroWithPrimaryBackgroundAndDesktopScreenshot,
  Nishi,
  Goby,

} from './components';

import { CtaAlignedLeftWithTypedText, OurTeam, 
  // Helmet,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';

const About = () => {
  return (
    <Main colorInvert={true }>
    
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      {/* <Container>
        <OurTeam />
      </Container> */}
      <Container>
        <Nishi />
      </Container>
      <Container maxWidth={800} paddingTop={2}>
        <Application name='Nishi' />
      </Container>
      {/* <Container>
        <Priyank />
      </Container>
      <Container maxWidth={800} paddingTop={2}>
        <Application name='Priyank' />
      </Container>
      <Container>
        <Naitik />
      </Container> */}
      {/* <Container maxWidth={800} paddingTop={2}>
        <Application name='Naitik' />
      </Container> */}
      {/* <Container>
        <Dwight />
      </Container>
      <Container>
        <Mary />
      </Container>
      <Container maxWidth={800} paddingTop={2}>
        <Application name='Naitik' />
      </Container> */}

      {/* Nishi Sharma Block Start*/}

      {/* <Box bgcolor={'primary.dark'} > 
         
         <Box maxWidth={1} alignItems={'center'}>
         <Box
           className={'jarallax'}
           data-jarallax
           data-speed="0.2"
           position={'relative'}
           minHeight={'110vh'}
           width={'100%'}
           display={'flex'}
           alignItems={'center'}
           id="agency__portfolio-item--js-scroll"
           bgcolor="rgba(59, 79, 197, 0.49)" 
         >
           <Box
             className={'jarallax-img'}
             sx={{
               position: 'absolute',
               top: 0,
               left: 0,
               width: '100%',
               height: '100%',
               backgroundImage: `url('https://assets.expertbrokers.com.au/jaralax-image2.webp')`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: {
                 xs: 'right center',
                 sm: 'center center', 
               },
               zIndex: 0,
             }}
           />

           
           <Box
             position="absolute"
             top={0}
             left={0}
             width="100%"
             height="100%"
             sx={{
               background: `linear-gradient(to right, rgba(25, 25, 25, 0.7), rgba(0, 0, 50, 0.6))`,
             
             }}
             
             zIndex={1}
           />

           
           <Container sx={{ position: 'relative', zIndex: 2 }}>
             <Goby />
           </Container>
         </Box>

         
         </Box>


       </Box> */}

      <Box bgcolor={'alternate.main'}>
        <Container>
          <HeroWithPrimaryBackgroundAndDesktopScreenshot />
        </Container>
      </Box>
      {/* <Container>
        <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />
      </Container> */}
      
      {/* <Container maxWidth={800} paddingTop={2}>
        <Application name='Us' />
      </Container> */}
      <CtaAlignedLeftWithTypedText />
    </Main>
  );
};

export default About;
