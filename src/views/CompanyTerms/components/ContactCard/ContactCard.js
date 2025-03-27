import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const ContactCard = () => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          How can you contact us about this notice?
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          If you have any questions or concerns about the policy, terms and conditions please
          contact us.
        </Typography>
        <Typography variant={'subtitle2'}>
          abbas.k@cashcapital.com.au
          <br />
          <b>Address:</b> <br />
          9/758 Blackburn Road, 
          <br />
          Clayton VIC 3168
          <br />
          Australia
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
