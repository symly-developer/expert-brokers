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
              backgroundColor: 'primary.dark',
              borderRadius: 2,
              boxShadow: 4,
            
            }}
          >
            <Box marginBottom={2} padding={2} >
              <Typography color='secondary.main' component={'h2'} variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Home loans made easy with speed and efficient processing.
              </Typography>
              <Typography color="secondary.main">
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
                    color={theme.palette.secondary.main}
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
                        bgcolor={theme.palette.secondary.main}
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
                    <ListItemText  primary={item} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          {/* <Box
            height={1}
            width={1}
            display={'flex'}
            flexDirection={'column'}
            sx={{
              backgroundColor: 'transparent',
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cdefs%3E%3ClinearGradient id=\'a\' x1=\'0\' x2=\'0\' y1=\'1\' y2=\'0\' gradientTransform=\'rotate(0,0.5,0.5)\'%3E%3Cstop offset=\'0\' stop-color=\'%230FF\'/%3E%3Cstop offset=\'1\' stop-color=\'%23CF6\'/%3E%3C/linearGradient%3E%3ClinearGradient id=\'b\' x1=\'0\' x2=\'0\' y1=\'0\' y2=\'1\' gradientTransform=\'rotate(0,0.5,0.5)\'%3E%3Cstop offset=\'0\' stop-color=\'%23F00\'/%3E%3Cstop offset=\'1\' stop-color=\'%23FC0\'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill=\'%23FFF\' fill-opacity=\'0\' stroke-miterlimit=\'10\'%3E%3Cg stroke=\'url(%23a)\' stroke-width=\'21.12\'%3E%3Cpath d=\'M1409 581 1450.35 511 1490 581z\'/%3E%3Ccircle stroke-width=\'7.040000000000001\' transform=\'\' cx=\'500\' cy=\'100\' r=\'40\'/%3E%3Cpath transform=\'\' d=\'M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z\'/%3E%3C/g%3E%3Cg stroke=\'url(%23b)\' stroke-width=\'6.4\'%3E%3Cpath transform=\'\' d=\'M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z\'/%3E%3Crect stroke-width=\'14.080000000000002\' transform=\'\' x=\'1039\' y=\'709\' width=\'100\' height=\'100\'/%3E%3Cpath transform=\'\' d=\'M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
              backgroundSize: 'contain',
            }}
          >
            <Box
              component={'img'}
              src={'https://assets.cashcapital.com.au/home-loans/Homeloan-BG-1.jpg'}
              alt="..."
              width={160}
              height={160}
              marginLeft={'calc(60% - 160px)'}
              zIndex={3}
              borderRadius={'100%'}
              boxShadow={4}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box
              component={'img'}
              width={200}
              height={200}
              src={'https://assets.cashcapital.com.au/home-loans/Homeloan-BG-2.jpg'}
              alt="..."
              marginTop={'-8%'}
              zIndex={2}
              borderRadius={'100%'}
              boxShadow={4}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            <Box
              component={'img'}
              width={300}
              height={300}
              src={'https://assets.cashcapital.com.au/home-loans/Homeloan-BG-3.jpg'}
              alt="..."
              marginTop={'-20%'}
              marginLeft={'calc(100% - 300px)'}
              zIndex={1}
              borderRadius={'100%'}
              boxShadow={4}
              sx={{
                objectFit: 'cover',
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.5)' : 'none',
              }}
            />
            
          </Box> */}
          <Box 
            sx={{
              backgroundColor: 'secondary.dark',
              borderRadius: 2,
              boxShadow: 4,
              
            }}
              
              >
            <Box marginBottom={2} padding={2} >
              <Typography component={'h2'} variant={'h4'} sx={{ fontWeight: 700 }} gutterBottom>
                Any other loans ? We have you covered.
              </Typography>
              <Typography color="text.secondary">
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
                        bgcolor={theme.palette.primary.main}
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
