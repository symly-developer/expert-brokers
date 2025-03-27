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
            Stamp Duty Calculator
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={theme.palette.text.secondary}>
          The stamp duty you owe depends on several factors, including the property’s value, its location, whether it’s your first home, and whether you’ll be living in it. Understanding your stamp duty costs is essential for accurate budgeting. This calculator provides an estimate of the stamp duty you’ll likely pay across all Australian states and territories, including NSW, QLD, VIC, TAS, SA, WA, ACT, and NT.
            <br /><br />
          Eligible first-home buyers may get a concession on stamp duty. Speak to usr to find out if you’re eligible
        
          </Typography>
        </Box>
        <CtaAlignedLeftWithTypedText />
      </Box>
    
      
    </Box>
  );
};

export default CalcText;
