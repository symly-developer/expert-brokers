/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Story = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Our story
            </Typography>
            <Typography variant='body' component={'p'}>
            At Expert Brokers, our journey began with a simple belief: everyone deserves the right guidance to achieve their financial dreams.
              <br /> <br />
              Founded by <b>Nishi Sharma</b>, who brings over <b> 25 years of experience </b>in the finance industry, Expert Brokers was born from a desire to do things differently. After helping thousands of individuals and businesses navigate the complex world of loans, Nishi saw a gap — people weren’t just looking for brokers; they were looking for someone who genuinely cared.

              <br />
              <br />
              That’s why Expert Brokers is more than just a mortgage and finance broking service. We exist to support, empower, and simplify the lending journey for our clients. Every loan we arrange is tied to something bigger—a home filled with memories, a business ready to grow, a dream being built.
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
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.expertbrokers.com.au/about-us-intro1.webp'
              }
              width={1}
              className='w3-round-large'
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

export default Story;
