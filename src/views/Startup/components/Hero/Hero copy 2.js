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
    <Box position={'relative'} zIndex={2} height={{ xs: '100vh', md: '100vh' }}>
      {/* Video */}
      <Box width={1} height={1} position={'absolute'} overflow={'hidden'}>
        <Box
          
          position={'absolute'}
          top={0}
          left={0}
          sx={{ transform: 'translate(0, 0)' }} // Remove any transform
        >
          <Box
            component={'video'}
            autoPlay
            loop
            muted
            playsInline
            minHeight={{ xs: '100vh', md: '100vh' }} // this is the height of video
            
            
            
            src="https://assets.expertbrokers.com.au/hero-bg-video1.mp4">

          </Box>
        </Box>
      </Box>
      {/* Overlay */}
      <Box
        position={'absolute'}
        top={0}
        left={0}
        width={1}
        
        height={1}
        sx={{
          backgroundColor: theme.palette.primary.dark,
          backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.main} 0%,rgba(23, 103, 240, 0.42) 70%)`,
          opacity: '0.5',
        }}
      />
      {/* This is the wave thing overlay */}
      <Box
          position={'absolute'}
          bottom={0}
          left={0}
          width={'100%'}
          // height={'auto'}
          zIndex={1}
          overflow={'hidden'}
        >
              <Box
                component={'img'}
                src="https://assets.expertbrokers.com.au/hero-bg-3.webp"
                // height={1}
                minHeight={1}
                width={{ xs: '100%', md: '100%', lg: '100%' }}
                // minWidth={1}
                // maxWidth={1920}
                sx={{
                  filter: theme.palette.mode === 'dark' ? 'brightness(0.2)' : 'none',
                }}
              />
        </Box>
        {/* Main Content Grid  */}
        <Box
          position={'absolute'}
          top={0}
          left={0}
          width={1}
          
          display={'flex'}  
          alignItems={'center'}
          justifyContent={'center'}
          zIndex={0}
          paddingTop={10}
          // paddingTop= {{
          //   xs: '30vh',
          //   sm: '45vh',
          //   md: '25vh',
          //   lg: '15vh',
          //   xl: '10vh',
          // }}
          >
          <Container >

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
                      Helping you achieve your fnancial goals with {' '}  
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
                      With 25+ years in finance, we help clients secure home, commercial, personal, and SMSF loans—turning goals into reality and building a secure future.
                    </Typography>
                  </Box>
                  <Box marginBottom={1} marginTop={5}  display={'flex'} justifyContent={'left'}>
                    <Stack direction="row" spacing={2}>
                      <Button
                        variant="contained"
                        color="secondary"
                        component="a"
                        target="blank"
                        href="/contact-sidebar-map#contact-block"
                        size="large"
                        sx={{
                          color: theme.palette.common.black,  
                          fontWeight: 700,
                        }}
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
                    src="https://assets.expertbrokers.com.au/nishi-sharma-broker-photo9.webp"
                    // height={{xs: '.6',  md: '.6', lg: '.6' }}
                    // maxWidth={{ xs: '50%', md: '60%', lg: '60%' }}
                    width={{ xs: '0%', md: '0%', lg: '100%' }}
                    
                    maxWidth={{lg: '70%', xl: '90%'}}
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
