import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import Container from 'components/Container';

const mock = [
  {
    title: 'Say Hello',
    subtitle:
      'Contact us and tell us more about your plans and your goals.',
    description:
      'It all starts with taking about one minute to answer a few simple questions. When you’re done, we’ll meet to talk about your goals, opportunities and next steps, in person or online.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: 'The Shortlist',
    subtitle:
      'We’ll research our panel of banks and lenders to create a shortlist of asset finance solutions that suit you.',
    description:
      'We’ll research our panel of banks and lenders to create a shortlist of asset finance solutions that suit you. We’ll then present these options to you, and you can choose the one that best fits your needs.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    ),
  },
  {
    title: 'Pre-approval',
    subtitle:
      'Once you’ve chosen a lender, we\'ll get you pre-approved.',
    description:
      'Once you’ve chosen a lender, we\'ll get you pre-approved. This means you can start shopping for your new asset with confidence, knowing exactly how much you can spend.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
        />
      </svg>
    ),
  },
  {
    title: 'You go shopping',
    subtitle:
      'Time for you to decide on the equipment you need to run or expand your business.',
    description:
      'Time for you to decide on the equipment you need to run or expand your business. Once you’ve found the right asset, we’ll help you with the paperwork and get you the funds you need.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: 'Secure the finance',
    subtitle: 'We’ll complete all of the paper to work to secure finance from your lender.',
    description:
      'We’ll complete all of the paperwork to secure finance from your lender. We’ll keep you updated every step of the way, and let you know as soon as your loan is approved.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  {
    title: 'You\'re done!',
    subtitle: 'The agreement is finalised, the asset purchased and you can begin to enjoy using it, without a large lump sum outlay.',
    description:
      'The agreement is finalised, the asset purchased and you can begin to enjoy using it, without a large lump sum outlay. We’ll be here to help you with any questions you have, and to provide ongoing support and advice for your next investment or business.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
  
  {
    title: 'Long term support',
    subtitle:
      'Our engagement doesn’t end at settlement. We’ll be here to help you .',
    description:
      'Our engagement doesn’t end at settlement. We’ll be here to help you with any questions you have, and to provide ongoing support and advice for your next investment or business.',
    icon: (
      <svg
        height={24}
        width={24}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const ListWithVerticalLine = () => {
  const theme = useTheme();
  return (
    <Box bgcolor="alternate.main">
      <Container maxWidth={800}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          The loan process.
       
        </Typography>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            padding: 2,
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          {mock.map((item, i) => (
            <ListItem sx={{ alignItems: 'unset' }} key={i}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Box
                    component={Avatar}
                    width={50}
                    height={50}
                    marginBottom={2}
                    bgcolor={theme.palette.primary.main}
                    color={theme.palette.background.paper}
                  >
                    {item.icon}
                  </Box>
                </ListItemIcon>
                <Box
                  display={i === mock.length - 1 ? 'none' : 'flex'}
                  flex={'1 1 0%'}
                  borderRight={`1px solid ${theme.palette.divider}`}
                />
              </Box>
              <Box marginLeft={2}>
                <ListItemText
                  primary={item.title}
                  secondary={item.subtitle}
                  primaryTypographyProps={{ fontWeight: 700 }}
                />
                <Box marginTop={2}>
                  <Typography variant={'subtitle2'}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  );
};

export default ListWithVerticalLine;
