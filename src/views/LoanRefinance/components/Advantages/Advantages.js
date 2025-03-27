/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Advantages = () => {
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
          Should you refinance? 
          <br />
          Talk to us today
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={theme.palette.text.secondary}
          align={'center'}
        >
          Changes in life, such as shifts in interest rates, financial circumstances, or personal goals, may signal the need to reassess your home loan. Refinancing offers an opportunity to reduce costs, shorten your mortgage term, or secure a more favorable deal. You don’t have to navigate the process alone—by working with a broker who prioritizes your needs and handles the details, refinancing becomes simpler and more manageable.

          <br />
          <br />
          We’ll break down the details, working with more than 60 banks and lenders to help find the loan that best fits your needs as a first-time homebuyer.
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

export default Advantages;
