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
            Mortgage Comparison Calculator
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            Every loan is unique, so finding the right one requires careful comparison of your options. It’s not just the interest rate that affects your total cost—fees, features, and repayment choices also play a big role. This calculator helps you compare two loans to see the cost difference and determine which one is more budget-friendly.
            <br /><br />
            When evaluating loans, consider more than just the numbers. Factors like flexibility, offset accounts, and redraw facilities can impact your financial situation. A mortgage broker can guide you through these details to help you choose the best loan for your needs
            <br /><br />
            Use this calculator to compare two loans side by side and see which one is more affordable for you.
            <br /><br />
            Contact us to understand more about many other factors that can affect your home loan and how you can save on your home loan.
          </Typography>
        </Box>
        <CtaAlignedLeftWithTypedText />
      </Box>
    
      
    </Box>
  );
};

export default CalcText;
