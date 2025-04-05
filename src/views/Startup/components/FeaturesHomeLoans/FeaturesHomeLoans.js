/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const FeaturesHomeLoans = () => {
  const theme = useTheme();

  return (
    <Container>
      <Grid container spacing={2} >
        <Grid item container alignItems={'center'} xs={12} md={6} lg={6}>
          <Box
           sx={{
              backgroundColor: 'primary.light',
              borderRadius: 2,
              boxShadow: 4,
            
            }}
          >
            <Box marginBottom={2} padding={2} >
              <Typography color='primary.contrastText' component={'h2'} variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Home loans made easy with speed and efficient processing.
              </Typography>
              <Typography color="primary.contrastText">
                When applying for a home loan, it doesn't have to be complicated. We make it easy for you to get the financing you need for your home.
                We offer a range of home loan products to suit your needs.
                <br /><br />
              </Typography>
            </Box>
            <Grid container spacing={1} padding={2}>
              {[
                'First Home Buyers',
                'Next Home Loans',
                'Refinancing',
                'Investment Loans',
                'Pre-Approval',
                
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                    color={'primary.contrastText'}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      
                      marginRight={2}
                      marginLeft={2}
                      marginBottom={0}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={'primary.contrastText'}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill={'fix2.darkdark'}
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText  primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
         
          <Box 
            sx={{
              backgroundColor: 'primary.ultralight',
              borderRadius: 2,
              boxShadow: 4,
            }}
              
              >
            <Box marginBottom={2} padding={2} color={'fix2.darkdark'}>
              <Typography component={'h2'} variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Any other loans ? We have you covered.
              </Typography>
              <Typography >
                We provide a range of finance services for all your needs. Whether you're looking to buy a new car, renovate your home, or consolidate your debts, start a new business or expand your business we have the right loan for you.
                
              </Typography>
            </Box>
            <Grid container spacing={1} padding={2}> 
              {[
                'Personal Loans',
                'Asset Finance',
                'Commercial Loans',
                'Business Loans',
                'Equipment Finance',
                'Car Loans',
                
              ].map((item, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Box
                    component={ListItem}
                    disableGutters
                    width={'auto'}
                    padding={0}
                    color={'fix2.darkdark'}
                  >
                    <Box
                      component={ListItemAvatar}
                      minWidth={'auto !important'}
                      marginRight={2}
                      marginLeft={2}
                      marginBottom={0}
                    >
                      <Box
                        component={Avatar}
                        bgcolor={'fix2.darkdark'}
                        width={20}
                        height={20}
                      >
                        <svg
                          width={12}
                          height={12}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Box>
                    </Box>
                    <ListItemText primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FeaturesHomeLoans;
