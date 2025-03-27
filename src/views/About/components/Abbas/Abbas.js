/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LinkedIn } from '@mui/icons-material';


const Abbas = () => {
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
        >
          <Box  width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.cashcapital.com.au/about-us/abbas.jpg'
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
              Abbas Khorakiwala 
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
                Director
              </Typography>
            </Typography>
            
            
            <Typography component={'p'}>
              Abbas is a highly experienced mortgage finance professional with over 20 years of expertise in home loans, business and commercial loans, personal loans and Self-Managed Super Fund (SMSF) lending. He has worked with big banks like Citibank, Westpac and ANZ in various capacities. 
              <br /> <br />
              With a proven track record of delivering tailored financial solutions to individuals and businesses, he is committed to providing exceptional customer service and building long-term relationships. His skills in mortgage broking, financial analysis, and risk management, combined with knowledge of the Australian mortgage market and regulatory landscape, he enables his clients to navigate complex financial scenarios and provide innovative solutions that meet their unique needs.
              <br />
              <br />
              He is passionate about empowering clients to achieve their financial goals and secure their futures, whether that's buying a dream home, buying or expanding a business, or building a retirement nest egg. Let's connect and explore how Abbas can help you navigate the world of mortgage finance!
            </Typography> <br />
            <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
              <LinkedIn/> <a href='https://www.linkedin.com/in/abbaskhorak' 
                target='_blank' 
              >https://www.linkedin.com/in/abbaskhorak</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Abbas;
