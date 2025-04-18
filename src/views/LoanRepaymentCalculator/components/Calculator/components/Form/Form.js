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
  ConfigProvider,
} from 'antd';
import { Stack } from '@mui/material';




const Form = () => {
  

  const [loantype, setloantype] = useState('pi');
  const [paymentfreq, setpaymentfreq] = useState('Monthly');
  const [annualInterestRate, setAnnualInterestRate] = useState(5.6);
  const [loanTerm, setLoanTerm] = useState(30);
  const [loanAmount, setLoanAmount] = useState(450000);
  const [plan, setPlan] = useState([]);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalInterestPayable, setTotalInterestPayable] = useState(0);
  
  
  useEffect(() => {
    
    calculateLoanRepayment();
    
  }, [loantype, paymentfreq, annualInterestRate, loanTerm, loanAmount]);
  
  const calculateLoanRepayment = () => {
    
    const frequencyMap = { 
      Monthly: 12, 
      Fortnightly: 26, 
      Weekly: 52 
    };
    const paymentsPerYear = frequencyMap[paymentfreq]; // Adjust based on frequency
    const totalPayments = loanTerm * paymentsPerYear; // Total number of payments
    const periodicInterestRate = annualInterestRate / 100 / paymentsPerYear; // Adjust interest rate

    let balance = loanAmount;
    const newPlan = [];

    let paymentAmount;

    if (loantype == 'pi') {
      
      // **Principal & Interest Calculation (Amortized Loan)**
      paymentAmount =
        (loanAmount * periodicInterestRate) /
        (1 - Math.pow(1 + periodicInterestRate, -totalPayments));
    } else {
      // **Interest Only Calculation**
      paymentAmount = loanAmount * periodicInterestRate;
    }

    setMonthlyPayment(paymentAmount.toFixed(0));
    setTotalInterestPayable((paymentAmount * totalPayments - loanAmount).toFixed(0));
    let remainingBalance = balance;

    for (let i = 1; i <= totalPayments; i++) {
      
      let interestPayment = remainingBalance * periodicInterestRate;
      let principalPayment = loantype == 'pi' ? paymentAmount - interestPayment : 0;

      if (loantype == 'pi') {
        remainingBalance = remainingBalance - principalPayment;
      } // Reduce balance for P&I loans

      newPlan.push({
        month: i,
        payment: paymentAmount.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        remainingBalance: remainingBalance > 0 ? remainingBalance.toFixed(2) : '0.00',
      });

      if (balance <= 0) break; // Stop if balance is paid off
    }

    setPlan(newPlan);
  };

  


  const handleFieldChange = () => {
    console.log('Blur Event');
    
  };

  const handleLoanAmountChange = (value) => { 
    
    setLoanAmount (value);
  };

  const theme = useTheme();
  const { mode } = theme.palette;
  

  const onChange = (value) => {
    
    setloantype(value);
  };

    
  const onPaymentFreqChange = (value) => {
    console.log(value);
    setpaymentfreq(value);
  };

  
  const loantypeoptions = [
    {
      value: 'pi',
      label: 'Principal & Interest',
    },
    {
      value: 'io',
      label: 'Interest Only',
    },
  ];
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
  
  

  const interestRateMarks = {
    0: '0%',
    13: '13%',
  };

  

  const loanTermMarks = {
    0: '0',
    40: '40',
  };


 
  const SliderTheme = {
    components: {
      Slider: {
        trackBg: theme.palette.primary.light,
        trackHoverBg: theme.palette.primary.main,
        handleSize: 15,
        handleColor: theme.palette.primary.main,
        handleActiveColor: theme.palette.primary.main,
        handleActiveOutlineColor: theme.palette.primary.main,
        dotActiveBorderColor: theme.palette.primary.main,
        dotBorderColor: theme.palette.primary.main,
        
        
      },
    },
  };  

  // const dollarformatter = (value) => {

  //   return `$${value}`;
  // };

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
              <div className="w3-bar-item">Your Loan Details</div>
            </div>            
          </Grid>

          {/* Second Row */}

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Loan Amount </Typography>
              <InputNumber
                placeholder="Loan Amount"
                defaultValue={450000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={handleLoanAmountChange}
                style={{width: '100%'}}
                onBlur={handleFieldChange}
              />
              {/* <Input  onChange={} prefix={<DollarOutlined />} size='small'/> */}
              
              <Cascader size='small' options={loantypeoptions} onChange={onChange} defaultValue={loantype} onBlur={handleFieldChange} />
              <Cascader size='small' options={paymentfreqoptions} onChange={onPaymentFreqChange} defaultValue={paymentfreq} onBlur={handleFieldChange} />
              
              
            </Flex>
            <ConfigProvider
              theme={SliderTheme}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Flex gap={'small'} vertical>
                  <Typography variant="p" gutterBottom fontWeight={'bold'}>Annual Interest Rate</Typography>
                  <Slider onBlur={handleFieldChange} max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={annualInterestRate} value={annualInterestRate} onChange={(e)=> setAnnualInterestRate(e)}  />
                  
                </Flex>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <Flex gap={'small'} vertical>
                  <Typography variant="p" gutterBottom fontWeight={'bold'}>Loan Term</Typography>
                  <Slider onBlur={handleFieldChange} max={40}  tooltip={{open:true,formatter: yearformatter } }  marks={loanTermMarks} defaultValue={loanTerm} value={loanTerm} onChange={(e)=> setLoanTerm(e)}  />
                  
                </Flex>
              </Grid>
            </ConfigProvider>
          </Grid>
          
            
          

          {/* Eighth Row */}
          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider />
            <br />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Periodic Repayments:</Typography>
            <Typography variant="h3" gutterBottom fontWeight={'bold'}>${monthlyPayment.toLocaleString('en-US')}</Typography>
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Total Interest Payable:</Typography>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>${Math.round(totalInterestPayable).toLocaleString('en-US')}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart 
              margin={{ top: 80, right: 80, left: 80, bottom: 50 }}
              width={500}
              height={300}
              xAxis={[{
                data: plan.map((item) => item.month),
                label: 'Loan Term in Months',
                
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
                  data: plan.map((item) => parseFloat(item.payment)),
                  label: 'Payment Made',
                  area: true,
                  // stack: 'total',
                  // yAxisId: 'rightAxisId',
                  color: theme.palette.secondary.light,
                  showMark: true,
                  
                },
                {
                  data: plan.map((item) => parseFloat(item.interest)),
                  label: 'Interest Paid',
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
