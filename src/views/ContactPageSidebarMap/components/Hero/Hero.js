import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import Container from 'components/Container';
import { Grid } from '@mui/material';

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
      minHeight={{ xs: 400, sm: 500, md: 600 }}
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
          width: '100%',
          height: '100%',
        
          zIndex: -1,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundImage:
            'url(https://assets.cashcapital.com.au/contactpage-hero.jpg)',
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
            'url(https://assets.cashcapital.com.au/contactpage-hero.jpg)',
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
            'url(https://assets.cashcapital.com.au/contactpage-hero.jpg)',
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
          background: alpha('#161c2d', 0.4),
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
            Contact Us
          </Typography>
          <Grid container spacing={2}>
            
            <Grid item lg={6} md={6}  sm={12}  xs={12}>
              
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{
                  color: 'common.white',
                }}
                align='center'
              >
                <b>Address:</b> <br />
                Unit 9, <br />
                758 Blackburn Road <br />
                Clayton VIC - 3168 <br />
              </Typography>
            </Grid>
            <Grid item lg={6} md={6}  sm={12}  xs={12}>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                sx={{
                  color: 'common.white',
                }}
                align='center'
              >
                <b>Phone:</b> 0435 134 121 <br />
                <b>Email:</b> info@cashcapital.com.au <br />
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
