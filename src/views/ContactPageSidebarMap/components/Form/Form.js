/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import {post} from '@aws-amplify/api-rest';

import Container from 'components/Container';

const australianPhoneRegex = /^(\+61|0)[23478]\d{8}$/;

const validationSchema = yup.object({
  mobile: yup
    .string()
    .trim()
    .matches(australianPhoneRegex, 'Please enter a valid Australian phone number')
    .required('Please specify your mobile number'),
  firstName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .required('Please specify your message'),
});

const Contact = () => {
  const theme = useTheme();
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const LeftSide = () => {
    const initialValues = {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      message: '',
    };

    const onSubmit = (values, { setSubmitting, resetForm }) => {
      // return values;
      
      handleContactNow(values);
      setTimeout(() => {
        // Reset form values to initial state
        resetForm();
        setSubmitSuccess(true);

        // Stop submitting state
        setSubmitting(false);
      }, 1500);

    };

    const formik = useFormik({
      initialValues,
      validationSchema: validationSchema,
      onSubmit,
    });

    async function handleContactNow(values) {
      console.log(values);
      try {
        const restOperation =  post({
          apiName: 'cashcapitalgeneralapis',
          path: '/submitcontactform',
          options: {
            body: values,
          }
        });
    
        const { body } = await restOperation.response;
        const response = await body.json();
    
        console.log('POST call succeeded');
        console.log(response);
      } catch (e) {
        // console.log('POST call failed: ', JSON.parse(e.response.body));
        console.log('POST call failed: ', e.response.body);
      }
    }

    return (
      <Box>
        <Box marginBottom={4}>
          <Typography variant={'h3'} sx={{ fontWeight: 700 }} gutterBottom>
            Contact us
          </Typography>
          <Typography color="text.secondary">
            Whether you have questions, need advice, or want to start your loan journey, we’re just a call, message, or form submission away!.
          </Typography>
        </Box>
        <Box>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="First name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="firstName"
                  fullWidth
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ height: 54 }}
                  label="Last name"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="lastName"
                  fullWidth
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Email"
                  type="email"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="email"
                  fullWidth
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ height: 54 }}
                  label="Mobile"
                  type="text"
                  placeholder='+614...'
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="mobile"
                  fullWidth
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={6}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  name="message"
                  fullWidth
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  sx={{ height: 54, minWidth: 150 }}
                  variant="contained"
                  color="primary"
                  size="medium"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
              {submitSuccess && <Grid item xs={12}>
                <Typography color="secondary.main" >
                  Thank you, Your message has been submitted. We'll get back to you in 1 business day.
                </Typography>
              </Grid>}
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <Typography component="p" variant="body2" align="left">
                    By clicking on "submit" you agree to our{' '}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Privacy Policy
                    </Box>
                    ,{' '}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Data Policy
                    </Box>{' '}
                    and{' '}
                    <Box
                      component="a"
                      href=""
                      color={theme.palette.text.primary}
                      fontWeight={'700'}
                    >
                      Cookie Policy
                    </Box>
                    .
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    );
  };

  const RightSide = () => {
    return (
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=9/758 Blackburn Road Clayton VIC 3168&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{
          minHeight: 300,
          filter:
            theme.palette.mode === 'dark'
              ? 'grayscale(0.5) opacity(0.7)'
              : 'none',
        }}
      />
    );
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    >
      <Container paddingX={0} paddingY={0} maxWidth={{ sm: 1, md: 1236 }}>
        <Box
          display={'flex'}
          flexDirection={{ xs: 'column', md: 'row' }}
          position={'relative'}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            width={1}
            order={{ xs: 2, md: 1 }}
          >
            <Container>
              <LeftSide />
            </Container>
          </Box>
          <Box
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 50%' },
              position: 'relative',
              maxWidth: { xs: '100%', md: '50%' },
              minHeight: { xs: 300, md: 600 },
              order: { xs: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                width: { xs: 1, md: '50vw' },
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    overflow: 'hidden',
                    left: '0%',
                    width: 1,
                    height: 1,
                    position: { xs: 'relative', md: 'absolute' },
                  }}
                >
                  <RightSide />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default Contact;
