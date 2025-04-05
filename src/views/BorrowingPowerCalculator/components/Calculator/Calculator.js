import React from 'react';
import Grid from '@mui/material/Grid';
import dynamic from 'next/dynamic';
import {CalcText} from './components';
import Container from 'components/Container';
const Form = dynamic(() => import('./components/Form'), { ssr: false });

const Calculator = () => {
  return (
    <Container>
      <Grid container spacing={{ xs: 4, md: 8 }}>
        <Grid item xs={12} md={6}>
          <CalcText />
        </Grid>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Calculator;
