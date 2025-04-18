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
      {/* <VerticallyAlignedBlogCardOverlappedWithDescriptionBox /> */}
      <CtaAlignedLeftWithTypedText />  
      
    </Main>
  );
};

export default Pricing;
