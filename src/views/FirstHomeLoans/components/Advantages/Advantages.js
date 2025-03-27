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
          Its important to start your Journey 
          <br />
          ON THE RIGHT FOOT
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={theme.palette.text.secondary}
          align={'center'}
        >
          Entering the property market is a major financial milestone. With complex contracts, paperwork full of jargon, and various inspections to navigate, the process can feel overwhelming. Our goal is to guide you through each stage clearly and simply.

          <br />
          <br />
          Just like every home on your wishlist is unique, so are home loans. We’ll break down the details, working with more than 60 banks and lenders to help find the loan that best fits your needs as a first-time homebuyer.
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
