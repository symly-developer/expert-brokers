import React from 'react';
// import { useTheme } from '@mui/material/styles';

import Main from 'layouts/Main';
import HeroWithPrimaryBackgroundAndDesktopScreenshot from './components/HeroWithPrimaryBackgroundAndDesktopScreenshot';
// import CtaSimpleCentered from './components/CtaSimpleCentered';
import Calculator from './components/Calculator';

// import { Helmet } from '../../commoncomponents';

const BorrowingPowerCalculator = () => {
//   const theme = useTheme();

  return (
    <Main>
      {/* <Helmet
        title="Borrowing Power Calculator at Cash Capital"
        description="Calculate your borrowing power with Cash Capital. We are the best in the business when it comes to borrowing power calculators."
        link={'/'}
        keywords={''}
        imageCard={'https://assets.cashcapital.com.au/logo192.png'}
        largeTwitterCard={false}
        addPostfixTitle={false}
        noIndex={false}

      ></Helmet> */}
      <HeroWithPrimaryBackgroundAndDesktopScreenshot />
      {/* <CtaSimpleCentered /> */}
      <Calculator />
    </Main>
  );
};

export default BorrowingPowerCalculator;
