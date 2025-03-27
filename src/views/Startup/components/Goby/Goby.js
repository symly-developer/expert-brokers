/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Goby = () => {
  const theme = useTheme();
  // console.log(theme);

  return (
    <Box margin={'0 auto'} textAlign={'left'}>
      <Typography
        variant="h2"
        component={'h2'}
        // align={'left'}
        gutterBottom
        sx={{
          fontWeight: 500,
          color: '#f5d783',
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
          textTransform: 'uppercase',
        }}

        className='w3-light-grey w3-opacity-min'
        
      >
        Nishi Sharma
      </Typography>
      <Typography
        variant="h6"
        component="p"
        color="text.primary"
        // align={'left'}
        sx={{
          fontWeight: 500,
          color: '#f5d783',
          textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
          // textTransform: 'uppercase',
          width: { xs: '100%', sm: '100%', md: '70%', lg: '70%' },
        }}
        className='w3-light-grey w3-opacity-min'
      >
        The founder of Expert Brokers and a trusted name in mortgage and lending solutions. Known for her warm, client-focused approach, she brings a rare blend of deep industry knowledge and genuine care to every client interaction.
        <br /> <br />
        <b >Her Mission:</b>
        <br />
        To simplify the lending journey for individuals, families, and businesses by offering honest guidance, tailored financial solutions, and unwavering support—every step of the way.
        <br /> <br />
        <b>Her Vision:</b>
        <br />
        To empower people to achieve their financial dreams with confidence and clarity, creating a future where trust, transparency, and personal connection define the lending experience.
      </Typography>
    </Box>
  );
};

export default Goby;
