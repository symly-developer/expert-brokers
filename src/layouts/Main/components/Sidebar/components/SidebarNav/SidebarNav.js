import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  const {
    homeloans: homeloanPages,
    otherloans: otherloanPages,
    calculators: calculatorPages,
    about: aboutusPages,
    contacts: contactusPages,



  } = pages;

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component="a"
          href="/"
          title="theFront"
          width={{ xs: 220, md: 220 }}
        >
          <Box
            component={'img'}
            src={
              mode === 'light'
                ? 'http://assets.expertbrokers.com.au/logos/logo-long-black.svg'
                : 'http://assets.expertbrokers.com.au/logos/logo-long-white.svg'
            }
            height={1}
            width={1}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        
        <Box>
          <NavItem title={'Home Loans'} items={homeloanPages} />
        </Box>
        <Box>
          <NavItem title={'Other Loans'} items={otherloanPages} />
        </Box>
        <Box>
          <NavItem title={'Calculators'} items={calculatorPages} />
        </Box>
        <Box>
          <NavItem title={'About Us'} items={aboutusPages} />
        </Box>
        <Box>
          <NavItem title={'Contact Us'} items={contactusPages} />
        </Box>  

        <Box marginTop={2}>
          <Button
            size={'large'}
            variant="contained"
            fullWidth
            component="a"
            href='/contact-sidebar-map#contact-block'
            target={'blank'}
          >
            Contact Us
          </Button>
        </Box>
        {/* <Box marginTop={1}>
          <Button
            size={'large'}
            variant="contained"
            color="primary"
            fullWidth
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
          >
            Purchase now
          </Button>
        </Box> */}
      </Box>
    </Box>
  );
};

SidebarNav.propTypes = {
  pages: PropTypes.object.isRequired,
};

export default SidebarNav;
