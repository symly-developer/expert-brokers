import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from 'layouts/Main';
import Container from 'components/Container';
import {
  Hero,
  Story,
  WhoWeAre,
  Application,
  HeroWithPrimaryBackgroundAndDesktopScreenshot,
  Nishi,

} from './components';

import { CtaAlignedLeftWithTypedText, OurTeam, 
  // Helmet,
  VerticallyAlignedBlogCardOverlappedWithDescriptionBox,
} from '../../commoncomponents';

const About = () => {
  return (
    <Main colorInvert={true }>
      {/* <Helmet
        title="About Us at Cash Capital"
        description="Learn more about Cash Capital. We are the best in the business when it comes to loans."
        link={'/about'}
        keywords={''}
        imageCard={'https://assets.cashcapital.com.au/logo192.png'}
        largeTwitterCard={false}
        addPostfixTitle={false}
        noIndex={false}

      ></Helmet> */}
      <Hero />
      <Container>
        <Story />
      </Container>
      <Container paddingTop={'0 !important'}>
        <WhoWeAre />
      </Container>
      <Container maxWidth={800} paddingY={'0 !important'}>
        <Divider />
      </Container>
      {/* <Container>
        <OurTeam />
      </Container> */}
      <Container>
        <Nishi />
      </Container>
      <Container maxWidth={800} paddingTop={2}>
        <Application name='Nishi' />
      </Container>
      {/* <Container>
        <Priyank />
      </Container>
      <Container maxWidth={800} paddingTop={2}>
        <Application name='Priyank' />
      </Container>
      <Container>
        <Naitik />
      </Container> */}
      {/* <Container maxWidth={800} paddingTop={2}>
        <Application name='Naitik' />
      </Container> */}
      {/* <Container>
        <Dwight />
      </Container>
      <Container>
        <Mary />
      </Container>
      <Container maxWidth={800} paddingTop={2}>
        <Application name='Naitik' />
      </Container> */}
      <Box bgcolor={'alternate.main'}>
        <Container>
          <HeroWithPrimaryBackgroundAndDesktopScreenshot />
        </Container>
      </Box>
      <Container>
        <VerticallyAlignedBlogCardOverlappedWithDescriptionBox />
      </Container>
      
      {/* <Container maxWidth={800} paddingTop={2}>
        <Application name='Us' />
      </Container> */}
      <CtaAlignedLeftWithTypedText />
    </Main>
  );
};

export default About;
