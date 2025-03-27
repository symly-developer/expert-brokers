/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import { colors } from '@mui/material';

import Container from 'components/Container';
import LockResetIcon from '@mui/icons-material/LockReset';
// import ApiIcon from '@mui/icons-material/Api';
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CallSplitIcon from '@mui/icons-material/CallSplit';
import Inventory2Icon from '@mui/icons-material/Inventory2';


const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Variable rate loan',
    subtitle: 'As the name suggests, the interest rate can change over the life of the loan. This gives you flexibility, but can also leave you open to rate rises. These loans offer more flexible features like unlimited additional repayments, redraw, and offset accounts.',
    icon: (
      <CurrencyExchangeIcon/>
    ),
  },
  {
    color: colors.purple[500],
    title: 'Fixed rate loan',
    subtitle: 'Basically, this is the opposite of a variable rate loan. Your interest rate and repayments will stay the same during the fixed term, no matter what. So no surprises.',
    icon: (
      <LockResetIcon/>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Split loan',
    subtitle: 'You’re able to fix part of your loan, while leaving the rest variable.',
    icon: (
      <CallSplitIcon/>
    ),
  },
  {
    color: colors.indigo[500],
    title: 'Packaged loan',
    subtitle: 'Professional packages offer discounts on standard variable and fixed rates, the waiving of fees, and in some cases, great deals on other products from the same lender. A packaged loan usually comes with one annual fee for the bundled products.',
    icon: (
      <Inventory2Icon/>
    ),
  },
  {
    color: colors.red[500],
    title: 'Introductory rate loan',
    subtitle: 'Also known as ‘honeymoon’ loans, these offer a low interest rate for a short period (e.g., a year), after which the rate moves to the standard variable rate.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    color: colors.green[500],
    title: 'Interest only loans',
    subtitle: 'As the name suggests, you only pay the interest on the principal balance for a set term, with the principal balance unchanged.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
  },
  {
    color: colors.orange[500],
    title: 'Guarantor home loans',
    subtitle: 'A guarantor uses the equity they’ve built up in an existing property to help you purchase your property sooner. Guarantors could be your parents, parent-in-law, or a step-parent or grandparents.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  
];

const FeatureCardsWithColorfullIconsAndLearnMoreLink = () => {
  return (
    <Box bgcolor={'alternate.main'}>
      <Container>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
            fontWeight={700}
          >
            What are the different types of home loans?
          </Typography>
        
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Box
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box component={Card} padding={4} width={1} height={1}>
                  <Box display={'flex'} flexDirection={'column'}>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={2}
                      bgcolor={alpha(item.color, 0.1)}
                      color={item.color}
                      variant={'rounded'}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      sx={{ fontWeight: 700 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    {/* <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'flex-end'}
                    >
                      <Button
                        endIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={24}
                            height={24}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </Box>
                        }
                      >
                        Learn More
                      </Button>
                    </Box> */}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureCardsWithColorfullIconsAndLearnMoreLink;
