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
            Mortgage Offset Calculator
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={theme.palette.text.secondary}>
            An offset account is a transaction account that is linked to your home loan. The balance in this account is ‘offset’ daily against your outstanding loan balance, reducing the amount of interest you pay. Offset accounts can be a great way to save money on your home loan and reduce the term of your loan.
            <br /><br />
             Offset account is provided by most lenders in Australia without any further charges. Some lenders provode more than one accounts to act as offset accounts. This helps you to organise your finances better and save more on your home loan at the same time.
            <br /><br />
            Offset account is a recommended method to save on your home loan. It is a simple and effective way to save on your home loan by reducing the term of your loan.
            <br /><br />
            Use this calculator to see how much you could save on your home loan by using an offset account.
            <br /><br />
            Contact us to understand more about offset accounts and how you can save on your home loan.
          </Typography>
        </Box>
        <CtaAlignedLeftWithTypedText />
      </Box>
    
      
    </Box>
  );
};

export default CalcText;
