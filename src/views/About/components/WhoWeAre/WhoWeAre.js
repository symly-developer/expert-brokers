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
            <Typography variant='body' component={'p'} color={'text.secondary'}>
            We’re not just finance professionals — we’re storytellers of your success. At Expert Brokers, we exist to make your financial journey smoother, smarter, and more human. From the outside, we help with loans. But at our core, we build trust, remove complexity, and give you the confidence to move forward with your dreams. Whether you’re a first-home buyer, a growing business, or someone looking for clarity in a complex space, we’re here — not just to provide options, but to stand by you with insight, integrity, and care.
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
            <Typography variant='body' component={'p'} color={'text.secondary'}>
            At Expert Brokers, we believe getting the right loan should feel simple, not stressful. Our process is built around clarity, care, and convenience—so you always know what’s happening and what comes next.
            <br /> <br />
            It all begins with a friendly chat where we listen closely to understand your goals, whether it’s buying a new home, refinancing, or funding a business. From there, we dive into our network of trusted lenders to compare the most competitive and suitable loan options tailored to your needs.
            <br />
            We take care of the details—from assessing your borrowing capacity and organising pre-approvals, to managing the paperwork and staying on top of deadlines. You’ll receive regular updates along the way, with clear communication and expert guidance at every stage.

            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAre;
