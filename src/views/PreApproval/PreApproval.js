import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';

import {
  About,
  Headline,
  Content,
} from './components';

import {
  OurTeam,
  CtaAlignedLeftWithTypedText,
  GoogleReviews,
  PromptLoanCalc,
  // Helmet,
  
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';


const PreApproval = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      {/* <Helmet
        title="Pre-Approval for Home Loans | Cash Capital"
        description="Get pre-approval for your home loan with Cash Capital. We are the best in the business when it comes to home loans."
        link={'/pre-approval'}
        keywords={''}
        imageCard={'https://assets.cashcapital.com.au/logo192.png'}
        largeTwitterCard={false}
        addPostfixTitle={false}
        noIndex={false}

      ></Helmet> */}
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
      
      <Container>
        <Headline />
        <Content />
      </Container>
        
      {/* <SimpleCentered /> */}
      <GoogleReviews />
      <Divider />
      {/* <OurTeam /> */}
      <PromptLoanCalc />
      <CtaAlignedLeftWithTypedText />

      {/* <VerticallyAlignedBlogCardOverlappedWithDescriptionBox /> */}
      
    </Main>
  );
};

export default PreApproval;
