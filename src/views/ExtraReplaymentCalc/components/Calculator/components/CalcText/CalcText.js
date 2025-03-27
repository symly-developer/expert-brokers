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
            Extra Repayment Calculator
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={theme.palette.text.secondary}>
             Making extra repayments on your home loan can save you thousands of dollars in interest and reduce the term of your loan. This calculator helps you to see how much you could save on your home loan by making extra repayments every month.
            <br /><br />
             This is one of the most effective ways to save on your home loan. It is a simple and effective way to save on your home loan by reducing the term of your loan.
            <br /><br />
            There are more ways to save on your home loan. Contact us to understand more about how you can save on your home loan.
          </Typography>
        </Box>
        <CtaAlignedLeftWithTypedText />
      </Box>
    
      
    </Box>
  );
};

export default CalcText;
