/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LinkedIn } from '@mui/icons-material';


const Nishi = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        
      <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          className='w3-hide-large'
        >
          <Box  width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.expertbrokers.com.au/about-nishi.webp'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Nishi Sharma
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
                Director
              </Typography>
            </Typography>
            
            
            <Typography variant='body' component={'p'}>
            Nishi Sharma is the founder of Expert Brokers and a seasoned professional in the finance industry. With a career spanning over two decades, she has built a reputation for being knowledgeable, approachable, and deeply committed to her clients’ success.
              <br /> <br />
              What sets Nishi apart is her personal approach—she takes the time to truly understand each client’s goals and challenges, crafting financial solutions that are not only effective but empowering. Whether it’s a first home, a refinance, or a business loan, she brings clarity and confidence to every step of the process.
              <br />
              <br />
              Her mission is simple: to remove the stress from lending and provide honest, strategic guidance that helps people make smarter financial decisions. For Nishi, every client is more than just a transaction—they’re a long-term relationship built on trust and care.
            </Typography> <br />
            <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
              <LinkedIn/> <a href='https://www.linkedin.com/in/nishi-sharma-a875319b/' 
                target='_blank' 
              >LinkedIn</a>
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          className='w3-hide-medium w3-hide-small'
        >
          <Box  width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.expertbrokers.com.au/about-nishi.webp'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nishi;
