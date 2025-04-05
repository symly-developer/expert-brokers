import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const CtaAlignedLeftWithTypedText = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container>
      <Box>
        <Typography
          variant="h3"
          color="text.primary"
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Your Goals {' | '}
          <Typography color={theme.palette.primary.light} component={'span'} variant={'inherit'}>
            Our Expertise
          </Typography>
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
        >
          Contact us today to help you secure financing for your personal or business needs.
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretched', sm: 'flex-start' }}
          marginTop={4}
        >
          <Button
            component={'a'}
            variant="outlined"
            color={theme.palette.primary.dark}
            size="large"
            fullWidth={isMd ? false : true}
            href={'/contact-sidebar-map#contact-block'}
          >
            Contact Us
          </Button>
          <Box
            marginTop={{ xs: 2, sm: 0 }}
            marginLeft={{ sm: 2 }}
            width={{ xs: '100%', md: 'auto' }}
          >
            <Button
              component={'a'}
              href={'/borrowing-power-calculator'}
              target={'blank'}
              variant="outlined"
              color={theme.palette.primary.dark}
              size="large"
              fullWidth={isMd ? false : true}
            >
              Loan Calculator
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CtaAlignedLeftWithTypedText;
