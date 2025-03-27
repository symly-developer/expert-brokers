/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Naitik = () => {
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
              Naitik Shah
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
                Senior Finance Broker
              </Typography>
            </Typography>
            <Typography component={'p'}>
              Naitik Shah is a dedicated and experienced mortgage broker with a passion for helping clients achieve their dream of owning a home or building wealth through property investment. With over 4 years of experience in the industry, he has had the privilege of working with clients from all over the country, providing them with access to the best loans from a range of lenders.
 
              <br /> <br />
              Naitik’s expertise spans all facets of home lending, from guiding first-time buyers through the buying process to helping families build wealth through investment property. He has also worked with clients who have complex lending structures and is confident in his ability to find solutions that meet their unique needs. Whether it’s helping clients navigate the intricacies of loan applications, providing guidance on credit scoring, or offering advice on how to structure their finances for optimal borrowing power, he is committed to delivering exceptional service and expertise every step of the way.
              <br />
              <br />
              He takes the time to understand the clients' goals and objectives and works tirelessly to ensure that they receive the best possible outcome. Whether you're a first-time buyer, a seasoned investor, or someone looking to refinance or restructure your existing loan, Naitik is here to help. With his expertise and guidance, you can trust that you're in good hands.
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
                'https://assets.cashcapital.com.au/about-us/naitik.jpg'
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

export default Naitik;
