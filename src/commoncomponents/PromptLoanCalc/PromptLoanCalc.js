/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Container, Grid } from '@mui/material';



const PromptLoanCalc = () => {
  const theme = useTheme();
  return (
    <Container >
      <Grid item xs={12} sm={12} md={12} lg={12} marginTop={4} marginBottom={4}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
          }}
        >
            Check out the financial calculators below
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ fontWeight: 400 }}
        >
            Your scenario muight be unique. Get in touch with us for a tailored solution based on your personal circumstances.
        </Typography>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => window.open('/borrowing-power-calculator', '_blank')} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://assets.expertbrokers.com.au/loancalculators/borrowingpower.webp"
                alt={theme.palette.primary.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Your Borrowing Power?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Click here to use online loan calculator to find out how much you can borrow.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => window.open('/loan-repayment-calculator', '_blank')} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://assets.expertbrokers.com.au/loancalculators/loanrepayment.webp"
                alt={theme.palette.primary.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Loan Repayment Calculator
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Calculate your monthly loan repayments to see how much you need to plan for.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => window.open('/stamp-duty-calculator', '_blank')} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://assets.expertbrokers.com.au/loancalculators/stampduty.webp"
                alt={theme.palette.primary.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Stamp Duty Calculator
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Calculate how much stamp duty you will need to pay on your property purchase.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => window.open('/mortgage-offset-calculator', '_blank')} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://assets.expertbrokers.com.au/loancalculators/offset.webp"
                alt={theme.palette.primary.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mortgage Offset Calculator
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Calculate how much you could save by using an offset account.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => window.open('/mortgage-comparison-calculator', '_blank')} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://assets.expertbrokers.com.au/loancalculators/loancompare.webp"
                alt={theme.palette.primary.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Mortgage Comparison
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Compare different home loans to find the right one for you.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card sx={{ maxWidth: 345 }} onClick={() => window.open('/extra-repayment-calculator', '_blank')} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image="https://assets.expertbrokers.com.au/loancalculators/earlyrepayments.webp"
                alt={theme.palette.primary.main}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Extra Repayment Benefit
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Calculate how much you could save by making extra repayments every month.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
        </Grid>
      </Grid>
        
      
      
    </Container>
  );
};

export default PromptLoanCalc;
