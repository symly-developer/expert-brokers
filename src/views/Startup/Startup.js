import React, {useEffect} from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Goby,
} from './components';
import FeaturesHomeLoans from './components/FeaturesHomeLoans';
import FeaturesOtherLoans from './components/FeaturesOtherLoans';
import {CtaAlignedLeftWithTypedText,
  GoogleReviews,
  Partners,
  PromptLoanCalc,
  WhyUs,
  HeroWithPrimaryBackgroundAndDesktopScreenshot,
  // Helmet,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';

// import Helmet from 'react-helmet';



const Startup = () => {
  useEffect(() => {
    const jarallaxInit = async () => {
      const jarallaxElems = document.querySelectorAll('.jarallax');
      if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
        return;
      }
  
      const { jarallax } = await import('jarallax');
      jarallax(jarallaxElems, { speed: 0.2 });
    };
  
    jarallaxInit();
  });
  
  const theme = useTheme();
  const styles = (bgImage) => ({
    position: 'absolute',
    objectFit: 'cover',
    /* support for plugin https://github.com/bfred-it/object-fit-images */
    fontFamily: 'object-fit: cover;',
    top: 0,
    left: 0,
    width: '0%',
    height: '100%',
    zIndex: -1,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${bgImage})`,
    filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
  });
  return (
    <>
      
      <Main colorInvert={true}>
        
        <Hero />
        

        <Container marginTop={'10vh'} >
          <WhyUs />
        </Container>

        {/* <HeroWithBackgroundVideo /> */}
        
        <Box bgcolor={'primary.dark'}  
        > 
         
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
            {/* Background Image */}
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
                  xs: 'right center', // small screens - crop left
                  sm: 'center center', // medium and up - default center
                },
                zIndex: 0,
              }}
            />

            {/* Translucent Overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              sx={{
                background: `linear-gradient(to right, rgba(25, 25, 25, 0.7), rgba(0, 0, 50, 0.6))`,
                // opacity: 1,
                // transition: 'opacity 0.3s ease-in-out',
              }}
              // bgcolor={ 'linear-gradient(to right, rgba(25, 25, 25, 0.7), rgba(0, 0, 50, 0.6))'}
              zIndex={1}
            />

            {/* Content */}
            <Container sx={{ position: 'relative', zIndex: 2 }}>
              <Goby />
            </Container>
          </Box>

          
        </Box>


        </Box>
        {/* <Divider /> */}

        <HeroWithPrimaryBackgroundAndDesktopScreenshot />

        <FeaturesHomeLoans />
        <GoogleReviews />
        <Divider />
        <PromptLoanCalc/> 
        
        
        {/* <FeaturesOtherLoans /> */}
        <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />
        <Divider />
        <CtaAlignedLeftWithTypedText />          
        
      </Main>
    </> 
  );
};

export default Startup;
