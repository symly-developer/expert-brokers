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
// import { LineChart } from '@mui/x-charts/LineChart';

// import { DollarOutlined } from '@ant-design/icons';
import { 
  Flex, 
  InputNumber,
  Cascader, 
  
  // Slider,
  
} from 'antd';
import { Stack } from '@mui/material';

// import { FacebookOutlined } from '@mui/icons-material';



const Form = () => {
  
  
  const [stateName, setStateName] = useState('NSW');
  const [propertyValue, setPropertyValue] = useState(1000000);
  const [firstHomeBuyer, setFirstHomeBuyer] = useState('false');
  
  
  const [propertyType, setPropertyType] = useState('Residential');
  const [stampDuty, setStampDuty] = useState(0);
  const [mortgageRegistration, setMortgageRegistration] = useState(0);
  const [transferFee, setTransferFee] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
 
  useEffect(() => {
    {
     
      stampDutyCalculator();
    }
  }, [
    stateName,
    propertyValue,
    firstHomeBuyer,
    propertyType,
  ]);
  

  const stampDutyCalculator = () => {
    // Define mortgage registration fees, transfer fees, and stamp duty rates for all states
    const stateFees = {
      NSW: {
        mortgageRegistration: 154,
        transferBaseFee: 154,
        stampDutyRates: [
          { start: 0, threshold: 17000, base: 0, rate: 0.0125 },
          { start: 17001, threshold: 36000, base: 212, rate: 0.015 },
          { start: 3601, threshold: 97000, base: 497, rate: 0.0175 },
          { start: 97001, threshold: 364000, base: 1564, rate: 0.035 },
          { start: 364001, threshold: 1212000, base: 10909, rate: 0.045 },
          { start: 1212001, threshold: Infinity, base: 49069, rate: 0.055 }
        ],
        firstHomeBuyerExemption: propertyValue <= 1000000 ? 0 : null,
      },
      VIC: {
        mortgageRegistration: 119,
        transferBaseFee: 119,
        stampDutyRates: [
          { start: 0, threshold: 25000, base: 0, rate: 0.014 },
          { start: 25001, threshold: 130000, base: 350, rate: 0.024 },
          { start: 130001, threshold: 960000, base: 2870, rate: 0.06 },
          { start: 0, threshold: 2000000, base: 0, rate: 0.055 },
          { start: 2000001, threshold: Infinity, base: 110000, rate: 0.065 }
        ],
        firstHomeBuyerExemption: propertyValue <= 600000 ? 0 : null,
      },
      QLD: {
        mortgageRegistration: 195,
        transferBaseFee: 195,
        stampDutyRates: [
          { start: 0, threshold: 5000, base: 0, rate: 0.015 },
          { start: 5001, threshold: 75000, base: 1050, rate: 0.035 },
          { start: 75001, threshold: 540000, base: 17325, rate: 0.045 },
          { start: 540001, threshold: 1000000, base: 38025, rate: 0.0575 },
          { start: 1000001, threshold: Infinity, base: 150000, rate: 0.065 }
        ],
        firstHomeBuyerExemption: propertyValue <= 550000 ? 0 : null,
      },
      SA: {
        mortgageRegistration: 180,
        transferBaseFee: 180,
        stampDutyRates: [
          { start: 0, threshold: 12000, base: 0, rate: 0.01 },
          { start: 12001, threshold: 30000, base: 120, rate: 0.02 },
          { start: 30001, threshold: 50000, base: 480, rate: 0.03 },
          { start: 50001, threshold: 100000, base: 1080, rate: 0.035 },
          { start: 100001, threshold: 200000, base: 2830, rate: 0.04 },
          { start: 200001, threshold: 500000, base: 11330, rate: 0.05 },
          { start: 500001, threshold: Infinity, base: 21330, rate: 0.055 }
        ],
        firstHomeBuyerExemption: null, // No full exemption
      },
      WA: {
        mortgageRegistration: 181,
        transferBaseFee: 181,
        stampDutyRates: [
          { start: 0, threshold: 120000, base: 0, rate: 0.019 },
          { start: 120001, threshold: 150000, base: 2280, rate: 0.0285 },
          { start: 150001, threshold: 360000, base: 3135, rate: 0.038 },
          { start: 360001, threshold: 725000, base: 11115, rate: 0.0475 },
          { start: 725001, threshold: Infinity, base: 28453, rate: 0.0515 }
        ],
        firstHomeBuyerExemption: propertyValue <= 430000 ? 0 : null,
      },
      ACT: {
        mortgageRegistration: 157,
        transferBaseFee: 157,
        stampDutyRates: [
          { start: 0,threshold: 260000, base: 0, rate: 0.01 },
          { start: 260001,threshold: 300000, base: 2600, rate: 0.02 },
          { start: 300001,threshold: 500000, base: 3200, rate: 0.035 },
          { start: 500001,threshold: 750000, base: 9500, rate: 0.045 },
          { start: 750001,threshold: Infinity, base: 20000, rate: 0.055 }
        ],
        firstHomeBuyerExemption: propertyValue <= 500000 ? 0 : null,
      },
      NT: {
        mortgageRegistration: 145,
        transferBaseFee: 145,
        stampDutyRates: [
          { start: 0,threshold: 525000, base: 0, rate: 0.045 },
          { start: 525001,threshold: 3000000, base: 23625, rate: 0.0575 },
          { start: 3000001,threshold: Infinity, base: 150000, rate: 0.065 }
        ],
        firstHomeBuyerExemption: null, // No exemption
      },
      TAS: {
        mortgageRegistration: 132,
        transferBaseFee: 132,
        stampDutyRates: [
          { start: 0,threshold: 3000, base: 50, rate: 0.0175 },
          { start: 3001,threshold: 25000, base: 435, rate: 0.0225 },
          { start: 25001 ,threshold: 75000, base: 1560, rate: 0.035 },
          { start: 75001,threshold: 375000, base: 5935, rate: 0.04 },
          { start: 375001,threshold: Infinity, base: 27810, rate: 0.045 }
        ],
        firstHomeBuyerExemption: propertyValue <= 500000 ? 0 : null,
      }
    };

    

    let { mortgageRegistration, transferBaseFee, stampDutyRates, firstHomeBuyerExemption } = stateFees[stateName];


    // Calculate Stamp Duty
    let stampDuty = 0;
    for (let bracket of stampDutyRates) {
      if (propertyValue <= bracket.threshold) {
        console.log('bracket', bracket);
        stampDuty = bracket.base + (propertyValue - bracket.start ) * bracket.rate;
        break;
      }
    }
    
    console.log('stampDuty-step-1', stampDuty);

    // Apply First Home Buyer Exemption if applicable
    if ((firstHomeBuyer[0] === 'true') && (firstHomeBuyerExemption !== null)) {
      stampDuty = firstHomeBuyerExemption;
    }

    console.log('stampDuty-step-2', stampDuty);

    // Adjust for Investment Properties
    if (propertyType == 'Investment') {
      stampDuty *= 1.05;
    }
    console.log('stampDuty step-3', stampDuty);




    setStampDuty(stampDuty);
    setMortgageRegistration(mortgageRegistration);
    setTransferFee(transferBaseFee);
    setTotalCost(stampDuty + mortgageRegistration + transferBaseFee);
   
  };

  const firsthomebuyeroptions = [
    {
      value: 'false',
      label: 'No',
    },
    {
      value: 'true',
      label: 'Yes',
    },
  ];

  const typeOptions = [
    {
      value: 'Residential',
      label: 'Primary Residence',
    },
    {
      value: 'Investment',
      label: 'Investment Property',
    },
  ];

  const stateOptions = [
    {
      value: 'NSW',
      label: 'New South Wales',
    },
    {
      value: 'VIC',
      label: 'Victoria',
    },
    {
      value: 'QLD',
      label: 'Queensland',
    },
    {
      value: 'SA',
      label: 'South Australia',
    },
    {
      value: 'WA',
      label: 'Western Australia',
    },
    {
      value: 'ACT',
      label: 'Australian Capital Territory',
    },
    {
      value: 'NT',
      label: 'Northern Territory',
    },
    {
      value: 'TAS',
      label: 'Tasmania',
    },
  ];
  

   
  const theme = useTheme();
  const { mode } = theme.palette;
  
  
  



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
              <div className="w3-bar-item">Your Details</div>
            </div>            
          </Grid>

          {/* Second Row */}

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Flex gap={'small'} vertical>
              <Typography variant="p" gutterBottom fontWeight={'bold'}> Property Value </Typography>
              <InputNumber
                placeholder="Property Value"
                defaultValue={propertyValue}
                formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value?.replace(/\$\s?|(,*)/g, '')}
                onChange={(e)=> setPropertyValue(e)}
                style={{width: '100%'}}
                // onBlur={handleFieldChange}
              />

              <Typography variant="p" gutterBottom fontWeight={'bold'}>State / Territory</Typography>
              <Cascader size='small' options={stateOptions} defaultValue={stateName} onChange={(e)=> setStateName(e)} />

              <Typography variant="p" gutterBottom fontWeight={'bold'}>Property Type</Typography>
              <Cascader size='small' options={typeOptions} defaultValue={propertyType} onChange={(e)=> setPropertyType(e)} />

              <Typography variant="p" gutterBottom fontWeight={'bold'}>First Home Buyer</Typography>
              <Cascader size='small' options={firsthomebuyeroptions} defaultValue={firstHomeBuyer} onChange={(e)=> setFirstHomeBuyer(e)} />
 
              
            </Flex>
          </Grid>

       
            
          
          {/* Fourth Row */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div className="w3-bar w3-light-grey" >
              <div className="w3-bar-item w3-margin-left w3-circle" style={{backgroundColor: theme.palette.primary.main, color: theme.palette.primary.contrastText}}>2</div>
              <div className="w3-bar-item">Your Stamp Duty Explained</div>
            </div>            
          </Grid>

          {/* Fifth Row */}
         

          
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Divider />
            <br />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Total Duty:</Typography>
            <Typography variant="h3" gutterBottom fontWeight={'bold'}>${Math.round(totalCost).toLocaleString('en-US')} </Typography>
            <Divider />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Stamp Duty:</Typography>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>${Math.round(stampDuty).toLocaleString('en-US')}</Typography>
            <Divider />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Mortgage Registration:</Typography>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>${Math.round(mortgageRegistration).toLocaleString('en-US')}</Typography>
            <Divider />
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>Transfer Fee:</Typography>
            <Typography variant="h6" gutterBottom fontWeight={'bold'}>${Math.round(transferFee).toLocaleString('en-US')}</Typography>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography component="p" variant="caption" align="left" color={theme.palette.text.secondary}>
              Note: The results from this calculator should be used as an indication only. Please visit your state's revenue office for latest changes to stamp duty rates.
              <table style={{width: '100%'}}>
                <tr>
                  <td>ACT</td>
                  <td>(02) 6207 0028</td>
                  <td>SA</td>
                  <td>08 8226 3750</td>
                </tr>
                <tr>
                  <td>NSW</td>
                  <td>1300 139 814</td>
                  <td>TAS</td>
                  <td>03 6166 4600</td>
                </tr>
                <tr>
                  <td>NT</td>
                  <td>1300 305 353</td>
                  <td>VIC</td>
                  <td>13 21 61</td>
                </tr>
                <tr>
                  <td>QLD</td>
                  <td>1300 300 734</td>
                  <td>WA</td>
                  <td>08 9262 1400</td>
                </tr>
              </table>
            </Typography>
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
