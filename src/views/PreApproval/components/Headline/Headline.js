import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Headline = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        F.A.Q.
      </Typography>
      <Typography variant="h4" align={'center'} fontWeight={700} gutterBottom>
        6 Things you need to know about Pre-Approval
      </Typography>
      <Typography variant="h6" align={'center'} color={'textSecondary'}>
        Contact us to get a Pre-Approval for your home loan. We will help you to get the best loan for your needs.
      </Typography>
    </Box>
  );
};

export default Headline;
