/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Application = (props) => {
  const [name, setName] = useState(props.name);
  useEffect(() => {
    setName(props.name);
  }, [props.name]);
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={{ xs: 'flex-start', sm: 'center' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Box>
          <Typography fontWeight={700} variant={'h5'} gutterBottom>
            Discuss your loan options with {name}.
          </Typography>
          <Typography>Click "Contact Us" and we'll get in touch with you.</Typography>
        </Box>
        <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
          <Button variant="contained" color="primary" size="large" href="/contact-sidebar-map#contact-block">
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Application;
