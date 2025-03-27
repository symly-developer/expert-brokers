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
import ApiIcon from '@mui/icons-material/Api';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Secured Loans',
    subtitle: 'A secured loan requires collateral, such as your car or property, as a form of security. This protects the lender in case you are unable to repay. Since secured loans involve less risk for lenders, they often come with lower interest rates compared to unsecured loans.',
    icon: (
      <LockResetIcon/>
    ),
  },
  {
    color: colors.purple[500],
    title: 'Unsecured Loans',
    subtitle: 'Unsecured loans do not require any collateral. Instead, lenders base their decision on your creditworthiness to determine approval. These loans typically have higher interest rates and lower borrowing limits since they carry greater risk for the lender.',
    icon: (
      <ApiIcon/>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Fixed Rate Loan',
    subtitle: 'With a fixed-rate loan, both your interest rate and repayments remain constant for the entire duration of the loan term. This provides predictability in your budgeting, as your payment amounts will not change.',
    icon: (
      <GpsFixedIcon/>
    ),
  },
  {
    color: colors.indigo[500],
    title: 'Variable Rate Loan',
    subtitle: 'A variable-rate loan has an interest rate that can fluctuate over time. This can provide flexibility but also carries the risk of rate increases. These loans often come with additional features, such as the ability to make extra repayments, access redraw facilities, and benefit from offset accounts.',
    icon: (
      <CurrencyExchangeIcon/>
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
            What are the different types of personal loans?
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
