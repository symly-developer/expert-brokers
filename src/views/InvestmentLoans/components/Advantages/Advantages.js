/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const Advantages = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary.main'}
          align={'center'}
        >
          --
        </Typography>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Understanding Investment Strategies 
          
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={theme.palette.text.secondary}
          align={'left'}
        >
          Investment strategies may sound complex, but they are essentially about deciding how you want to grow your wealth. At their core, these strategies guide how, where, and when you invest your money to achieve your financial goals. Whether you’re aiming for short-term gains or long-term wealth accumulation, having a clear plan can help reduce risk and improve your chances of success. Strategies can vary from conservative approaches, like investing in government bonds, to riskier ones like stocks or cryptocurrencies.

          <br />
          <br />
          Finding the right investment strategy involves understanding your financial situation, risk tolerance, and future aspirations. A good strategy aligns with your goals, helping you stay focused during both market ups and downs. It’s important to regularly review and adjust your strategy as life changes or financial goals evolve. Seeking professional advice can also make it easier to navigate investment options, ensuring that you’re making informed decisions tailored to your needs. With the right approach, what may seem complicated at first can become much clearer.
        </Typography>
        <Box marginTop={3} display={'flex'} justifyContent={'center'}>
          <Button
            component={'a'}
            href={'/contact-sidebar-map#contact-block'}
            target={'_blank'}
            variant="contained"
            color="primary"
            size="large"
            endIcon={
              <svg
                width={16}
                height={16}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            }
          >
            Get Started
          </Button>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Advantages;
