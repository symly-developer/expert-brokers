/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

import {
  CtaAlignedLeftWithTypedText,

} from '../../../../../../commoncomponents';

const CalcText = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Borrowing Power Calculator
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Your borrowing power is a critical number to know because it helps you understand how much you can spend on a property.
            <br /><br />
            Although this calculator will give you an indication as to how much you could borrow, your borrowing capacity between two banks could be thousands of dollars – the difference between purchasing your dream house or settling for your second favourite.
            <br /><br />
            We can work with you to understand which lender is best suited for your situation and get you one step closer to achieving your goals.
            <br /><br />
            Click on the Get Started button to get started online or submit your question in the form below and one of our mortgage brokers will get back to you as soon as possible..
            <br /><br />
            Contact us for a more embedding this calculator on your website or applications.
          </Typography>
        </Box>
        <CtaAlignedLeftWithTypedText />
      </Box>
    
      
    </Box>
  );
};

export default CalcText;
