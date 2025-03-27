/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Advantages2 = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.main'}
          align={'center'}
        >
          --
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Positive and Negative gearing
          
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={theme.palette.text.secondary}
          align={'left'}
        >
          <b>Positive gearing </b>is when your total rental income is MORE than the cost of owning and managing the investment property (loan repayments, interest, maintenance, management fees, etc). To put it simply, your property props up finance.

          <br />
          <br />
          <b> Negative gearing </b> is the opposite. It’s when your total rental income is LESS than the cost of owning and managing the investment property, leaving you to make up the difference in payments.
          <br />
          Positive gearing allows you to have an increased income and generally won’t put you out of pocket. However, you will be taxed on any additional cash from your investment. 
          <br />  <br />
          With <b>negative gearing</b> you can claim tax deductions on expenses related to owning your investment property. The capital growth on the property will also eventually outweigh the expenses as the property grows in value overtime. 
          <br /> 
          Like the names suggest, there are pros and cons for both situations, so it’s important to get the right advice on which one is better suited to you.
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            component={'a'}
            href={'/contact-sidebar-map#contact-block'}
            target={'_blank'}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Get Started
          </Button>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Advantages2;
