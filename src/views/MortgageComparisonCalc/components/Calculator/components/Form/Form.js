/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


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
  Slider,
  
} from 'antd';
import { Stack } from '@mui/material';

// import { FacebookOutlined } from '@mui/icons-material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Form = () => {
  
  
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(30); // in years
  const [betterLoan, setBetterLoan] = useState(1);

  // Loan 1
  const [annualInterestRate1, setAnnualInterestRate1] = useState(3.5);
  const [upfrontFees1, setUpfrontFees1] = useState(2000);
  const [ongoingFees1, setOngoingFees1] = useState(10);
  const ongoingFeesFrequency1 = 12; // Monthly
  
  
  const [introRate1, setIntroRate1] = useState(2.5);
  const [introTerm1, setIntroTerm1] = useState(12); // in months
  const [totalRepayment1, setTotalRepayment1] = useState(0);
  const [introRepayment1, setIntroRepayment1] = useState(0);
  const [ongoingRepayment1, setOngoingRepayment1] = useState(0);

  // Loan 2
  const [annualInterestRate2, setAnnualInterestRate2] = useState(4.0);
  const [upfrontFees2, setUpfrontFees2] = useState(1500);
  const [ongoingFees2, setOngoingFees2] = useState(15);
  const ongoingFeesFrequency2 = 12; // Monthly
  
  const [introRate2, setIntroRate2] = useState(3.0);
  const [introTerm2, setIntroTerm2] = useState(12); // in months
  const [totalRepayment2, setTotalRepayment2] = useState(0);
  const [introRepayment2, setIntroRepayment2] = useState(0);
  const [ongoingRepayment2, setOngoingRepayment2] = useState(0);


  

  
  const [amortizationPlan, setAmortizationPlan] = useState([    {
    'month': 1,
    'cumulativesavings': '15409.16',
  }]);


  
  useEffect(() => {
    {
     
      calculateAmortization();
    }
  }, [
    loanAmount,
    loanTerm,
    annualInterestRate1,
    annualInterestRate2,
    upfrontFees1,
    upfrontFees2,
    ongoingFees1,
    ongoingFees2,
    ongoingFeesFrequency1,
    ongoingFeesFrequency2,
    introRate1,
    introRate2,
    introTerm1,
    introTerm2,
  ]);
  
  const calculateMonthlyPayment = (principal, annualRate, termMonths, fees, feeFrequency) => {
    const monthlyRate = (annualRate / 100) / 12;
    const feePerMonth = fees / feeFrequency;
    return ((principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths))) + feePerMonth;
  };

  const calculateAmortization = () => {

    const termMonths = loanTerm * 12;

    // Introductory payments
    const introPayment1 = introRate1 > 0 
      ? calculateMonthlyPayment(loanAmount, introRate1, termMonths, ongoingFees1, ongoingFeesFrequency1) 
      : 0;
    setIntroRepayment1(introPayment1);
    
    const introPayment2 = introRate2 > 0 
      ? calculateMonthlyPayment(loanAmount, introRate2, termMonths, ongoingFees2, ongoingFeesFrequency2) 
      : 0;
    setIntroRepayment2(introPayment2);

    // Ongoing payments after intro term
    const ongoingPayment1 = annualInterestRate1 > 0 
      ? calculateMonthlyPayment(loanAmount, annualInterestRate1, termMonths, ongoingFees1, ongoingFeesFrequency1) 
      : 0;

    const ongoingPayment2 = annualInterestRate2 > 0 
      ? calculateMonthlyPayment(loanAmount, annualInterestRate2, termMonths, ongoingFees2, ongoingFeesFrequency2) 
      : 0;
    setOngoingRepayment1(ongoingPayment1);
    
    setOngoingRepayment2(ongoingPayment2);

    // Total Repayments
    let totalRepayment1 = introPayment1 * introTerm1 + ongoingPayment1 * (termMonths - introTerm1);
    let totalRepayment2 =  introPayment2 * introTerm2 + ongoingPayment2 * (termMonths - introTerm2);
    setTotalRepayment1(totalRepayment1);
    setTotalRepayment2(totalRepayment2);

    let betterLoan = totalRepayment1 < totalRepayment2 ? 1 : 2;
    setBetterLoan(betterLoan);

    // Cumulative Savings Calculation
    let savingsArray = [];
    let cumulativeSavings = 0;
    

    for (let month = 1; month <= termMonths; month++) {
      let payment1 = month <= introTerm1 ? introPayment1 : ongoingPayment1;
      let payment2 = month <= introTerm2 ? introPayment2 : ongoingPayment2;

      let monthlySavings = Math.abs(payment2 - payment1);
      cumulativeSavings += monthlySavings;

      savingsArray.push({
        month: month,
        cumulativeSavings: cumulativeSavings.toFixed(2),
      });
    }

    setAmortizationPlan(savingsArray);

    
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




  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <div className="w3-bar-item">Common Loan Details</div>
            </div>            
          </Grid>

          {/* Second Row */}

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Loan Amount </Typography>
              <InputNumber
                placeholder="Laon Amount"
                defaultValue={loanAmount}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={(e)=> setLoanAmount(e)}
                style={{width: '100%'}}
                // onBlur={handleFieldChange}
              />
            
              
              
            </Flex>
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}>Loan Term</Typography>
              <Slider  max={40}  tooltip={{open:true,formatter: yearformatter } }  marks={loanTermMarks} defaultValue={loanTerm} value={loanTerm} onChange={(e)=> setLoanTerm(e)}  />
              
            </Flex>
          </Grid>
            
          
          {/* Fourth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="w3-bar w3-light-grey" >
              <div className="w3-bar-item w3-margin-left w3-circle" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>2</div>
              <div className="w3-bar-item">Loan specific details</div>
            </div>            
          </Grid>

          {/* Fifth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Loan #1" {...a11yProps(0)} />
                <Tab label="Loan #2" {...a11yProps(1)} />
                
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}> Upfront Fees </Typography>
                <InputNumber
                  placeholder="Offset Account Balance"
                  defaultValue={upfrontFees1}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                  onChange={e => setUpfrontFees1(e)}
                  style={{width: '100%'}}
                  // onBlur={handleFieldChange}
                />
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Ongoing Interest Rate</Typography>
                <Slider max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={annualInterestRate1} value={annualInterestRate1} onChange={(e)=> setAnnualInterestRate1(e)}  />
              </Flex>
            
            
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Ongoing Annual Fees</Typography>
                <InputNumber
                  placeholder="Ongoing Monthly Fees"
                  defaultValue={ongoingFees1}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                  onChange={e => setOngoingFees1(e)}
                  style={{width: '100%'}}
                  // onBlur={handleFieldChange}
                />
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Introductory Rate</Typography>
                <Slider max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={introRate1} value={introRate1} onChange={(e)=> setIntroRate1(e)}  />
                
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Introductory Loan Term</Typography>
                <Slider  max={40}  tooltip={{open:true,formatter: yearformatter } }  marks={loanTermMarks} defaultValue={introTerm1} value={introTerm1} onChange={(e)=> setIntroTerm1(e)}  />
              
              </Flex>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}> Upfront Fees </Typography>
                <InputNumber
                  placeholder="Offset Account Balance"
                  defaultValue={upfrontFees2}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                  onChange={e => setUpfrontFees2(e)}
                  style={{width: '100%'}}
                  // onBlur={handleFieldChange}
                />
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Ongoing Interest Rate</Typography>
                <Slider max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={annualInterestRate2} value={annualInterestRate2} onChange={(e)=> setAnnualInterestRate2(e)}  />

                <Typography variant="p" gutterBottom fontWeight={'bold'}>Ongoing Annual Fees</Typography>
                <InputNumber
                  placeholder="Ongoing Monthly Fees"
                  defaultValue={ongoingFees2}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                  onChange={e => setOngoingFees2(e)}
                  style={{width: '100%'}}
                  // onBlur={handleFieldChange}
                />
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Introductory Rate</Typography>
                <Slider max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={introRate2} value={introRate2} onChange={(e)=> setIntroRate2(e)}  />

                <Typography variant="p" gutterBottom fontWeight={'bold'}>Introductory Loan Term</Typography>
                <Slider  max={40}  tooltip={{open:true,formatter: yearformatter } }  marks={loanTermMarks} defaultValue={introTerm2} value={introTerm2} onChange={(e)=> setIntroTerm2(e)}  />


              </Flex>

            </CustomTabPanel>
            
          </Grid>

          

          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider />
            <br />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Loan #{betterLoan} will save you an extra</Typography>
            <Typography variant="h3" gutterBottom fontWeight={'bold'}>${Math.round(Math.abs(totalRepayment1-totalRepayment2)).toLocaleString('en-US')} 
              <Typography variant="h6" gutterBottom fontWeight={'bold'}>over the term of loan</Typography>
            </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Introductory Payments:</Typography>
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Loan#1: ${Math.round(introRepayment1).toLocaleString('en-US')}</Typography>
            <br />
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Loan#2: ${Math.round(introRepayment2).toLocaleString('en-US')}</Typography>
            <Divider />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Ongoing Payments:</Typography>
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Loan#1: ${Math.round(ongoingRepayment1).toLocaleString('en-US')}</Typography>
            <br />
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Loan#2: ${Math.round(ongoingRepayment2).toLocaleString('en-US')}</Typography>
            <Divider />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Total Payments:</Typography>

            <Typography variant="body" gutterBottom fontWeight={'bold'}>Loan#1: ${Math.round(totalRepayment1).toLocaleString('en-US')}</Typography>
            <br />
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Loan#2: ${Math.round(totalRepayment2).toLocaleString('en-US')}</Typography>
            <Divider />
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
                  data: amortizationPlan.map((item) => parseFloat(item.cumulativeSavings)),
                  label: 'Cumulative Savings',
                  area: true,
                  // stack: 'total',
                  // yAxisId: 'rightAxisId',
                  color: theme.palette.primary.light,
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
              height={1}
              width={1}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Form;
