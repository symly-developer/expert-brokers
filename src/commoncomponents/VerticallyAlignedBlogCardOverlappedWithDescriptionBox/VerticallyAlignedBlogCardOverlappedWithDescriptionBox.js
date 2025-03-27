import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
// import Avatar from '@mui/material/Avatar';

import Container from 'components/Container';

const mock = [
  {
    image: 'https://assets.cashcapital.com.au/blog/cashcapital-banners-dec-commercial_banner-1-01.png',
    description:
      'Learn how to effectively manage your personal finances in the short and long term.',
    title: 'How to prepare for buying an investment property',
    author: {
      name: 'Naitik Shah',
      avatar: '',
    },
    date: '10 Sep',
  },
  {
    image: 'https://assets.cashcapital.com.au/blog/girl-enjoying-her-favorite-tv-show-at-home-jpg_s-1024x1024-w-is-k-20-c-gi0hbab8ahjn_oayrlzuqijtzax6xxjhlpmtnqnekns.jpg',
    description: 'Get to know how can you purchase a car through finance',
    title: 'The pros and cons of paying LMI',
    author: {
      name: 'Abbas K',
      avatar: '',
    },
    date: '02 Aug',
  },
  {
    image: 'https://assets.cashcapital.com.au/blog/cashcapital-banners-dec-commercial_banner-3-03.png',
    description:'Get to know how can you purchase a car through finance',
    title: 'Four different ways to finance a car purchase',
    author: {
      name: 'Priyank Dubey',
      avatar: '',
    },
    date: '05 Mar',
  },
];

const VerticallyAlignedBlogCardOverlappedWithDescriptionBox = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          flexDirection={{ xs: 'column', sm: 'row' }}
          marginBottom={4}
        >
          <Box>
            <Typography fontWeight={700} variant={'h4'} gutterBottom>
              Our Blogs
            </Typography>
            <Typography color={'text.secondary'}>
              Read and get updated knowledge from our recent blogs. We cover a wide range of topics from Finance and Loans for personal and business.
            </Typography>
          </Box>
          <Box display="flex" marginTop={{ xs: 2, md: 0 }}>
            <Box
              component={Button}
              href='https://blog.cashcapital.com.au'
              variant="contained"
              color="primary"
              size="large"
              marginLeft={2}
            >
              View all
            </Box>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                component={'a'}
                href={'https://blog.cashcapital.com.au'}
                display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  '&:hover': {
                    transform: `translateY(-${theme.spacing(1 / 2)})`,
                  },
                }}
              >
                <Box
                  component={Card}
                  width={1}
                  height={1}
                  boxShadow={0}
                  sx={{ bgcolor: 'transparent', backgroundImage: 'none' }}
                >
                  <CardMedia
                    image={item.image}
                    title={item.title}
                    sx={{
                      height: { xs: 300, md: 360 },
                      position: 'relative',
                      filter:
                        theme.palette.mode === 'dark'
                          ? 'brightness(0.7)'
                          : 'none',
                    }}
                  />
                  <Box
                    width={'90%'}
                    margin={'0 auto'}
                    display={'flex'}
                    flexDirection={'column'}
                    boxShadow={3}
                    bgcolor={'background.paper'}
                    position={'relative'}
                    zIndex={3}
                    sx={{ transform: 'translateY(-30px)' }}
                  >
                    <Box component={CardContent} position={'relative'}>
                      <Typography variant={'h6'} gutterBottom>
                        {item.title}
                      </Typography>
                      <Typography color="text.secondary">
                        {item.description}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Box padding={2} display={'flex'} flexDirection={'column'}>
                      <Box marginBottom={2}>
                        <Divider />
                      </Box>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                      >
                        <Box display={'flex'} alignItems={'center'}>
                          {/* <Avatar
                            src={item.author.avatar}
                            sx={{ marginRight: 1 }}
                          /> */}
                          <Typography color={'text.secondary'}>
                            {item.author.name}
                          </Typography>
                        </Box>
                        <Typography color={'text.secondary'}>
                          {item.date}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default VerticallyAlignedBlogCardOverlappedWithDescriptionBox;
