import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import Container from 'components/Container';
import { Button } from '@mui/material';
import { Google } from '@mui/icons-material';

const mock = [
  {
    feedback:
      'Nishi has always been great at what she does! She has saved us 1000s of dollars in the last few years. She is very responsive and great to work with! Highly recommend her.',
    name: 'Shifa Akbar',
    title: '2 months ago',
    avatar: 'https://assets.cashcapital.com.au/Google-Reviews-icon.png',
  },
  {
    feedback:
      'Nishi made our refinancing a very easy, stress free process. Communication was 100% always there to answer any questions and contacted us straight away with all updates. It was a pleasure working with Nishi with our finances, definitely were in good hands ! 👏❤️',
    name: 'Natalie Jones',
    title: '6 months ago',
    avatar: 'https://assets.cashcapital.com.au/Google-Reviews-icon.png',
  },
  {
    feedback:
      'Nishi is an awesome broker , her attention to details , honest and quick feedback is impressive . She works hard for her clients and always looks for the best deal . So far she helped me and many of my family and friends with home loans and recently my car loan 😊 they all speak highly of her too . she is our one and only , thank you Nishi 👌',
    name: 'Nivin Salsa',
    title: '4 months ago',
    avatar: 'https://assets.cashcapital.com.au/Google-Reviews-icon.png',
  },
  {
    feedback:
      'Nishi has been a massive help in not only making the process of buying my first house as clear and convenient as possible, but also served as a great and accessible contact to assist in explaining all the stages and terminology that I was not familiar with.',
    name: 'Benjamin Hearn',
    title: '6 months ago',
    avatar: 'https://assets.cashcapital.com.au/Google-Reviews-icon.png',
  },
  {
    feedback:
      'Nishi was an absolute joy to work with from start to finish. Her absolute professionalism, friendlines, diligence and unwavering support made the process of buying our home so much easier and straightforward - it really took so much of the stress away from the process for us. She is always available if you have any questions, her responsiveness is impressive and her expertise is invaluable. Thank you so much, Nishi, for all of your support - we couldnt have done it without you!',
    name: 'Sam Stephens',
    title: '7 months ago',
    avatar: 'https://assets.cashcapital.com.au/Google-Reviews-icon.png',
  },
  {
    feedback:
      'Nishi is a great reassuring help when entering into the industry for the first time. Nishi was extremely passionate, educational and prompt in all of her documentation and advice that she provided. She went above and beyond to ensure I felt comfortable and was making the best decision to benefit my own personal circumstances. Nishi was never judgemental and encouraged questioning to ensure clarity and understanding was reciprocated. Thank you Nishi for your assistance. I am positive to be dealing with Nishi again in the near future!!',
    name: 'Elisha Cassar',
    title: '4 months ago',
    avatar: 'https://assets.cashcapital.com.au/Google-Reviews-icon.png',
  },
];

const GoogleReviews = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 700,
              marginTop: theme.spacing(1),
            }}
          >
            Rated 5 out of 5 stars by our customers!
          </Typography>
          <Typography variant="h6" color={'text.secondary'}>
            Our customers love the experience with us.
            <br />
            Here’s what they have to say.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://search.google.com/local/reviews?placeid=ChIJLWpGmiL11moRhHOK3W80SSI" 
            size="large"
            align={'center'}
            // alignItems={'center'}
          >
            <Typography variant="h6" color={'text.secondary.white'}>
              {'Click to review us on  :'}
            </Typography>
            <Google /> 
            <Typography variant="h6" color={'text.secondary.white'}>
              {'oogle'}
            </Typography>
          </Button>
          
          
        </Box>
        <Grid container spacing={4}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={4} key={i}>
              <Box
                width={1}
                height={1}
                component={Card}
                display={'flex'}
                flexDirection={'column'}
                boxShadow={i === 1 ? 3 : 3}
                bgcolor={i === 1 ? 'none' : 'none'}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box marginBottom={1}>
                    <Box display={'flex'} justifyContent={'flex-start'}>
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Box key={item} color={theme.palette.secondary.main}>
                          
                          <svg
                            width={18}
                            height={18}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />

                          </svg>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Typography
                    color={
                      i === 1 ? 'text.secondary' : 'text.secondary'
                    }
                  >
                    {item.feedback}
                  </Typography>
                </CardContent>
                <Box flexGrow={1} />
                <CardActions sx={{ paddingBottom: 2 }}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar>
                      <a href="https://search.google.com/local/reviews?placeid=ChIJLWpGmiL11moRhHOK3W80SSI" target="_blank" rel="noopener noreferrer">
                        <Avatar src={item.avatar} />
                      </a>
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                      primaryTypographyProps={{
                        color:
                          i === 1 ? 'text.primar' : 'text.primary',
                      }}
                      secondaryTypographyProps={{
                        color:
                          i === 1
                            ? 'text.secondary'
                            : 'text.secondary',
                      }}
                    />
                  </ListItem>
                </CardActions>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default GoogleReviews;
