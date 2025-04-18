import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import Container from 'components/Container';



const Main = () => {
  const theme = useTheme();


  

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: theme.palette.alternate.main,
          backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
          // marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container position={'relative'} zIndex={3}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant="h3"
                gutterBottom
                align={'center'}
                sx={{
                  fontWeight: 900,
                }}
              >
                Why should you use a mortgage broker?
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'left'}
              >
                A mortgage broker simplifies the loan process by offering access to multiple lenders, negotiating better rates, and providing expert, personalized advice. They save you time, help avoid pitfalls, and support you throughout the loan journey and beyond.
               
              </Typography>
              <br />
              <Typography
                variant="h5"
                component="p"
                color="text.primary"
                align={'left'}
                sx={{
                  fontWeight: 900,
                }}
              >
                Advantages of using a mortgage broker:
               
              </Typography>
              <Typography
                variant="h6"
                component="p"
                color="text.primary"
                align={'left'}
                textAlign={'justify'}
              >
                <ul >
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Access to multiple lenders</strong> – Brokers compare loan options from various lenders, giving you a better chance at finding competitive rates and terms.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Expert advice</strong> – They simplify the complex mortgage process, guiding you on the best loan structures and financial strategies to match your short- and long-term goals.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Time-saving</strong> – Brokers handle the research, paperwork, and negotiations, saving you the hassle of applying to multiple lenders yourself.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Tailored solutions</strong> – A broker assesses your financial situation and recommends loans specifically suited to your needs, whether you're a first-time homebuyer or a business owner.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Support throughout the process</strong> – From pre-approval to settlement, brokers provide continuous updates and ensure everything runs smoothly.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Better negotiation power</strong> – Brokers have established relationships with lenders and can negotiate better rates and terms on your behalf.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Specialized loan access</strong> – They can connect you with niche products such as loans for self-employed individuals, SMSFs, or unique investment properties that may not be available directly from banks.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Avoiding common pitfalls</strong> – With their expertise, brokers help you avoid costly mistakes, such as hidden fees, unfavorable loan terms, or unsuitable loan structures.</li>
                  <li style={{ marginBottom: '10px' }}><strong style={{fontSize:20}}>Pre-approval readiness</strong> – Brokers ensure all your documentation is in order, making the pre-approval process faster and smoother.</li>
                  <li><strong>Ongoing relationship and support</strong> – Many brokers provide long-term support, advising on refinancing, debt restructuring, or new investments as your financial situation evolves.</li>
                </ul>
              </Typography>
            </Box>
            
          </Box>
        </Container>
      </Box>
      
    </Box>
  );
};

export default Main;
