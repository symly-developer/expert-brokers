import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import Container from 'components/Container';

const Hero = () => {
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

  return (
    <Box
      className={'jarallax'}
      data-jarallax
      data-speed="0.2"
      position={'relative'}
      minHeight={{ xs: 400, sm: 500, md: 700 }}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      marginTop={-13}
      paddingTop={13}
      id="agency__portfolio-item--js-scroll"
    >
      {/* Background image for large screens */}
      <Box
        className={'jarallax-img w3-hide-small w3-hide-medium' }
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '80%',
          // height: '100%',
        
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://assets.expertbrokers.com.au/about-us-hero2.webp)',
        }}
      />
      {/* Background image for medium screens */}
      <Box
        className={'jarallax-img w3-hide-small w3-hide-large' }
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://assets.expertbrokers.com.au/about-us-hero2.webp)',
        }}
      />
      {/* Background image for small screens */} 
      <Box
        className={'jarallax-img w3-hide-large w3-hide-medium' }
        sx={{
          position: 'absolute',
          objectFit: 'cover',
          /* support for plugin https://github.com/bfred-it/object-fit-images */
          fontFamily: 'object-fit: cover;',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://assets.expertbrokers.com.au/about-us-hero2.webp)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.6),
          zIndex: 1,
          
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 900,
              color: 'common.white',
              textTransform: 'uppercase',
            }}
            align='center'
          >
            About us
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="text.primary"
            sx={{
              color: 'common.white',
            }}
            align='center'
          >
            More than just loans — we’re your trusted partners in building a secure financial future.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
