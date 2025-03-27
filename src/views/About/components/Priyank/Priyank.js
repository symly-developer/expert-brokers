/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { LinkedIn } from '@mui/icons-material';


const Priyank = () => {
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
              Priyank (Pat) Dubey 
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
                Senior Finance Broker
              </Typography>
            </Typography>
            
            <Typography component={'p'}>
              Priyank has a strong customer-focused mindset. He takes the time to understand his clients' specific financial goals and objectives. He then uses his in-depth knowledge of various lending products to create tailored solutions that meet their unique needs. His goal is to provide exceptional service, build long-term relationships, and help his clients achieve financial success.
              <br /> <br />
              Priyank is passionate about staying up to date with the latest developments in the finance industry and is committed to ongoing professional development to ensure his clients receive the best possible advice and guidance. Priyank is a seasoned finance professional who specializes in tailoring bespoke solutions to meet the unique financial needs of his clients. Leveraging his extensive knowledge of various banking and lending products, he crafts personalized financial plans that drive desired outcomes for individuals and businesses alike.
              <br />
              
              Priyank can help you with:
              <ul>
                <li>Home & Investment Loans</li>
                
                <li>Refinancing & Debt Consolidation</li>
                
                <li>Personal & Car Loans</li>
                
                <li>Equipment Finance</li>
                <li>Commercial Loans</li>
                <li>Business Loans</li>
                <li>Self-Managed Super Fund (SMSF) Lending</li>
              </ul>
            </Typography>
            <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
              <LinkedIn/> <a href='https://www.linkedin.com/in/priyank-dubey-145625b6/' 
                target='_blank' 
              >https://www.linkedin.com/in/priyank-dubey-145625b6/</a>
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
          <Box  width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.cashcapital.com.au/about-us/priyankd.jpg'
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

export default Priyank;
