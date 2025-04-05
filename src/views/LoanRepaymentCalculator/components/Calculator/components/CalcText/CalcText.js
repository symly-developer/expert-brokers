/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';

import {
  CtaAlignedLeftWithTypedText,

} from '../../../../../../commoncomponents';

const CalcText = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Loan Repayment Calculator
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={theme.palette.text.secondary}>
          Before applying for a home loan, it’s essential to have a clear understanding of how much you will need to repay your lender. Knowing your estimated repayment amount helps ensure that your loan remains manageable within your budget. Planning ahead can prevent financial stress and allow you to make informed decisions about your borrowing capacity.
            <br /><br />
            A home loan calculator can be a useful tool to crunch the numbers and provide an estimate of your repayments. However, it’s important to remember that this is only an approximation. Various factors, such as the type of loan you choose—whether it’s a fixed, variable, or split loan—can affect your final repayment amount. Additionally, features like offset accounts or additional fees may impact the overall cost.
            <br /><br />
            Since calculators provide only a general estimate, consulting a mortgage broker is a smart move. A broker can analyze your financial situation in detail and factor in elements that online tools may overlook. This includes lender-specific fees, interest rate changes, and potential loan structuring options that suit your financial goals.
            <br /><br />
            By working with a broker, you can get a more precise repayment figure and tailor your home loan to your needs. They can help you explore strategies to reduce interest payments and optimize your mortgage setup. Having professional guidance ensures that you secure a loan that aligns with your budget and long-term financial plans.
            <br /><br />
            At Expert Brokers, our team of mortgage brokers can assist you in navigating the complexities of home loans. We provide expert advice and personalized solutions to help you achieve your property ownership goals. Contact us today to learn more about our services and how we can help you secure the right loan.
          </Typography>
        </Box>
        <CtaAlignedLeftWithTypedText />
      </Box>
    
      
    </Box>
  );
};

export default CalcText;
