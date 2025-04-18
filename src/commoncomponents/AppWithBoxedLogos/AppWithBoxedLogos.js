'use client'; // This is a client component 👈🏽
import React, { use } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';
import { Avatar, Button, IconButton, TextField } from '@mui/material';
import { ArrowCircleLeftRounded } from '@mui/icons-material';




const mock = [
  {alt: 'Home Loan', url: 'https://assets.expertbrokers.com.au/loan-types/home-loan.png', forwardurl: '/first-home-loan'},
  {alt: 'Business Loan', url: 'https://assets.expertbrokers.com.au/loan-types/business-loan.png', forwardurl: '/business-loan'},
  {alt: 'Construction Loan', url: 'https://assets.expertbrokers.com.au/loan-types/construction-loan.png', forwardurl: '/construction-loan'},
  {alt: 'Refinance', url: 'https://assets.expertbrokers.com.au/loan-types/refinance.png', forwardurl: '/loan-refinance'},
  {alt: 'Car Loan', url: 'https://assets.expertbrokers.com.au/loan-types/car-loan.png', forwardurl: '/car-loan'},
  {alt: 'Equipment Finance', url: 'https://assets.expertbrokers.com.au/loan-types/equipment-finance.png', forwardurl: '/asset-finance'},
  {alt: 'SMSF Loan', url: 'https://assets.expertbrokers.com.au/loan-types/smsf-loan.png', forwardurl: '/smsf-loan'},
  {alt: 'Commercial Loan', url: 'https://assets.expertbrokers.com.au/loan-types/commercial-loan.png', forwardurl: '/commercial-loan'}, 
];

const loanAmountArray = [
  'Less than $100,000',
  'Between $100,000 and $500,000',
  'Between $500,000 and $1,000,000',
  'Between $1,000,000 and $2,000,000',
  'Between $2,000,000 and $5,000,000',
  'More than $5,000,000',
];
const loanTermArray = [
  
  'Between 1 and 3 years',
  'Between 3 and 5 years',
  'Between 5 and 10 years',
  'Between 10 and 30 years',
]

const stepArray = [
  {stepno: 1, title: 'What kind of loan are you looking for?'},
  {stepno: 2, title: 'How much do you want to borrow?'},
  {stepno: 3, title: 'How long do you want to borrow for?'},
  {stepno: 4, title: 'What is your name?'},
  {stepno: 5, title: 'What is your email address?'},
  {stepno: 6, title: 'What is your phone number?'},
  
];


