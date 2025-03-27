import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
// import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';



import Container from 'components/Container';
import { Email, Phone} from '@mui/icons-material';

const mock = [
  {
    name: 'Abbas Khorakiwala',
    phone: ' 04 3513 4121',
    avatar: 'https://assets.cashcapital.com.au/portraits/Abbas-SquarePortrait.jpg',
    email: 'abbas.k@cashcapital.com.au',
  },
  {
    name: 'Priyank Dubey',
    phone: '04 3515 2034',
    avatar: 'https://assets.cashcapital.com.au/portraits/Priyank-SquarePortrait.jpg',
    email: 'priyank.d@cashcapital.com.au',
  },
  {
    name: 'Naitik Shah',
    phone: '04 5262 4845',
    avatar: 'https://assets.cashcapital.com.au/portraits/naitik.jpg',
    email: 'naitik.shah@cashcapital.com.au',
  },
  {
    name: 'Mary Joy',
    phone: '03 8827 0744',
    avatar: 'https://assets.cashcapital.com.au/portraits/mary.jpg',
    email: 'mary.b@cashcapital.com.au',
  },
  {
    name: 'Dwight Cruz',
    phone: 'Credit analyst',
    avatar: 'https://assets.cashcapital.com.au/portraits/dwight.jpg',
    email: 'dwight.c@cashcapital.com.au',
  },
];

const OurTeam = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          height: '50%',
          zIndex: 1,
          top: 0,
          right: 0,
          backgroundSize: '18px 18px',
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4,
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box zIndex={2} position={'relative'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
            }}
            gutterBottom
            color={'text.secondary'}
            align={'center'}
            fontWeight={700}
          >
            Our Team
          </Typography>
          <Typography
            variant={'h4'}
            gutterBottom
            align={'center'}
            sx={{ fontWeight: 700 }}
          >
            Your Morgage Brokers
          </Typography>
          <Typography
            variant={'h6'}
            component={'p'}
            color={'text.secondary'}
            align={'center'}
          >
            We have a team of best Morgage Brokers in the industry.
            <br />
            Working to get you the best deal and make your goals a reality.
          </Typography>
          <Box marginTop={2} display={'flex'} justifyContent={'center'}>
            <Button color={'primary'} variant={'contained'} size={'large'} href='/contact-sidebar-map#contact-block'>
              Contact Us
            </Button>
          </Box>
        </Box>
        <Grid container spacing={2} justifyContent={'center'}>
          {mock.map((item, i) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={i}>
              <Box component={Card} boxShadow={0} bgcolor={'transparent'}>
                <Box
                  component={CardMedia}
                  borderRadius={2}
                  width={1}
                  height={1}
                  minHeight={320}
                  image={item.avatar}
                />
                <CardContent>
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{ fontWeight: 700 }}
                  />
                 
                  <Box marginTop={1}>
                    <Button
                      aria-label="phone"
                      size="small"
                      color="fix2"
                      href=''
                      startIcon={<Phone />}
                    >
                      {item.phone}
                    </Button>
                    <Button
                      aria-label="email"
                      size="small"
                      color="fix2"
                      href=''
                      startIcon={<Email />}
                    >
                      {item.email}
                    </Button>
                    
                  </Box>
                </CardContent>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default OurTeam;
