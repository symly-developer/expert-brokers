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
  Checkbox,
  Slider,
  ConfigProvider,
} from 'antd';
import { Stack } from '@mui/material';
// import { FacebookOutlined } from '@mui/icons-material';



const Form = () => {
  
  
  
  // const keyToLabel = {
  //   payment: 'Payment Made in this month',
  //   principal: 'Principa Paid in this month',
  //   interest: 'Interest Paid in this month',
  //   remainingBalance: 'Remaining Principal Balance',
  // };
  // const chartcolors = {
  //   payment: 'blue',
  //   principal: 'green',
  //   interest: 'red',
  //   remainingBalance: 'orange',
  // };
  // const stackStrategy = {
  //   stack: 'total',
  //   area: true,
  //   stackOffset: 'none', // To stack 0 on top of others
  // };
  
  // const customize = {
  //   height: 400,
  //   width: 400,
  //   // legend: { hidden: true },
  //   margin: { top: 60, right: 20, bottom: 20, left: 70 },
  // };
  


  const [taxstate, settaxstate] = useState('Pre-Tax');
  const [salaryFrequency, setsalaryFrequency] = useState('Annually');
  const [partner, setPartner] = useState(false);
  

  const [salary, setSalary] = useState(350000);
  const [otherIncome, setOtherIncome] = useState(10000);
  const [partnerIncome, setPartnerIncome] = useState(200000);
  const [otherPartnerIncome, setOtherPartnerIncome] = useState(2000);
  const [depedents, setDependents] = useState(1);
  const [livingExpenses, setLivingExpenses] = useState(8000);
  const [carLoanRepayments, setCarLoanRepayments] = useState(1200);
  const [creditCardLimit, setCreditCardLimit] = useState(10000);
  const [otherLoanRepayments, setOtherLoanRepayments] = useState(4000);
  const [annualInterestRate, setAnnualInterestRate] = useState(5.6);
  const [serviceableIncomeFactor, setServiceableIncomeFactor] = useState(95);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRateBuffer, setInterestRateBuffer] = useState(1.5);

  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlypossiblerepayment, setMonthlyPossibleRepayment] = useState(0);
  const [amortizationPlan, setAmortizationPlan] = useState([    {
    'month': 1,
    'payment': '15409.16',
    'principal': '1842.71',
    'interest': '13566.44',
    'remainingBalance': '2291077.29'}]);

  useEffect(() => {
    {
     
      calculateAmortization();
    }
  }, [
    salary,
    otherIncome,
    partnerIncome,
    otherPartnerIncome,
    depedents,
    livingExpenses,
    carLoanRepayments,
    creditCardLimit,
    otherLoanRepayments,
    annualInterestRate,
    serviceableIncomeFactor,
    loanTerm,
    interestRateBuffer,
    partner,
  ]);
  

  const calculateAmortization = () => {

    console.log('Calculating Amortization');
    console.log('Salary', salary);
    console.log('Other Income', otherIncome);
    console.log('Partner Income', partnerIncome);
    console.log('Other Partner Income', otherPartnerIncome);
    console.log('Dependents', depedents);
    console.log('Living Expenses', livingExpenses);
    console.log('Car Loan Repayments', carLoanRepayments);
    console.log('Credit Card Limit', creditCardLimit);
    console.log('Other Loan Repayments', otherLoanRepayments);
    console.log('Annual Interest Rate', annualInterestRate);
    console.log('Serviceable Income Factor', serviceableIncomeFactor);
    console.log('Loan Term', loanTerm);
    console.log('Interest Rate Buffer', interestRateBuffer);


    // If salary frequency is monthly, convert to annual
    const annualSalary = salaryFrequency === 'Monthly' ? salary * 12 : salary;
    const annualOtherIncome = salaryFrequency === 'Monthly' ? otherIncome * 12 : otherIncome;
    const annualPartnerIncome = salaryFrequency === 'Monthly' ? partnerIncome * 12 : partnerIncome;
    const annualOtherPartnerIncome = salaryFrequency === 'Monthly' ? otherPartnerIncome * 12 : otherPartnerIncome;

    const grossSalary = annualSalary + annualOtherIncome + (partner ? annualPartnerIncome + annualOtherPartnerIncome : 0);
    console.log('1. Gross Salary', grossSalary);
    var tax = 0;
    if (taxstate === 'Pre-Tax') {

      var taxableIncome = grossSalary - otherLoanRepayments*12;
      console.log('0. Taxable Income', taxableIncome);
      if (taxableIncome <= 18200) {
        tax = 0;
      } else if (taxableIncome <= 45000) {
        tax = (taxableIncome - 18200) * 0.16;
      } else if (taxableIncome <= 135000) {
        tax = 4288 + (taxableIncome - 45000) * 0.30;
      } else if (taxableIncome <= 190000) {
        tax = 31288 + (taxableIncome - 135000) * 0.37;
      } else {
        tax = 51638 + (taxableIncome - 190000) * 0.45;
      }
    }
    console.log('2. Tax', tax);

    // write assync function to prepare data for chart



    // const [months, setMonths] = useState([]);
    // const [principalData, setPrincipalData] = useState([]);
    // const [interestData, setInterestData] = useState([]);
    // const [remainingBalanceData, setRemainingBalanceData] = useState([]);
  
  

    // useEffect(() => {
    //   console.log('Preparing data for chart', amortizationPlan);
    //   setMonths(amortizationPlan.map((item) => item.month));
    //   setPrincipalData( amortizationPlan.map((item) => parseFloat(item.principal)));
    //   setInterestData(amortizationPlan.map((item) => parseFloat(item.interest)));
    //   setRemainingBalanceData( amortizationPlan.map((item) =>
    //     parseFloat(item.remainingBalance))
    //   );
    // }, [amortizationPlan]);
 
    // After-tax salary
    const afterTaxSalary = grossSalary - tax;

    console.log('3. after tax salary', afterTaxSalary);
    
    // Calculate dependent expenses
    const dependentexpensesrefdata = [16500, 20400, 24300, 28200, 32100, 38000];
    const dependentexpenses = dependentexpensesrefdata[depedents];
    console.log('4. Dependent Expenses', dependentexpenses);
    // Now calculate Expenses
    const totalExpenses = (livingExpenses + carLoanRepayments + otherLoanRepayments)*12 + creditCardLimit + dependentexpenses;
    console.log('5. Total Expenses', totalExpenses);

    // Net Income
    const NetSeviceableIncome = (afterTaxSalary - totalExpenses*.9)*serviceableIncomeFactor/100;
    console.log('6. Net Serviceable Income', NetSeviceableIncome);

    const monthlypossiblerepayment = NetSeviceableIncome/12;
    setMonthlyPossibleRepayment(monthlypossiblerepayment);
    console.log('7. Monthly Possible Repayment', monthlypossiblerepayment);
    const monthlyInterestRate = (annualInterestRate + interestRateBuffer)/1200;
    console.log('8. Monthly Interest Rate', monthlyInterestRate);
    // Calculate loan amount
    const canborrow = Math.round((monthlypossiblerepayment / monthlyInterestRate) * (1 - Math.pow(1 + monthlyInterestRate, -loanTerm * 12)) / 100) * 100 ;
    console.log('9.Loan Amount', canborrow);
    setLoanAmount(canborrow);


    // Calculate amortization plan

    const principal = canborrow;
    
    const totalPayments = loanTerm * 12;

    const monthlyPayment = monthlypossiblerepayment;
    let balance = principal;
    const plan = [];

    for (let i = 1; i <= totalPayments; i++) {
      var interestPayment = balance * monthlyInterestRate;
      var principalPayment = monthlyPayment - interestPayment;
      balance -= principalPayment;

      plan.push({
        month: i,
        payment: monthlyPayment.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        remainingBalance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }

    setAmortizationPlan(plan);
    console.log('Amortization Plan', plan);
    console.log(loanAmount);
    console.log(amortizationPlan);
    
  };
  


  
  // const AmmortisationChart = () => {
  //   // Prepare data for the chart
    
  // };



  const handleFieldChange = () => {
    console.log('Blur Event');
    // calculateAmortization();
  };

  const handleSalaryChange = (value) => { 
    // console.log (value);
    setSalary (value);
  };

  const handleOtherIncomeChange = (value) => {
    // console.log (value);
    setOtherIncome(value); // Update state with formatted value
  };

  const handlePartnerIncomeChange = (value) => {
    // console.log (value);
    setPartnerIncome(value); // Update state with formatted value
  };

  const handleOtherPartnerIncomeChange = (value) => {
    // console.log (value);
    setOtherPartnerIncome(value); // Update state with formatted value
  };

    

  const theme = useTheme();
  const { mode } = theme.palette;
  
  const verticalSliderStyle = {
    display: 'inline-block',
    height: 300,
    marginInlineStart: 50,
  };
  
  const taxoptions = [
    {
      value: 'Pre-Tax',
      label: 'Pre-Tax',
    },
    {
      value: 'Post-Tax',
      label: 'Post-Tax',
    },
  ];
    
  const onChange = (value) => {
    console.log(value);
    settaxstate(value);
  };

  const salaryoptions = [
    {
      value: 'Annually',
      label: 'Annually',
    },
    {
      value: 'Monthly',
      label: 'Monthly',
    },
  ];
    
  const onSalaryOptionChange = (value) => {
    console.log(value);
    setsalaryFrequency(value);
  };

  
  const partnerChekboxChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setPartner(e.target.checked);
  };

  
  const dependentMarks = {
    0: '0',
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: {
      style: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
      },
      label: <strong>5+</strong>,
    },
  };

  const interestRateMarks = {
    0: '0%',
    13: '13%',
  };

  const serviceabilityMarks = {
    0: '0%',
    100: '100%',
  };

  const loanTermMarks = {
    0: '0',
    40: '40',
  };

  const rateBufferMarks = {
    0: '0%',
    10: '10%',
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

  const dollarformatter = (value) => {

    return `$${value}`;
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
              <div className="w3-bar-item">Your Income Details</div>
            </div>            
          </Grid>

          {/* Second Row */}

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Main Income </Typography>
              <InputNumber
                placeholder="Salary"
                defaultValue={100000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={handleSalaryChange}
                style={{width: '100%'}}
                onBlur={handleFieldChange}
              />
              {/* <Input  onChange={} prefix={<DollarOutlined />} size='small'/> */}
              <Flex gap={'small'} >
                <Cascader size='small' options={taxoptions} onChange={onChange} defaultValue={taxstate} onBlur={handleFieldChange} />
                <Cascader size='small' options={salaryoptions} onChange={onSalaryOptionChange} defaultValue={salaryFrequency} onBlur={handleFieldChange} />
              </Flex>
              <Checkbox onChange={partnerChekboxChange} value={partner} onBlur={handleFieldChange}>Partner Income?</Checkbox>
            </Flex>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Other Income </Typography>
              <InputNumber
                placeholder="Other Income"
                defaultValue={10000}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={handleOtherIncomeChange}
                style={{width: '100%'}}
                onBlur={handleFieldChange}
              />
              {/* <Input placeholder="Salary" onChange={handleOtherIncomeChange} prefix={<DollarOutlined />} size='small'/> */}
              <Flex gap={'small'} >
                <Cascader size='small' options={taxoptions} onChange={onChange} defaultValue={taxstate} onBlur={handleFieldChange} />
                <Cascader size='small' options={salaryoptions} onChange={onSalaryOptionChange} defaultValue={salaryFrequency} onBlur={handleFieldChange} />
              </Flex>
            </Flex>
          </Grid>
            
          {/* Third  Row */}
          {partner && <>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}> Partner Income </Typography>
                <InputNumber
                  placeholder="Salary"
                  defaultValue={50000}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                  onChange={handlePartnerIncomeChange}
                  style={{width: '100%'}}
                  onBlur={handleFieldChange}
                />
                {/* <Input placeholder="Salary" onChange={handlePartnerIncomeChange} prefix={<DollarOutlined />} size='small'/> */}
                <Flex gap={'small'} >
                  <Cascader size='small' options={taxoptions} onChange={onChange} defaultValue={taxstate} onBlur={handleFieldChange}/>
                  <Cascader size='small' options={salaryoptions} onChange={onSalaryOptionChange} defaultValue={salaryFrequency} onBlur={handleFieldChange}/>
                </Flex>
                
              </Flex>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}> Other Income </Typography>
                <InputNumber
                  placeholder="Salary"
                  defaultValue={2000}
                  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                  onChange={handleOtherPartnerIncomeChange}
                  style={{width: '100%'}}
                  onBlur={handleFieldChange}
                />
                {/* <Input placeholder="Salary" onChange={handleOtherPartnerIncomeChange} prefix={<DollarOutlined />} size='small'/> */}
                <Flex gap={'small'} >
                  <Cascader size='small' options={taxoptions} onChange={onChange} defaultValue={taxstate} onBlur={handleFieldChange}/>
                  <Cascader size='small' options={salaryoptions} onChange={onSalaryOptionChange} defaultValue={salaryFrequency} onBlur={handleFieldChange}/>
                </Flex>
              </Flex>
            </Grid>
          </>}

          {/* Fourth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="w3-bar w3-light-grey" >
              <div className="w3-bar-item w3-margin-left w3-circle" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>2</div>
              <div className="w3-bar-item">Your Expenses Details</div>
            </div>            
          </Grid>

          {/* Fifth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Number of Dependents </Typography>
              <ConfigProvider
                theme={SliderTheme}
              >
                <Slider max={5} step={1} tooltip={{open:true } } dots marks={dependentMarks} defaultValue={depedents} value={depedents} onChange={(e)=> setDependents(e)} onBlur={handleFieldChange} />
              </ConfigProvider>
            </Flex>
          </Grid>

          {/* Sixth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="p" gutterBottom fontWeight={'bold'}> Monthly Expenses </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <>
              <ConfigProvider
                theme={SliderTheme}
              >
                <div style={verticalSliderStyle}>
                  <Typography  variant='p' component={'p'} style={{fontWeight: 'bold'  }} color={theme.palette.primary.main}>Value</Typography>
                  
                  <Slider max={30000} step={100} tooltip={{open: true, formatter: dollarformatter}}  vertical  defaultValue={livingExpenses} value={livingExpenses} onChange={(e)=> setLivingExpenses(e)} onBlur={handleFieldChange} />  
                  
                  <Typography variant='caption' component={'p'}  >Living<br/>Expenses</Typography>
                  
                </div>
                <div style={verticalSliderStyle}>
                  <Typography variant='p' component={'p'} style={{fontWeight: 'bold' }} color={theme.palette.primary.main}>Value</Typography>
                  <Slider max={10000} step={100} tooltip={{open: true, formatter: dollarformatter}}  vertical  defaultValue={carLoanRepayments} value={carLoanRepayments} onChange={(e)=> setCarLoanRepayments(e)} onBlur={handleFieldChange} />  
                  <Typography variant='caption' component={'p'}  >Carloan<br/>Repayments</Typography>
                </div>
                <div style={verticalSliderStyle}>
                  <Typography variant='p' component={'p'} style={{fontWeight: 'bold' }} color={theme.palette.primary.main}>Value</Typography>
                  <Slider max={30000} step={100} tooltip={{open: true, formatter: dollarformatter}}  vertical  defaultValue={creditCardLimit} value={creditCardLimit} onChange={(e)=> setCreditCardLimit(e)} onBlur={handleFieldChange} />  
                  <Typography variant='caption' component={'p'}  >Total<br/>Creditcard Limit</Typography>
                </div>
                <div style={verticalSliderStyle}>
                  <Typography variant='p' component={'p'} style={{fontWeight: 'bold' }} color={theme.palette.primary.main}>Value</Typography>
                  <Slider max={50000} step={100} tooltip={{open: true, formatter: dollarformatter}}  vertical  defaultValue={otherLoanRepayments} value={otherLoanRepayments} onChange={(e)=> setOtherLoanRepayments(e)} onBlur={handleFieldChange} />  
                  <Typography variant='caption' component={'p'}  >Other Loan<br/>Repayments</Typography>
                </div>
              </ConfigProvider>
            </>
          </Grid>

          {/* Seventh Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="w3-bar w3-light-grey" >
              <div className="w3-bar-item w3-margin-left w3-circle" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>3</div>
              <div className="w3-bar-item">Your Loan Details</div>
            </div>
          </Grid>

          {/* Eighth Row */}
          <ConfigProvider
            theme={SliderTheme}
          >
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Annual Interest Rate</Typography>
                <Slider onBlur={handleFieldChange} max={13}  tooltip={{open:true, formatter: percentformatter } }  marks={interestRateMarks} defaultValue={annualInterestRate} value={annualInterestRate} onChange={(e)=> setAnnualInterestRate(e)}  />
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Serviceable Income Factor</Typography>
                <Slider onBlur={handleFieldChange} max={100} tooltip={{open:true, formatter: percentformatter } }  marks={serviceabilityMarks} defaultValue={serviceableIncomeFactor} value={serviceableIncomeFactor} onChange={(e)=> setServiceableIncomeFactor(e)}  />
              </Flex>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Flex gap={'small'} vertical>
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Loan Term</Typography>
                <Slider onBlur={handleFieldChange} max={40}  tooltip={{open:true,formatter: yearformatter } }  marks={loanTermMarks} defaultValue={loanTerm} value={loanTerm} onChange={(e)=> setLoanTerm(e)}  />
                <Typography variant="p" gutterBottom fontWeight={'bold'}>Interest Rate Buffer</Typography>
                <Slider  onBlur={handleFieldChange} max={10}  tooltip={{open:true, formatter: percentformatter } }  marks={rateBufferMarks} defaultValue={interestRateBuffer} value={interestRateBuffer} onChange={(e)=> setInterestRateBuffer(e)}  />
              </Flex>
            </Grid>
          </ConfigProvider>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider />
            <br />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>You can borrow up to:</Typography>
            <Typography variant="h3" gutterBottom fontWeight={'bold'}>${loanAmount.toLocaleString('en-US')}</Typography>
            <Typography variant="body" gutterBottom fontWeight={'bold'}>Monthly Repayments:</Typography>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>${Math.round(monthlypossiblerepayment).toLocaleString('en-US')}</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LineChart 
              margin={{ top: 80, right: 80, left: 80, bottom: 50 }}
              width={500}
              height={300}
              xAxis={[{
                data: amortizationPlan.map((item) => item.month),
                label: 'Loan Term (Months)',
                
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
                  data: amortizationPlan.map((item) => parseFloat(item.payment)),
                  label: 'Payment Made',
                  area: true,
                  // stack: 'total',
                  // yAxisId: 'rightAxisId',
                  color: theme.palette.secondary.light,
                  showMark: true,
                  
                },
                {
                  data: amortizationPlan.map((item) => parseFloat(item.interest)),
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