const AppWithBoxedLogos = () => {
  const theme = useTheme();
  const containerRef = React.useRef(null);
  const scrollToTop = () => {
    if (containerRef.current) {
      const offsetTop = containerRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const [step, setStep] = React.useState(1);
  const [loanType, setLoanType] = React.useState(null);
  const [loanAmount, setLoanAmount] = React.useState(null);
  const [loanTerm, setLoanTerm] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [emailError, setEmailError] = React.useState(false);

  const [phone, setPhone] = React.useState(null);
  const [phoneError, setPhoneError] = React.useState(false);
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);

  return (
    <Container >
      <Box ref={containerRef}  >
     
      <Box
        marginBottom={4}
      >
        

        <Typography
          color="text.primary"
          align="center"
          variant="h4"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Avatar
            sx={{
              width: 40,
              height: 40,
              fontSize: 20,
              bgcolor: 'primary.light',
            }}
          >
            {step}
          </Avatar>
          <Box component="span" fontWeight={600} className="w3-text-blue">
            {stepArray[step - 1].title}
          </Box>
        </Typography>
       
      </Box>
        
        <Grid container spacing={4}>
        
          {step===1 && mock.map((item, i) => (
            <Grid item key={i} xs={6} sm={4}>
              <Box
                onClick={() => {
                  setStep(step + 1);
                  setLoanType(item.alt);
                  scrollToTop();
                }
                }
                bgcolor={'alternate.main'}
                p={0}
                borderRadius={2}
                display={'flex'}
                justifyContent={'center'}
                className="w3-card-4 w3-hover-shadow"
                sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      '& img': {
                        filter: 'invert(0) contrast(1)',
                      },
                    },
                  }}
              >
                <Box
                className='w3-hide-medium w3-hide-small'
                  component="img"
                  height={1}
                  width={1}
                  // maxWidth={'60%'}
                  src={item.url}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0)'
                        : 'contrast(0.3)',
                  }}
                />
                <Box
                className='w3-hide-large'
                  component="img"
                  height={1}
                  width={1}
                  // maxWidth={'60%'}
                  src={item.url}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0)'
                        : 'contrast(0.6)',
                  }}
                />
              </Box>
              
            </Grid>
          ))}
          {step===2 && loanAmountArray.map((item, i) => (
            <Grid item key={i} xs={6} sm={4}>
              <Box
                onClick={() => {
                  setStep(step + 1);
                  setLoanAmount(item);
                  scrollToTop();
                }
                }
                bgcolor={'alternate.main'}
                p={2}
                borderRadius={2}
                display={'flex'}
                justifyContent={'center'}
                className="w3-card-4 w3-hover-shadow"
                sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      bgcolor: 'primary.light',
                      color: 'white',
                    },
                  }}
              >
                <Typography
                 variant='h6'
                  
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert()'
                        : 'contrast(1)',
                  }}
                >{item}</Typography>
              </Box>
            </Grid>
          ))}
          {step===3 && loanTermArray.map((item, i) => (
            <Grid item key={i} xs={6} sm={4}>
              <Box
                onClick={() => {
                  setStep(step + 1);
                  setLoanTerm(item);
                  scrollToTop();
                }
                }
                bgcolor={'alternate.main'}
                p={2}
                borderRadius={2}
                display={'flex'}
                justifyContent={'center'}
                className="w3-card-4 w3-hover-shadow"
                sx={{
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      bgcolor: 'primary.light',
                      color: 'white',
                    },
                  }}
              >
                <Typography
                 variant='h6'
                  
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert()'
                        : 'contrast(1)',
                  }}
                >{item}</Typography>
              </Box>
            </Grid>
          ))}
          {step===4 && <Grid item xs={12} sm={12}>
              <Box
                bgcolor={'alternate.main'}
                p={2}
                borderRadius={2}
                display={'flex'}
                justifyContent={'center'}
                className="w3-card-4 w3-hover-shadow"
              >
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&:hover fieldset': {
                        borderColor: 'primary.main',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'primary.main',
                      },
                    },
                  }}
                />
                <Button 
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setStep(step + 1);
                    scrollToTop();
                  }}
                  sx={{
                    marginLeft: 2,
                    backgroundColor: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'primary.dark',
                    },
                  }}
                >
                  Next
                </Button>
              </Box>
            </Grid>}
          {step===5 && <Grid item xs={12} sm={12}>
          <Box
            bgcolor={'alternate.main'}
            p={2}
            borderRadius={2}
            display={'flex'}
            justifyContent={'center'}
            className="w3-card-4 w3-hover-shadow"
          >
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false); // clear error while typing
              }}
              error={emailError}
              helperText={emailError ? 'Please enter a valid email address' : ''}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&:hover fieldset': {
                    borderColor: 'primary.main',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                if (isValidEmail) {
                  setStep(step + 1);
                  scrollToTop();
                } else {
                  setEmailError(true);
                }
              }}
              sx={{
                marginLeft: 2,
                backgroundColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Next
            </Button>
          </Box>
            </Grid>}
          {step===6 && <Grid item xs={12} sm={12}>
          <Box
              bgcolor={'alternate.main'}
              p={2}
              borderRadius={2}
              display={'flex'}
              justifyContent={'center'}
              className="w3-card-4 w3-hover-shadow"
            >
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setPhoneError(false); // Clear error while typing
                }}
                error={phoneError}
                helperText={phoneError ? 'Enter a valid Australian phone number' : ''}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&:hover fieldset': {
                      borderColor: 'primary.main',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'primary.main',
                    },
                  },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  const isValidAUPhone = /^(?:\+?61|0)[2-478](?:[ -]?[0-9]){8}$/.test(phone);
                  if (isValidAUPhone) {
                    
                    const selected = mock.find(item => item.alt === loanType); // assuming loanType is your selected alt value
                    if (selected) {
                      window.location.href = selected.forwardurl;
                    }
                  } else {
                    setPhoneError(true);
                  }
                }}
                sx={{
                  marginLeft: 2,
                  backgroundColor: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                Submit
              </Button>
            </Box>
            </Grid>}


        </Grid>
        <Grid container spacing={1} marginTop={1}>
          <Grid item xs={12} sm={12}>
            <Box
              p={2}
              borderRadius={2}
              display={'flex'}
              justifyContent={'center'}
              
            >
              {step !== 1 && (
                <IconButton
                  size="large"
                  color="primary"
                  onClick={() => setStep(step - 1)}
                  sx={{
                  
    
                    // left: '10%',
                  }}
                >
                  <ArrowCircleLeftRounded sx={{fontSize:50, color:'lightskyblue'}} />
                </IconButton>
              )}
            </Box>
          </Grid>
        </Grid>
       
      </Box>
     
    </Container>
  );
};

export default AppWithBoxedLogos;
