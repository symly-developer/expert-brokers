import React from 'react';
// import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import HeroWithPrimaryBackgroundAndDesktopScreenshot from './components/HeroWithPrimaryBackgroundAndDesktopScreenshot';
// import CtaSimpleCentered from './components/CtaSimpleCentered';
import Calculator from './components/Calculator';

// import { Helmet } from '../../commoncomponents';

const ExtraReplaymentCalc = () => {
//   const theme = useTheme();

  return (
    <Main>
    
      <HeroWithPrimaryBackgroundAndDesktopScreenshot />
      {/* <CtaSimpleCentered /> */}
      <Calculator />
    </Main>
  );
};

export default ExtraReplaymentCalc;
