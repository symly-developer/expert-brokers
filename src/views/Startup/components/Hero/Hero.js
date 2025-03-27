/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';
import { Button, Grid, Stack } from '@mui/material';



const Hero = () => {
  const theme = useTheme();



  
  return (
    // this is main container size
    <Box position={'relative'} zIndex={2} height={{ xs: '150vh', md: '100vh', lg: '100vh' }}>
      <Box width={1} height={1} position={'absolute'} overflow={'hidden'}>
        <Box
          width={'100vw'}
          height={{xs:'140vh', md: '100vh', lg: '100vh'}} // this is the height of video
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          sx={{ transform: 'translate(-50%,-50%)' }}
        >
          <Box
            component={'video'}
            autoPlay
            loop
            muted
            playsInline
            minWidth={'100%'}
            minHeight={'100%'}
          
            src="https://assets.expertbrokers.com.au/hero-bg-video.mp4">

          </Box>
        </Box>
      </Box>
     
      <Box
        position={'relative'}
        zIndex={2}
        minHeight={{ xs: 'calc(130vh + 10px)', md: 'calc(100vh + 10px)', lg: 'calc(100vh + 10px)' }} // this is the height of the wave thing
        // minHeight={'calc(130vh + 10px)'} // this is the height of the wave thing
        display={'flex'}
        justifyContent={'center'}
        // alignItems={'center'}
        marginTop={-13}
        paddingTop={13}
        sx={{
          '&::after': {
            content: '""',
            backgroundColor: theme.palette.primary.dark,
            backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.dark} 0%,rgb(9, 9, 9) 70%)`,
            opacity: '0.6',
            width: 1,
            height: 0.95, // this is the height of the wave thing
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 3,
          },
        }}
      >
      <Box
        position={'absolute'}
        bottom={0}
        left={0}
        width={1}
        height={'auto'}
        zIndex={4}

      >
        <Box
          component={'img'}
          src="https://assets.expertbrokers.com.au/hero-bg.svg"
          // height={1}
          minHeight={1}
          width={1}
          // minWidth={1}
          // maxWidth={1920}
          sx={{
            filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
          }}
        />
      </Box>
      

        <Container position={'relative'} marginTop={6} zIndex={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <Box>
              <Box marginBottom={4}>
                <Typography
                  variant={'h2'}
                  component={'h1'}
                  align={'left'}
                  gutterBottom
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 600,
                  }}
                >
                  Helping you achieve your goals with {' '}
                  <Typography
                    variant={'h2'}
                    component={'span'}
                    sx={{
                      color: theme.palette.secondary.main,
                      fontWeight: 700,
                    }}
                  >
                    Our Expert Services
                    </Typography>
                </Typography>
                <Typography
                  variant={'h6'}
                  component={'p'}
                  align={'left'}
                  sx={{
                    color: theme.palette.common.white,
                    fontWeight: 700,
                  }}
                >
                  With 20+ years in finance, we’re a trusted choice for home, commercial, personal, and SMSF loans. mission is more than just helping people secure loans—it’s about making dreams a reality, creating security, and building a future filled with hope and opportunity.
                </Typography>
               
              </Box>
              
              <Box marginBottom={1} marginTop={5}  display={'flex'} justifyContent={'left'}>
                <Stack direction="row" spacing={2}>             
                  <Button
                    variant="contained"
                    color="primary"
                    component="a"
                    target="blank"
                    href="/contact-sidebar-map#contact-block"
                    size="large"
                    
                  >
                    Get In Touch
                  </Button>
                  <Button
                    variant="outlined"
                    color='primary'
                    component="a"
                    target="blank"
                    href="/borrowing-power-calculator"
                    size="large"
                    sx={{
                      color: theme.palette.common.white,
                      fontWeight: 700,
                      borderColor: theme.palette.common.white}}
                  >
                    Loan Calculators 
                  </Button>
                </Stack>
              </Box>
              
            </Box>
          </Grid> 
          <Grid item xs={12} md={4} lg={4}>
            <Box
              display={'flex'}
              justifyContent={'center'}
              // alignItems={'center'}
              // height={'130%'}
              // width={'100%'}
            >
              <Box
                component={'img'}
                src="https://assets.expertbrokers.com.au/nishi-sharma-broker-photo5.webp"
                height={{xs: '.7',  md: '1', lg: '1' }}
                width={{xs: '.7',  md: '1', lg: '1' }}
                maxWidth={500}
                sx={{
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
                }}
              />
            </Box>
            </Grid> 
        </Grid>
          
        </Container>
      </Box>
      
    </Box>
  );
};

export default Hero;
