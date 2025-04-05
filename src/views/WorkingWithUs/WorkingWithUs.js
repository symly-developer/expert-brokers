import React from 'react';


import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  
  Main as MainSection,
  Plans,
  
} from './components';

import {
  
  FeaturesHomeLoans,
  FeaturesOtherLoans,
  
} from '../Startup/components';
import {
  WhyUs,
  HeroWithPrimaryBackgroundAndDesktopScreenshot,
  GoogleReviews,
  CtaAlignedLeftWithTypedText,
  PromptLoanCalc,
  // Helmet,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';

const Pricing = () => {
  

  return (
    <Main>
      {/* <Helmet
        title="Smooth working with brokers and banks at Cash Capital "
        description="We work with you to get the best deal from the banks and brokers. We are the best in the business."
        link={'/working-with-us'}
        keywords={''}
        imageCard={'https://assets.cashcapital.com.au/logo192.png'}
        largeTwitterCard={true}
        addPostfixTitle={false}
        noIndex={false}

      ></Helmet> */}
      <MainSection />
      <Container>
        <Plans />
      </Container>
      <Container maxWidth={400} paddingY={'0 !important'}>
        <Divider />
      </Container>
      
      {/* The below components are refereced from the Startup Folder  */}
      {/* <PromptLoanCalc/>  */}
      <Container>
        <WhyUs />
      </Container>
      
      <HeroWithPrimaryBackgroundAndDesktopScreenshot />
      
      
      <GoogleReviews />
      
      <Divider />
      
      <FeaturesHomeLoans />
      {/* <FeaturesOtherLoans /> */}
      <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />
      <CtaAlignedLeftWithTypedText />  
      
    </Main>
  );
};

export default Pricing;
