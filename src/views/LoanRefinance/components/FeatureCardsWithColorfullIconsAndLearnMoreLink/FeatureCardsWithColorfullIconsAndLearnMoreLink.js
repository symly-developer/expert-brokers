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
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HiveIcon from '@mui/icons-material/Hive';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const mock = [
  {
    color: colors.lightBlue[500],
    title: 'Lower your interest rate',
    subtitle: 'Interest rates can fluctuate over time. Is your current rate still competitive? If you have a variable loan or a fixed-rate loan that is nearing expiration, you might have the opportunity to negotiate a better deal or switch to a lender offering a lower rate.',
    icon: (
      <LocalFloristIcon />
    ),
  },
  {
    color: colors.purple[500],
    title: 'More features, more options',
    subtitle: 'Home loans aren’t all the same—each comes with different features and benefits. Moving to a loan that allows extra repayments, offers an offset account, or has redraw options could help you save in the long run. On the other hand, if you’re not using these features, simplifying your loan to a basic option could reduce your fees.',
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    color: colors.yellow[500],
    title: 'Combine your debts',
    subtitle: 'If you have multiple debts—like personal loans, car loans, or credit cards—you could consolidate them into your home loan. This approach simplifies your payments into one and may lower your overall interest costs. Evaluating factors such as fees and repayments helps determine if this option fits your financial situation.',
    icon: (
      <HiveIcon />
    ),
  },
  {
    color: colors.indigo[500],
    title: 'Unlock funds for your projects',
    subtitle: 'If you’re planning a home renovation, car upgrade, or any other project, refinancing could give you access to additional funds. By using the equity you’ve built in your property, you might be able to secure financing to support your plans.',
    icon: (
      <LockOpenIcon />
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
            What are the advantages is of refinancing your loan?
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
