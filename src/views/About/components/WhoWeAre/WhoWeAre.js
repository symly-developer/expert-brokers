/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const WhoWeAre = () => {
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
          alignItems={'center'}
          justifyContent="center"
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Who are we?
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
            We are the experts who simplify your mortgage journey. At Cash Capital, we craft financial solutions designed around your goals. With deep industry knowledge and a focus on trust, we guide individuals and businesses to secure the right loans—whether for a home, business growth, or personal needs. We’re here to turn your financial aspirations into reality.
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
        >
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our process
            </Typography>
            <Typography component={'p'} color={'text.secondary'}>
              At <b>Cash Capital</b>, we guide you through a smooth and structured process designed to simplify your mortgage journey. It starts with a simple conversation where we understand your goals and explore opportunities. From there, we research and compare options from over 60 lenders to find the best solutions for your needs. We handle all the paperwork, secure your pre-approval, and determine your borrowing capacity, ensuring you have a clear plan moving forward. Throughout the process, we provide continuous updates, keeping you informed every step of the way!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
