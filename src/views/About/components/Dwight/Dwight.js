/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Dwight = () => {
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
              Dwight Dela Cruz
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
                Credit Analyst
              </Typography>
            </Typography>
            <Typography component={'p'}>
              Meet Dwight! With a wealth of experience in loan processing, Dwight specializes in helping clients secure the best loan options by meticulously analyzing financial statements and credit reports. His strong analytical skills and understanding of lending criteria enable him to guide clients confidently through complex financial decisions. Dwight takes pride in ensuring that each client receives a solution tailored to their specific needs and circumstances.
              <br />
              <br />
              In addition to his core expertise, Dwight is highly skilled in using mortgage broking software, CRM systems, and financial tools to streamline business operations. His proficiency with these technologies allows him to optimize workflows, minimize delays, and enhance the overall client experience. Furthermore, Dwight’s deep knowledge of mortgage products, interest rates, loan structures, and financial regulations has made him a go-to expert for both clients and colleagues seeking advice in these areas.
              <br />
              <br />
              While Dwight is dedicated to his profession, he also understands the importance of balance and well-being. In his free time, he prioritizes rest and relaxation, often enjoying peaceful moments to recharge at home. Whether at work or at leisure, Dwight embodies professionalism, efficiency, and a calm, thoughtful approach to everything he does.
  
              
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
                'https://assets.cashcapital.com.au/about-us/dwight.jpg'
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

export default Dwight;
