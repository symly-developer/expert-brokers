import React from 'react';
import Grid from '@mui/material/Grid';

import {CalcText} from './components';
import Container from 'components/Container';
import dynamic from 'next/dynamic';
const Form = dynamic(() => import('./components/Form'), { ssr: false });


const Calculator = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={6}>
        <Form />
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
        <CalcText />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
