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
// import Inventory2Icon from '@mui/icons-material/Inventory2';


const mock = [
  {
    color: colors.lightBlue[500],
    title: 'What?',
    subtitle: 'You choose to pay a larger sum of the loan value at the end of the loan term. The sum you pay is usually based on a fixed percentage of the total loan value.',
    icon: (
      <CurrencyExchangeIcon/>
    ),
  },
  {
    color: colors.purple[500],
    title: 'Why?',
    subtitle: 'Reduce your repayments when you first start paying off the loan.Consider how this will affect the amount of interest you pay over the life of the loan and the total amount that is left to pay at the end of your monthly repayment term. The remaining sum will need to be paid in full in one lump sum.  ',
    icon: (
      <LockResetIcon/>
    ),
  },
  {
    color: colors.blue[500],
    title: 'How do I know if this is right for me?',
    subtitle: 'We can help you understand whether this approach suits your needs and run through the considerations and benefits in more detail. Get in touch.',
    icon: (
      <CallSplitIcon/>
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
            variant='h4'
          >
            Other things to consider : Baloon Payments
          </Typography>
        
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
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
