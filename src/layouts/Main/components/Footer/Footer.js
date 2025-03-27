import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { FacebookRounded, Instagram, LinkedIn } from '@mui/icons-material';
import { Stack } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            {/* First Column */}
            <Box
              display={'flex'}
              component="a"
              href="/"
              title="Cash Capital"
              width={200}
            >
              <Stack direction="column" spacing={2}>
                <Box
                  component={'img'}
                  src={
                    mode === 'light'
                      ? 'http://assets.expertbrokers.com.au/logos/logo-long-black.svg'
                      : 'http://assets.expertbrokers.com.au/logos/logo-long-white.svg'
                  }
                  height={1}
                  width={1}
                />
                {/* <Stack direction="row" spacing={1} >
                  <a href='https://www.instagram.com/Cashcapitalloans/'
                    target='_blank' 
                  >
                    <Instagram sx={{ fontSize: 40, color: theme.palette.primary.fix }} />
                  </a>
                  <a href='https://www.facebook.com/Cashcapitalloans/'
                    target='_blank' 
                  >
                    <FacebookRounded sx={{ fontSize: 40, color: theme.palette.primary.fix }} />
                  </a>
                  <a href='https://www.linkedin.com/posts/loan-market-broker-abbas-khorakiwala-and-priyank-dubey_loanmarketabbasandpriyank-loanmarket-firsthomebuyers-activity-7293552680138940417-VF1B?utm_source=share&utm_medium=member_android&rcm=ACoAAAO2j6sB88n4sjB_gfWMV3bd5_YDcL86S00'
                    target='_blank' 
                  >
                    <LinkedIn sx={{ fontSize: 40, color: theme.palette.primary.fix   }} />
                  </a>
                  
                  
                </Stack> */}
                {/* Add here to add things to same column */}
              </Stack>
            </Box>
          </Grid>
          
          {/* Second Column */}
            
        
          <Grid item xs={12} md={6} lg={4}>
            <Stack direction="column" spacing={2}>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="none"
                  component="a"
                  href="/"
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Home
                </Link>
              </Box>
              <Box marginTop={1} marginRight={2}>
                <Link
                  underline="none"
                  component="a"
                  href="/company-terms"
                  target={'blank'}
                  color="text.primary"
                  variant={'subtitle2'}
                >
                  Policies, Terms & Conditions
                </Link>
              </Box>

            </Stack>
          </Grid>        
              
              
          <Grid item xs={12} md={6} lg={4}>
            {/* Third Column */}
            
            <Typography
              align={'left'}
              variant={'body2'}
              color="text.secondary"
              gutterBottom
            >
              <b>Address: </b> <br />
              22 Surround Circuit  <br/> Bonnie Brook VIC 3335
              <br />
              <b>Australian Credit Licence:</b> 390222
              <br />
              <b>ABN:</b> 29 635 745 881
              <br />
              <b>CRN:</b> 518695
            </Typography>
            
          </Grid>
          
        </Grid>
        <Grid item xs={12}>
          <Typography
            align={'center'}
            variant={'subtitle2'}
            color="text.secondary"
            gutterBottom
          >
            &copy; Expert brokers. 2025, Australia. All rights reserved
          </Typography>
          <Typography
            align={'center'}
            variant={'caption'}
            color="text.secondary"
            component={'p'}
          >
            The information provided on this site is on the understanding that it is for illustrative and discussion purposes only. Whilst all care and attention is taken in its preparation any party seeking to rely on its content or otherwise should make their own enquiries and research to ensure its relevance to your specific personal and business requirements and circumstances. Terms, conditions, fees and charges may apply. Normal lending criteria apply. Rates subject to change. Approved applicants only.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
