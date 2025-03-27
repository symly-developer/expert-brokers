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
            <Typography component={'p'}>
              We are a team of experienced mortgage finance professionals with a proven track record of delivering expert guidance and tailored solutions to our clients. With over 20 years of experience in the industry, we have established ourselves as a trusted and reliable partner for individuals and businesses seeking home loans, commercial loans, personal loans and Self-Managed Super Fund (SMSF) lending.
              <br /> <br />
              Our team is comprised of seasoned professionals who possess a deep understanding of the complex and ever-evolving mortgage landscape. We take the time to listen to our clients' unique needs and goals, providing personalized advice and recommendations to help them achieve their financial objectives. Whether you're a first-time homebuyer, a seasoned investor, or a business owner looking to expand, we have the expertise and resources to help you navigate the mortgage process with confidence.
              <br />
              <br />
              With a commitment to exceptional customer service, transparency, and integrity, we have built long-standing relationships with our clients and partners. Our goal is to provide innovative and effective financing solutions that empower our clients to achieve their dreams and secure their financial futures.
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
                'https://assets.cashcapital.com.au/about-us/about-us-intro.jpg'
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

export default Story;
