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
      title={'Getting Started'}
      items={[
        {
          title: 'What is the difference between a bank and a broker?',
          subtitle:
            'Banks usually offer only their own financial products, limiting your options. Mortgage brokers, however, work with multiple lenders and can compare different loan products to find one that suits your specific needs. Brokers serve your interests and act as a bridge between you and lenders.',
        },
        {
          title: 'What are the advantages of using a mortgage broker?',
          subtitle:
            'Mortgage brokers have deep market knowledge and tools to help you find competitive interest rates and the right loan features. They save you time, provide access to a variety of loan products, and guide you through the entire process from application to settlement.',
        },
        {
          title: 'Should I get pre-approval before looking to purchase?',
          subtitle:
            'Yes, pre-approval gives you a clear budget and signals to sellers that you are a serious buyer. It helps you move quickly when the right property appears and gives you an edge in competitive markets.',
        },
        {
          title: 'What is the comparison rate?',
          subtitle:
            'The comparison rate reflects the true cost of a loan, incorporating both the interest rate and most fees and charges. It helps borrowers accurately compare loan products by presenting a single percentage figure.',
        },
        {
          title: 'Do I need to pay stamp duty?',
          subtitle:
            'Yes, most property purchases in Australia require payment of stamp duty, which varies by state or territory, property price, and whether you are a first home buyer. Some exemptions or concessions may apply.',
        },
        {
          title: 'What is a first home owner grant (FHOG)?',
          subtitle:
            'The FHOG is a government incentive offered to eligible first home buyers, usually applied towards the purchase or construction of a new home. Grant amounts and criteria vary across states.',
        },
      ]}
    />
  </Box>

  <Box marginBottom={6}>
    <FaqGroupItem
      title={'Loan Types & Features'}
      items={[
        {
          title: 'What’s the difference between Fixed rate, Variable rate and Line of Credit?',
          subtitle:
            'A fixed rate loan keeps your interest rate constant for a set period, offering stability. A variable rate loan can change over time, often offering flexibility and additional features like redraws and extra repayments. A line of credit lets you borrow against the equity in your property and only pay interest on the amount used.',
        },
        {
          title: 'What is bridging finance?',
          subtitle:
            'Bridging finance helps you purchase a new property before selling your existing one. It usually involves interest-only repayments during the bridging period and is paid off once your old home is sold.',
        },
        {
          title: 'Does lending capacity vary among banks?',
          subtitle:
            'Yes. Each lender has its own assessment criteria based on risk appetite, income type, expenses, and other financial commitments. That’s why your borrowing capacity can vary significantly between banks.',
        },
        {
          title: 'Do I need a conveyancer?',
          subtitle:
            'Yes, a conveyancer is crucial to handle all legal aspects of buying or selling a property. They ensure the property title is transferred correctly and manage all necessary documentation and checks.',
        },
        {
          title: 'Can I refinance my existing home loan?',
          subtitle:
            'Yes, refinancing allows you to switch to a new lender or loan product to get a better rate, access equity, or consolidate debt. It’s essential to weigh costs like exit and application fees before refinancing.',
        },
        {
          title: 'What is a split loan?',
          subtitle:
            'A split loan lets you divide your mortgage into both fixed and variable portions. This offers a balance of repayment certainty and flexibility to make extra payments or access features like redraws.',
        },
      ]}
    />
  </Box>

  <Box marginBottom={6}>
    <FaqGroupItem
      title={'Advanced Lending Questions'}
      items={[
        {
          title: 'What is Lenders’ Mortgage Insurance (LMI)?',
          subtitle:
            'LMI protects the lender—not the borrower—when the loan-to-value ratio (LVR) is high (usually above 80%). It allows you to buy with a smaller deposit, but it adds an extra cost to your loan.',
        },
        {
          title: 'Can a guarantor help me avoid LMI?',
          subtitle:
            'Yes. A guarantor—usually a family member—can use the equity in their property to reduce your LVR, potentially avoiding LMI. This option comes with financial responsibilities for the guarantor.',
        },
        {
          title: 'What is the difference between pre-approval and unconditional approval?',
          subtitle:
            'Pre-approval is an indication you qualify for a loan based on initial checks. Unconditional approval means the lender has fully verified your documents and approved your loan application.',
        },
        {
          title: 'How do construction loans work?',
          subtitle:
            'Construction loans release funds in stages aligned with the building process. You only pay interest on the amount drawn down. Each stage—like slab, frame, lock-up—must be certified before funds are released.',
        },
        {
          title: 'What is a loan-to-value ratio (LVR)?',
          subtitle:
            'LVR is the percentage of the property value that you’re borrowing. A higher LVR (above 80%) typically requires LMI. A lower LVR often means better interest rates and less risk to lenders.',
        },
      ]}
    />
  </Box>

  <Box>
    <FaqGroupItem
      title={'Saving, Credit & Risk'}
      items={[
        {
          title: 'What are genuine savings?',
          subtitle:
            'Genuine savings are funds you have saved over time, typically in your account for 3+ months. Lenders prefer borrowers who demonstrate saving discipline when assessing home loan applications.',
        },
        {
          title: 'What is the difference between an offset account and redraw facility?',
          subtitle:
            'An offset account reduces interest on your loan by offsetting your savings against the loan balance. A redraw facility allows you to withdraw extra repayments made on your loan.',
        },
        {
          title: 'What is cross-collateralisation?',
          subtitle:
            'This is when multiple properties are used to secure one or more loans. It can increase risk and limit flexibility if you decide to sell or refinance one of the properties.',
        },
        {
          title: 'Will my credit history affect my loan options?',
          subtitle:
            'Yes. A good credit score helps you access better interest rates and products. Lenders assess your repayment history, credit enquiries, and defaults when evaluating your application.',
        },
        {
          title: 'Can I use a personal loan for a home deposit?',
          subtitle:
            'In most cases, lenders prefer deposits made from genuine savings. Using a personal loan for a deposit can reduce your borrowing power or result in the loan being declined.',
        },
        {
          title: 'What happens if I miss a mortgage repayment?',
          subtitle:
            'Missing repayments can incur late fees, affect your credit score, and place you at risk of default. If you’re struggling, contact your lender early to discuss hardship options.',
        },
      ]}
    />
  </Box>
</Box>
  );
};

export default Content;
