import React from 'react';
// import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import HeroWithPrimaryBackgroundAndDesktopScreenshot from './components/HeroWithPrimaryBackgroundAndDesktopScreenshot';
// import CtaSimpleCentered from './components/CtaSimpleCentered';
import Calculator from './components/Calculator';
import { Box } from '@mui/material';

// import { Helmet } from '../../commoncomponents';

const LoanRepaymentCalculator = () => {
//   const theme = useTheme();

  return (
    <Main>
      <Box
        sx={{
          
          paddingTop: 13,
        }}
      >
      <HeroWithPrimaryBackgroundAndDesktopScreenshot />
      </Box>
      {/* <CtaSimpleCentered /> */}
      
      <Calculator />
    </Main>
  );
};

export default LoanRepaymentCalculator;
