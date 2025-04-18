import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  About,
 
  SimpleCentered,
} from './components';
import {
  OurTeam,
  GoogleReviews,
  CtaAlignedLeftWithTypedText,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
  // Helmet,
} from '../../commoncomponents';


const SMSFLoan = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      {/* <Helmet
        title="Brkers specialising in SMSF loans"
        description="We are the best in the business when it comes to SMSF loans. We have the best brokers in the business."
        link={'/smsf-loan'}
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

      
      
        
      <SimpleCentered />
        
      
      {/* <Box bgcolor={'alternate.main'}>
        <FeatureCardsWithColorfullIconsAndLearnMoreLink />
      </Box> */}
      {/* <Container>
        <FAQContent />
      </Container> */}
      {/* <ListWithVerticalLine /> */}
      {/* <PromptLoanCalc /> */}
      
      
      <GoogleReviews />
      <Divider />
     
      {/* <OurTeam /> */}

      {/* <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />  */}
      
      <CtaAlignedLeftWithTypedText />
    </Main>
  );
};

export default SMSFLoan;
