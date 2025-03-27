/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Mary = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              Mary Joy Banguanga 
              <Typography variant={'body1'} gutterBottom sx={{ fontWeight: 700 }}>
                Client Service Manager
              </Typography>
            </Typography>
            <Typography component={'p'}>
              As the dedicated Customer Service Manager, Mary plays a pivotal role in ensuring smooth and effective communication with clients. With a keen attention to detail and a genuine care for her work, she handles all client communications with expertise, ensuring that every message is clear, timely, and professional. Beyond written correspondence, Mary actively engages with clients, providing support and addressing their concerns both over the phone and via email. Her empathetic approach and problem-solving skills have earned her the trust and appreciation of many customers.
              <br /> <br />
              Mary’s extensive experience in customer service dates back to 2012, giving her over a decade of expertise in handling client relationships. In 2022, she expanded her skills by processing rental applications and screening potential tenants for a property management company. This experience deepened her understanding of customer needs and operational processes, further enhancing her ability to deliver exceptional service across different industries.
              <br />
              <br />
              Behind the scenes, Mary’s creativity shines through in her personal passions. She enjoys creating artwork, playing musical instruments, and exploring makeup artistry, which showcase her artistic flair. Additionally, she finds joy in cooking, blending flavors and techniques to craft delicious meals. Mary’s blend of professionalism, creativity, and dedication makes her a well-rounded and valuable member of the team
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.cashcapital.com.au/about-us/mary.jpg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Mary;
