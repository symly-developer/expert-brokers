import React, {useEffect} from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  FullScreenHeroWithImageSlider,
  Hero,
  
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
  AppWithBoxedLogos,
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
        
        {/* Main Hero */}
        <Hero />

        {/* Lead generating mini app */}
        <AppWithBoxedLogos />

        {/* 60 PLus Banks */}
        <HeroWithPrimaryBackgroundAndDesktopScreenshot />
        <FullScreenHeroWithImageSlider />
        
        <GoogleReviews />
        {/* <Container marginTop={'10vh'} >
          <WhyUs />
        </Container> */}
        

        {/* <HeroWithBackgroundVideo /> */}
        

        

        {/* <Divider /> */}

        

        <FeaturesHomeLoans />
        
        <Divider />
        <PromptLoanCalc/> 
        
        
        {/* <FeaturesOtherLoans /> */}
        {/* <VerticallyAlignedBlogCardOverlappedWithDescriptionBox /> */}
        
        <CtaAlignedLeftWithTypedText />          
        
      </Main>
    </> 
  );
};

export default Startup;
