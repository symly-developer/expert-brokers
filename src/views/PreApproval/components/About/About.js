/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LaptopSkeletonIllustration from 'svg/illustrations/LaptopSkeleton';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const LeftSide = () => (
    <Box>
      <Box marginBottom={2}>
        <Typography color={'primary.contrastText'}  component={'span'} variant="h3" sx={{ fontWeight: 700 }}>
          {'PLanning to buy?'}
          <Typography
            component={'span'}
            variant={'inherit'}
            color={'secondary'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            Need a Pre-Approval?
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" component="p" color={'primary.contrastText'} >
      A pre-approval is a conditional approval that is given to you by a lender. It is based on the information you provide to the lender. It can be really useful when you are looking to buy a property and want to be sure that you can borrow the amount you need.
      </Typography>
      
    </Box>
  );

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <LeftSide />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            position: 'relative',
            marginX: 'auto',
            perspective: 1500,
            transformStyle: 'preserve-3d',
            perspectiveOrigin: 0,
          }}
        >
          <Box
            sx={{
              position: 'relative',
              marginX: 'auto',
              transform: 'rotateY(-35deg) rotateX(15deg) translateZ(0)',
              maxWidth: '96%',
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
                  loading="lazy"
                  src="https://assets.expertbrokers.com.au/preapproval.webp"
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
  );
};

export default Hero;
