import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import { NavItem, ServicesNavItems } from './components';
import { IconButton, Typography } from '@mui/material';
import ThemeModeToggler from 'components/ThemeModeToggler';
import { LocalPhone } from '@mui/icons-material';


const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    
    services: servicePages,
    // homeloans: homeloansPages,
    // otherloans: otherloansPages,
    calculators: calculatorsPages,
    about: aboutusPages,
    contacts: contactusPages,
    
  } = pages;
  const linkColor = colorInvert ? 'common.white' : 'text.primary';
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
        width={{ xs: 250, md: 280, lg: 330 }}
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
      
        
        <NavItem
            title={'Who We Are'}
            id={'aboutus-pages'}
            items={aboutusPages}
            colorInvert={colorInvert}
          />
          
       
        <Box marginLeft={4}>
        <NavItem
            title={'Services'}
            id={'homeloans-pages'}
            items={servicePages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <Box
            display={'flex'}
            alignItems={'center'}
            component={'a'}
            
            href="/faq"
            sx={{ cursor: 'pointer', textDecoration: 'none' }}
            // onClick={handleClick}
            // onMouseOver={handleClick}
            // onMouseLeave={handleCloseHover}
          >
            <Typography color={linkColor}>
              FAQ
            </Typography>
            
          </Box>
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Calculators'}  
            id={'calculators-pages'}
            items={calculatorsPages}
            colorInvert={colorInvert}
          />
        </Box>
       
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Contact Us'}
            id={'contactus-pages'}
            items={contactusPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box marginLeft={4}>
        <Box
            display={'flex'}
            alignItems={'center'}
            component={'a'}
            
            href="/contact-sidebar-map"
            sx={{ cursor: 'pointer', textDecoration: 'none' }}
            // onClick={handleClick}
            // onMouseOver={handleClick}
            // onMouseLeave={handleCloseHover}
          >
            <Typography color={linkColor}>
              Contact
            </Typography>
            
          </Box>
        </Box>
        <Box marginLeft={4}>
        <Button
          variant="contained"
          startIcon={<LocalPhone />}
          color={colorInvert ? 'secondary' : 'primary'}
          component="a"
          href="tel:0401809852" // 👈 this triggers a phone call
          size="large"
          sx={{
            color: colorInvert ? 'common.black' : 'common.white',
            fontWeight: 700,
          }}
        >
          04 0180 9852
        </Button>
        </Box>
        <Box marginRight={{ xs: 1, sm: 2 }} marginLeft={{ xs: 1, sm: 2 }} >
          <IconButton 
            component='a'
            target='_blank'
            href='mailto:nishisharma@expertbrokers.com.au'
            aria-label="Email"

          >
            <EmailIcon sx={{fontSize:40,color: colorInvert ? 'secondary.main' : 'primary.main',}}/>
          </IconButton>
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
