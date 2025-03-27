import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import { NavItem } from './components';
import { Typography } from '@mui/material';
import ThemeModeToggler from 'components/ThemeModeToggler';


const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    
    homeloans: homeloansPages,
    otherloans: otherloansPages,
    calculators: calculatorsPages,
    about: aboutusPages,
    contacts: contactusPages,
    
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 230, md: 230, lg: 230 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'http://assets.expertbrokers.com.au/logos/logo-long-black.svg'
              : 'http://assets.expertbrokers.com.au/logos/logo-long-white.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
      
        <Box marginLeft={4}>
          <NavItem
            title={'Home Loans'}
            id={'homeloans-pages'}
            items={homeloansPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Other Loans'}
            id={'otherloans-pages'}
            items={otherloansPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Calculators'}  
            id={'calculators-pages'}
            items={calculatorsPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'About Us'}
            id={'aboutus-pages'}
            items={aboutusPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Contact Us'}
            id={'contactus-pages'}
            items={contactusPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href='/contact-sidebar-map#contact-block'
            size="large"
          >
            Contact Now
          </Button>
        </Box>
        <Box marginRight={{ xs: 1, sm: 2 }} marginLeft={{ xs: 1, sm: 2 }} >
      
          <Typography
            variant={'body'}
            sx={{ display: 'block' }}
            color= {colorInvert ? 'common.white' : 'text.primary'}
          >Dark Mode</Typography>
        </Box>
        <Box>
          <ThemeModeToggler  />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.primary.light, 0.2),
            color: mode === 'light' ? theme.palette.primary.light : theme.palette.primary.light,
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
