import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

const CtaSection = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'text.secondary'}
      >
        We are your local mortgage brokers
      </Typography>
      <Box marginBottom={2}>
        <Typography
          variant="h2"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          Mortgage Broker in {' '}
          <Typography
            color={'primary'}
            component={'span'}
            variant={'inherit'}
            sx={{
              background: `linear-gradient(180deg, transparent 82%, ${alpha(
                theme.palette.secondary.main,
                0.3,
              )} 0%)`,
            }}
          >
            Bonnie Brook
          </Typography>
        </Typography>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6" component="p" color="text.secondary">
        At Expert Brokers, we’ve been proudly supporting families and individuals across Bonnie Brook and Melbourne’s western corridor to achieve their property goals. Whether it’s securing your first home, refinancing, or exploring commercial finance options, our experienced team is here to guide you.
            <br />
        With nearly two decades of industry know-how and a strong reputation for outstanding customer service, we focus on making the lending journey as smooth and stress-free as possible. From the first conversation to settlement, transparency and simplicity are at the heart of what we do.
            <br />
        We work with Australia’s leading lenders to compare competitive loan options and craft personalised solutions that align with your lifestyle and financial future.
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
      >
        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth={isMd ? false : true}
          href='/contact-sidebar-map'
        >
          Get in touch today
        </Button>
        {/* <Box
          component={Button}
          variant="outlined"
          color="primary"
          size="large"
          marginTop={{ xs: 2, sm: 0 }}
          marginLeft={{ sm: 2 }}
          fullWidth={isMd ? false : true}
        >
          Browse spaces
        </Box> */}
      </Box>
    </Box>
  );
};

export default CtaSection;
