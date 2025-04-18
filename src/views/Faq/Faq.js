import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Content, Footer, Headline } from './components';

const Faq = () => {
  const theme = useTheme();
  return (
    <Main colorInvert={true}>
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(340deg, ${theme.palette.primary.main} 40%, ${theme.palette.primary.light} 80%)`,
            // marginTop: -13,
            paddingTop: 13,
            
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container >
          <Content />
        </Container>
        <Box bgcolor={theme.palette.alternate.main}>
          <Container>
            <Footer />
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default Faq;
