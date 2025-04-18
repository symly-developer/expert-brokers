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
  OurTeam,
  CtaAlignedLeftWithTypedText,
  PromptLoanCalc,
  // Helmet,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';

const FirstHomeLoans = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
   
      <Box
        sx={{
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          position: 'relative',
          // marginTop: -13,
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
      </Box>
      <ListWithVerticalLine />
      
      <GoogleReviews />
      <Divider />
      {/* <OurTeam /> */}

      <Box bgcolor={'alternate.main'}>
        <FeatureCardsWithColorfullIconsAndLearnMoreLink />
      </Box>
      <PromptLoanCalc />
      <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />
      <CtaAlignedLeftWithTypedText />
    </Main>
  );
};

export default FirstHomeLoans;
