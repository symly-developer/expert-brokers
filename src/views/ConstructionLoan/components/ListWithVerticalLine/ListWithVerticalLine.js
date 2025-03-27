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
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import Filter5Icon from '@mui/icons-material/Filter5';
import Filter6Icon from '@mui/icons-material/Filter6';


const mock = [
  {
    title: 'Have a business plan',
    subtitle:
      'Having a solid business plan is key to getting your business loan approved.',
    description:
      'Having a solid business plan is key to getting your business loan approved. Banks and lenders will ask questions like “Why are you borrowing money?” or “What do you plan to do with it?”. We can help you gain a solid understanding of your business strategies and objectives to help answer these questions and get your business loan approved',
    icon: (
      <Filter1Icon />
    ),
  },
  {
    title: 'Determine your risk profile',
    subtitle:
      'This is where your credit history comes into play.',
    description:
      'This is where your credit history comes into play. We will delve into both your personal and business credit history. Once we know what we are working with, we can work together to paint your business in a favourable light.',
    icon: (
      <Filter2Icon />
    ),
  },
  {
    title: 'Be realistic',
    subtitle:
      'Borrowing the maximum amount of money your deposit can afford you isn’t always the right move.',
    description:
      'Borrowing the maximum amount of money your deposit can afford you isn’t always the right move. We’ll deep dive into your past financial statements to help understand your future cash flow forecasts to determine your monthly repayments.',
    icon: (
      <Filter3Icon />
    ),
  },
  {
    title: 'Understand what\'s on offer',
    subtitle:
      'There are many different loan types to suit your business needs.',
    description:
      'There are many different loan types to suit your business needs. We\'ll help you understand the benefits and downfalls of secured or unsecured variable or fixed-rate, principal and interest or interest only loans.',
    icon: (
      <Filter4Icon />
    ),
  },
  {
    title: 'Apply',
    subtitle: 'Once we’ve worked through these steps, we can submit your business loan application!',
    description:
      'Once we’ve worked through these steps, we can submit your business loan application! We’ll help you gather all the necessary documentation and submit your application to the lender that best suits your needs.',
    icon: (
      <Filter5Icon />
    ),
  },
  
  
  {
    title: 'Long term support',
    subtitle:
      'Our engagement doesn’t end at settlement. We’ll be here to help you .',
    description:
      'Our engagement doesn’t end at settlement. We’ll be here to help you with any questions you have, and to provide ongoing support and advice for your next investment or business.',
    icon: (
      <Filter6Icon />
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
