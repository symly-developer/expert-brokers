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
    image: 'https://assets.expertbrokers.com.au/blog-1.webp',
    description:
      'When it comes to buying a home, getting your home loan approved quickly can make all the difference. In today’s competitive property market, delays in finance can mean missing out on your dream home. Whether you are a first-home buyer, refinancing, or looking to invest, having your application in top shape can speed up the process and improve your chances of success. Here are our top tips to help you get your home loan approved faster and with greater confidence.',
    title: 'Top 10 Tips to Get Your Home Loan Approved Faster',
    author: {
      name: 'Nishi Sharma',
      avatar: '',
    },
    date: '10 Sep',
  },
  {
    image: 'https://assets.expertbrokers.com.au/blog-2.webp',
    description: 'When considering a home loan in Australia, one of the most critical decisions you’ll face is choosing between a fixed or variable interest rate. This choice can significantly impact your financial stability and flexibility throughout the life of your loan. Understanding the nuances of both options is essential to align your mortgage with your financial goals and risk tolerance.',
    title: 'Fixed vs Variable Home Loans: What’s Right for You?',
    author: {
      name: 'Nishi Sharma',
      avatar: '',
    },
    date: '02 Aug',
  },
  {
    image: 'https://assets.expertbrokers.com.au/blog-3.webp',
    description:'As of April 2025, the Reserve Bank of Australia (RBA) has held the cash rate steady at 4.35%, marking nearly a year since the last rate increase. With interest rates at their highest levels in over a decade, homeowners, investors, and first-home buyers are all asking the same question: what does this mean for me?',
    title: 'What the RBA Interest Rate Decision Means for Homeowners and Buyers in 2025',
    author: {
      name: 'Nishi Sharma',
      avatar: '',
    },
    date: '05 Mar',
  },
];

const VerticallyAlignedBlogCardOverlappedWithDescriptionBox = () => {
  const theme = useTheme();
  return (
    <Container >
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
              href='https://blog.expertbrokers.com.au'
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
                href={'https://blog.expertbrokers.com.au'}
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
                      width: { xs: '100%', md: '100%' }, // 👈 Change width here
                      height: { xs: 200, md: 260 },
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
