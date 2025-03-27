import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
  Advantages,
  ListWithVerticalLine,  
  FeatureCardsWithColorfullIconsAndLearnMoreLink,
  
} from './components';

import {
  GoogleReviews,
  PromptLoanCalc,
  OurTeam,
  CtaAlignedLeftWithTypedText,
  // Helmet,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';



const LoanRefinance = () => {
  const theme = useTheme();
  return (
    <Main>
      {/* <Helmet
        title="Loan Refinance at Cash Capital"
        description="Refinance your loan with Cash Capital. We are the best in the business when it comes to loan refinancing."
        link={'/loan-refinance'}
        keywords={''}
        imageCard={'https://assets.cashcapital.com.au/logo192.png'}
        largeTwitterCard={false}
        addPostfixTitle={false}
        noIndex={false}

      ></Helmet> */}
      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
          position: 'relative',
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <About />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Advantages />
        </Container>
        <Box bgcolor={'alternate.main'}>
          <FeatureCardsWithColorfullIconsAndLearnMoreLink />
        </Box>
      </Box>
      <ListWithVerticalLine />
      
      <GoogleReviews />
      <Divider />
      <OurTeam />

      
      <PromptLoanCalc />
      <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />
      <CtaAlignedLeftWithTypedText />
    </Main>
  );
};

export default LoanRefinance;
