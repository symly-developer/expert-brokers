import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const mock = [
  {
    title: 'UPFRONT PAYMENT PAID TO ME BY THE LENDER, NOT BY YOU.',
    subtitle:
      'A one-off payment called an upfront commission is usually between 0.65% to 0.7% of the loan amount (+gst). We do all the legwork to get your loan approved.',
  },
  {
    title: 'TRAIL PAYMENT PAID TO ME BY THE LENDER, NOT BY YOU.',
    subtitle:
      '‘Trail’ or ongoing commission is usually 0.15% p.a., based on the balance of your loan. We’ll be in regular contact with you to check in on your situation and make sure your loan continues to work hard for you, your changing situation and goals.',
  },
  {
    title: 'How that plays out',
    subtitle:
      'Let’s say you choose to take out a $500,000 loan with Bank ABC. Bank ABC pays me an upfront commission of $3,250 (+gst) and a trail commission of $$750 in the first year,$675 in the second year, $600 in the third year. The trail payment will continue until you pay off your loan or your loan is changed. It will also cease if your loan ever enters in to default or arrears.',
  },
];

const Plans = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Do I have to pay to use a broker?
        </Typography>
        <Typography variant="h6" align={'left'} color={'text.secondary'}>
        There are a lot of misconceptions that mortgage brokers charge hefty fees. Generally, this is not the case. Typically a mortgage broker will be paid by the lender (i.e. no additional cost to you) in the following way:
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              height={1}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'flex-start'}
            >
              <Typography variant={'h6'} fontWeight={600} gutterBottom>
                {item.title}
              </Typography>
              <Typography color="text.secondary">{item.subtitle}</Typography>
              <Box flexGrow={1} marginBottom={2} />
              
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plans;
