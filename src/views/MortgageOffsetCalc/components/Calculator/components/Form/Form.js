/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { LineChart } from '@mui/x-charts/LineChart';

// import { DollarOutlined } from '@ant-design/icons';
import { 
  Flex, 
  InputNumber,
  Cascader, 
  
  Slider,
  
} from 'antd';
import { Stack } from '@mui/material';

// import { FacebookOutlined } from '@mui/icons-material';



const Form = () => {
  
  
  
 
 
  const [loanAmount, setLoanAmount] = useState(100000);
  const [annualInterestRate, setAnnualInterestRate] = useState(5.6);
  const [loanTerm, setLoanTerm] = useState(30);
  const [repaymentFrequency, setRepaymentFrequency] = useState('Monthly');
  const [yearsSaved, setYearsSaved] = useState(0);
  const [interestSaved, setInterestSaved] = useState(0);
  const [offsetAccountBalance, setOffsetAccountBalance] = useState(10000);
  const [ongoingDeposit, setOngoingDeposit] = useState(1000);

  
  const [amortizationPlan, setAmortizationPlan] = useState([    {
    'month': 1,
    'principal': '1842.71',
    'principalWithOffset': '1842.71',
    'interest': '13566.44',
    'interestWithOffset': '13566.44',
    'remainingBalance': '2291077.29',
    'remainingBalanceWithOffset': '2291077.29'
  }]);

  //   const [amortizationPlanWithOffset, setAmortizationPlanWithOffset] = useState([    {
  //     'month': 1,
  //     'payment': '15409.16',
  //     'principal': '1842.71',
  //     'interest': '13566.44',
  //     'remainingBalance': '2291077.29'}]);

  useEffect(() => {
    {
     
      calculateAmortization();
    }
  }, [
    loanAmount,
    annualInterestRate,
    loanTerm,
    repaymentFrequency,
    offsetAccountBalance,
    ongoingDeposit,
  ]);
  

  const calculateAmortization = () => {

    let months = loanTerm * 12; // Convert years to months
    let monthlyRate = annualInterestRate / 100 / 12; // Convert annual rate to monthly
    let payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)); // Standard mortgage formula
    let tempOffsetAccountBalance = offsetAccountBalance;
    let balance = loanAmount;
    let monthsSaved = 0;
    let interestSaved = 0;
    let balanceWithOffset = loanAmount;
    let plan = [];

    for (let month = 1; month <= months; month++) {
      let interest = balance * monthlyRate;
      let interestWithOffset = (balanceWithOffset - tempOffsetAccountBalance) * monthlyRate; // Reduced interest

      let principal = payment - interest;
      let principalWithOffset = payment - interestWithOffset;

      balance -= principal;
      balanceWithOffset -= principalWithOffset;

      // Ensure balances don't go negative
      balance = Math.max(0, balance);
      balanceWithOffset = Math.max(0, balanceWithOffset);

      // Update offset account (if ongoing deposits are made)
      tempOffsetAccountBalance += ongoingDeposit;

      plan.push({
        month: month,
        principal: principal.toFixed(2),
        principalWithOffset: principalWithOffset.toFixed(2),
        interest: interest.toFixed(2),
        interestWithOffset: interestWithOffset.toFixed(2),
        remainingBalance: balance.toFixed(2),
        remainingBalanceWithOffset: balanceWithOffset.toFixed(2)
      });

      if (balanceWithOffset === 0){
        interestSaved = interestSaved + interest;
        setInterestSaved(interestSaved);
        monthsSaved++;
        setYearsSaved(monthsSaved/12);
      }
      // Stop if loan is paid off
      if (balance <= 0 ) break;
    }

    setAmortizationPlan(plan);

    
  };
  


  

  const handleLoanAmountChange = (value) => { 
    // console.log (value);
    setLoanAmount(value); // Update state with formatted value
  };

  

  
  const handleOffsetAccountBalanceChange = (value) => {
    // console.log (value);
    setOffsetAccountBalance(value); // Update state with formatted value
  };

  const handleOngoingDepositChange = (value) => {
    // console.log (value);
    setOngoingDeposit(value); // Update state with formatted value
  };

  const paymentfreqoptions = [
    {
      value: 'Monthly',
      label: 'Monthly',
    },
    {
      value: 'Fortnightly',
      label: 'Fortnightly',
    },
    { 
      value: 'Weekly',
      label: 'Weekly',
    },
  ];
  

  const handleRepaymentFrequencyChange = (value) => {
    // console.log (value);   
    setRepaymentFrequency(value); // Update state with formatted value
  };

   
  const theme = useTheme();
  const { mode } = theme.palette;
  

  
    

  const interestRateMarks = {
    0: '0%',
    13: '13%',
  };

  
  const loanTermMarks = {
    0: '0',
    40: '40',
  };

  
  

  const percentformatter = (value) => {
    
    return `${value}%`;
  };

  const yearformatter = (value) => {
    
    return `${value}Y`;
  };

  return (
    <Box>
      <Box
        padding={{ xs: 0, sm: 3 }}
        width={1}
        component={Card}
        boxShadow={1}
        marginBottom={4}
      >
        
          
        <Grid container spacing={4}  padding={0} width={'105%'} >
          {/* First Row */}

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="w3-bar w3-light-grey" >
              <div className="w3-bar-item w3-margin-left w3-circle" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>1</div>
              <div className="w3-bar-item">Loan Details</div>
            </div>            
          </Grid>

          {/* Second Row */}

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Loan Amount </Typography>
              <InputNumber
                placeholder="Laon Amount"
                defaultValue={100000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={handleLoanAmountChange}
                style={{width: '100%'}}
                // onBlur={handleFieldChange}
              />
            
              
              <Typography variant="p" gutterBottom fontWeight={'bold'}>Annual Interest Rate</Typography>
              <Slider max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={annualInterestRate} value={annualInterestRate} onChange={(e)=> setAnnualInterestRate(e)}  />
            
            </Flex>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}>Loan Term</Typography>
              <Slider  max={40}  tooltip={{open:true,formatter: yearformatter } }  marks={loanTermMarks} defaultValue={loanTerm} value={loanTerm} onChange={(e)=> setLoanTerm(e)}  />
              <Typography variant="p" gutterBottom fontWeight={'bold'}>Payment Frequency</Typography>
              <Cascader size='small' options={paymentfreqoptions} onChange={handleRepaymentFrequencyChange} defaultValue={repaymentFrequency} /> 

            </Flex>
          </Grid>
            
          
          {/* Fourth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="w3-bar w3-light-grey" >
              <div className="w3-bar-item w3-margin-left w3-circle" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>2</div>
              <div className="w3-bar-item">Offset Details</div>
            </div>            
          </Grid>

          {/* Fifth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Offset Account Balance </Typography>
              <InputNumber
                placeholder="Offset Account Balance"
                defaultValue={10000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={handleOffsetAccountBalanceChange}
                style={{width: '100%'}}
                // onBlur={handleFieldChange}
              />
              <Typography variant="p" gutterBottom fontWeight={'bold'}>Ongoing Monthly Deposit</Typography>
              <InputNumber
                placeholder="Ongoing Monthly Deposit"
                defaultValue={1000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={handleOngoingDepositChange}
                style={{width: '100%'}}
                // onBlur={handleFieldChange}
              />
            </Flex>
          </Grid>

          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider />
            <br />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>You can Save:</Typography>
            <Typography variant="h3" gutterBottom fontWeight={'bold'}>{Math.round(yearsSaved).toLocaleString('en-US')} Years 
              <Typography variant="h6" gutterBottom fontWeight={'bold'}>off your total loan term</Typography>
            </Typography>
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Total Interest Saved:</Typography>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>${Math.round(interestSaved).toLocaleString('en-US')}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart 
              margin={{ top: 80, right: 80, left: 80, bottom: 50 }}
              width={500}
              height={300}
              xAxis={[{
                data: amortizationPlan.map((item) => item.month),
                label: 'Loan Term in months',
                
              }]}
              // yAxis={[{ id: 'leftAxisId', label:'Loan Balance'  }, { id: 'rightAxisId', label: 'Payment Made' }]}
              // rightAxis={[{ id: 'rightAxisId', label: 'Payments' }]}
              
              series={[
                // {
                //   data: amortizationPlan.map((item) =>  parseFloat(item.remainingBalance)),
                //   label: 'Loan Balance',
                //   // area: true,
                //   // stack: 'total',
                //   yAxisId: 'leftAxisId',
                //   color: '#59a14f',
                  
                // },
                {
                  data: amortizationPlan.map((item) => parseFloat(item.remainingBalance)),
                  label: 'No Offset',
                  area: true,
                  // stack: 'total',
                  // yAxisId: 'rightAxisId',
                  color: theme.palette.secondary.light,
                  showMark: true,
                  
                },
                {
                  data: amortizationPlan.map((item) => parseFloat(item.remainingBalanceWithOffset)),
                  label: 'With Offset',
                  area: true,
                  // stack: 'total',
                  // yAxisId: 'rightAxisId',
                  color: theme.palette.primary.main,
                  showMark: true,
                  
                },
                
              ]}
              

            />
            
          </Grid>
          
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item container justifyContent={'center'} xs={12}>
            <Box>
              <Typography component="p" variant="caption" align="left" color={theme.palette.text.secondary}>
              Note: The results from this calculator should be used as an indication only. Results do not represent either quotes or pre-qualifications for a loan. The specific details of your loan will be provided to you in your loan contract. It is advised that you get in touch with us before taking out a loan so that we can provide you with advice that is tailored to your situation.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
         
          <Typography variant="body" color="text.secondary" >Calculator Powered by: </Typography>
          <Box
            display={'flex'}
            component="a"
            href="https://www.thefrontdigital.com.au/"
            title="The Front Digital Pty Ltd"
            width={150}
            justifyContent={'left'}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'http://assets.thefrontdigital.com.au/the-front-digital-marketing-web-designing-logo-black.svg'
                  : 'http://assets.thefrontdigital.com.au/the-front-digital-marketing-web-designing-logo-white.svg'
              }
              height={0.7}
              width={0.7}
              sx={{
                filter: 'grayscale(100%) contrast(0.2)',
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Form;
