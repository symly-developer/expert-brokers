/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

import Container from 'components/Container';

const HeroWithPrimaryBackgroundAndDesktopScreenshot = () => {
  const theme = useTheme();
  return (
    <Box
      
      position={'relative'}
      sx={{
        backgroundColor:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.alternate.main,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item container alignItems={'center'} xs={12} md={6}>
            <Box>
              <Box marginBottom={2}>
                <Typography
                  component={'span'}
                  variant="h3"
                  sx={{ fontWeight: 700, color: 'common.white' }}
                >
                  Access to thousands of loans from over 60 lenders
                </Typography>
              </Box>
              <Typography
                variant="h6"
                component="p"
                sx={{ color: 'common.white' }}
              >
                Expert Brokers has access to thousands of loans from over 60 lenders. We take the time to understand your goals and objectives and find the best loan for you.
              </Typography>
              
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                marginX: 'auto',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  marginX: 'auto',
                }}
              >
                <Box>
                  <Box
                    position={'relative'}
                    zIndex={2}
                    maxWidth={1}
                    height={'auto'}
                    sx={{ verticalAlign: 'middle' }}
                  >
                    <LaptopSkeletonIllustration />
                  </Box>
                  <Box
                    position={'absolute'}
                    top={'8.4%'}
                    left={'12%'}
                    width={'76%'}
                    height={'83%'}
                    border={`1px solid ${theme.palette.alternate.dark}`}
                    zIndex={3}
                  >
                    <Box
                      component={'img'}
                      src="https://assets.cashcapital.com.au/Lender-AU-GIF_969x485px_nobackground-2.gif"
                      alt="Image Description"
                      width={1}
                      height={1}
                      sx={{
                        objectFit: 'cover',
                        filter:
                          theme.palette.mode === 'dark'
                            ? 'brightness(0.7)'
                            : 'none',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1921 273"
        sx={{
          position: 'absolute',
          width: '100%',
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 1,
          height: '35%',
        }}
      >
        <polygon
          fill={theme.palette.background.paper}
          points="0,273 1921,273 1921,0 "
        />
      </Box>
    </Box>
  );
};

export default HeroWithPrimaryBackgroundAndDesktopScreenshot;
