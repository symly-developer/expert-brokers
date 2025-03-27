/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { 
  //  alpha,
  useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';

import Container from 'components/Container';

// const mock = [
//   {
//     title: 'Secured loans',
//     subtitle:
//       'You provide collateral (such as the car or property) as security against the loan in case you can’t afford your repayments. Lenders typically offer lower rates for secured loans (vs an unsecured loan) because there is less of a risk to them.',
//     icon: (
//       <svg
//         height={24}
//         width={24}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: 'Unsecured loans',
//     subtitle:
//       'No additional security (e.g. your car or property) is provided against the loan. Instead the lender will rely on your credit score when they decide whether or not to approve you for the loan. Interest rates can be higher than a secured loan and you might not be able to borrow as much',
//     icon: (
//       <svg
//         height={24}
//         width={24}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: 'Fixed rate',
//     subtitle:
//       'Your interest rate and repayments will stay the same during the fixed term of your car loan. This can make budgeting easier as you know exactly how much you need to repay each month. However, you might not be able to make extra repayments or pay off your loan early without incurring a fee.',
//     icon: (
//       <svg
//         height={24}
//         width={24}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: 'Novated lease',
//     subtitle:
//       'A novated lease is one of the easiest and most cost-effective ways to buy and own a car. This way, the financier owns the asset, while you and your employer sign a novation agreement to share the responsibilities of the loan.',
//     icon: (
//       <svg
//         height={24}
//         width={24}
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//         />
//       </svg>
//     ),
//   },
// ];

const SimpleCentered = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box>
        <Box marginBottom={4}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color={theme.palette.text.primary}
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              What is an SMSF loan?
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
              align={'left'}
            >
              An SMSF loan is a loan used to buy residential and commercial property from a self-managed super fund (SMSF). The returns on the investment – whether that’s rental income or capital gains – are channelled back into the super fund to increase your retirement savings.
              <br /> <br />
              With the right SMSF loan, self-managed super fund structure and property type,  you can potentially save hundreds of dollars on an account structure and keeping fees.  With a SMSF loan you also have the flexibility and freedom to:
              <ul>
                <li>Plan your retirement on your own terms</li>
                <li>Choose an investment to suit your lifestyle and investment goals</li>
                <li>Gear into property by borrowing within a Self Managed Super Fund</li>
              </ul>

            </Typography>
          </Box>

          
        </Box>
        <Box marginBottom={2} bgcolor={theme.palette.alternate.main} padding={4} borderRadius={2}>
          <Typography
            variant="h4"
            color={theme.palette.text.primary}
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            SMSF Case Study.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'left'}
          >
            Joan wanted a wealth building plan to help her set aside funds for a large nest egg for retirement. She had a SMSF with $200,000 and used the money to borrow extra funds to secure a residential investment property. Using a variable rate loan with a 7.80%p.a. interest rate, Joan borrowed $300,000 with an LVR of 80 per cent. The deposit is partly covered by some of Joan's SMSF funds, while the balance is borrowed money.
            <br /> <br />
            This allowed her to buy a property for $475,000, bringing the total cost, including stamp duty and other fees, to $500,000. Joan then rented the property out at $500 per week, giving her an annual rental stream of $26,000. Using money earned from the rent and other income, Joan was able to meet her home loan repayments and used SMSF money to cover repairs to the property.
            <br /> <br />
            Keeping an eye on market rates, Joan can increase the rent of her property while it grows in value over time. As a result, Joan can earn a steady stream of rental income and re-sell the property in the future potentially for a higher amount.
            
          </Typography>
        </Box>
        {/* <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} md={3} key={i}>
              <Box width={1} height={1}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Box
                    component={Avatar}
                    width={60}
                    height={60}
                    marginBottom={2}
                    bgcolor={alpha(theme.palette.primary.main, 0.1)}
                    color={theme.palette.primary.main}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant={'h6'}
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                    align={'center'}
                  >
                    {item.title}
                  </Typography>
                  <Typography align={'center'} color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid> */}
      </Box>
    </Container>
  );
};

export default SimpleCentered;
