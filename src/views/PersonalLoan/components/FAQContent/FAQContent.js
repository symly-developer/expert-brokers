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
              'title': 'What can I use a personal loan for?',
              'subtitle': 'Personal loans can be used for almost anything. The two most purposes are for paying down existing debt at a lower rate, also known as refinancing or credit card consolidation, or for making a purchase when you don’t have the money currently available. Examples include  refinancing credit card debt, financing home improvements, buying a car, financing your wedding or paying for a funeral.'
            },
            {
              'title': 'Do I need pre-approval for a personal loan?',
              'subtitle': 'It’s always good to go through a pre-approval process so you know where you stand.  Getting a pre-approval costs nothing.'
            },
            
          ]}
        />
      </Box>
     
      
    </Box>
  );
};

export default FAQContent;
