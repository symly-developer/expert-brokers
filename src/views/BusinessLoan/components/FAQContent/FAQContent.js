import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={0}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const FAQContent = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={' '}
          items={[
            {
              'title': 'Can you help me understand my borrowing capacity?',
              'subtitle': 'Of course! Borrowing capacity refers to how much you can borrow from a lender. To get an estimate of your borrowing capacity go to our calculator: How much can I borrow? If you want to get an in depth review of your borrowing capacity, get in touch today.'
            },
            {
              'title': 'How will you decide which loan is best suited to my circumstances?',
              'subtitle': 'With over 60 lenders, you and I are spoiled for choice. I narrow my search down through talking to you about your wants and needs. I will show you your options, listing the pros and cons of each loan and ultimately we will come to a decision together.'
            },
            
          ]}
        />
      </Box>
     
      
    </Box>
  );
};

export default FAQContent;
