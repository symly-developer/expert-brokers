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
      <Box marginBottom={2}>
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

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={''}
          items={[
            {
              title: 'What is a pre-approval?',
              subtitle:
                'Pre-approval is when a lender assesses your current financial situation and indicates how much they may be willing to lend you. While it doesn’t guarantee a loan, and you are under no obligation to take it, pre-approval helps narrow your property search, boosts your confidence in making offers, and shows sellers you are serious about buying. Keep in mind, if your circumstances change, the lender may reconsider the final approval.',
            },
            {
              title: 'How long does pre-approval last?',
              subtitle:
                'Typically, pre-approval is valid for two to three months, but this can vary depending on the lender. The expiry date is mentioned in your pre-approval documents. If it\'s nearing expiration, reach out to your broker. Since they already have your information on file, they can quickly help you apply for an extension or a new pre-approval if needed.',
            },
            {
              title: 'What are the limitations of pre-approval?',
              subtitle:
                'Pre-approvals are conditional and based on your financial circumstances at the time of application. This means approval isn\'t guaranteed. We will work closely with you to maximize your chances of final approval. However, if there are any significant changes in your situation, let us know, and we\'ll reassess how it may affect your loan application. Additionally, some lenders may impose restrictions on the types of properties they will finance. Examples of property limitations include: Serviced apartments, High-density inner-city properties (especially with less than a 20% deposit), Properties under company or commercial titles, Units smaller than 50sqm.',
            },
            {
              title: 'How do interest rate changes affect pre-approval?',
              subtitle:
                'Small changes in interest rates are unlikely to impact your pre-approval since lenders typically account for minor fluctuations when assessing your application. However, significant shifts in rates or changes to your income could affect your borrowing capacity and loan approval. To avoid surprises, it\'s wise to consult your broker before making an offer on a property and to ensure you have a finance clause in your purchase contract.',
            },
            {
              title: 'What is the next step after pre-approval?',
              subtitle:
                'Once you\'ve found a property within your budget, it\'s time to make an offer. Contact your broker to confirm that the property meets the lender\'s criteria and to get a free property report. This report provides past sales data and insights on similar nearby properties, helping you gauge the value of your chosen property. The process for making an offer depends on the type of sale. For auctions, bids are unconditional and legally binding. For private sales, when you\'re asked to sign a contract, consult your solicitor or conveyancer to review the terms, including cooling-off periods and inspections. It\'s also recommended to allow for about ten days to finalize loan approval, but speak with your broker for guidance. Inform the real estate agent that you have pre-approval, which may strengthen your position during negotiations.',
            },
            {
              title: 'What happens after my offer was accepted?',
              subtitle:
                'Congratulations on having your bid accepted! The next steps are crucial to prepare for settlement. Contact your broker to discuss the process and what comes next. Typically, you’ll need to pay a deposit to secure the property. At auctions, this is usually 10% and non-refundable. For private sales, the deposit might be up to 25% of the purchase price. Ensure the deposit is ready and follow the steps outlined in your contract with the help of your solicitor or conveyancer. Once your broker has a copy of the signed contract, they will work with the lender to finalize and formally approve your loan, ensuring your finances are prepared for the settlement date.',
            },
          ]}
        />
      </Box>
     
    </Box>
  );
};

export default Content;
