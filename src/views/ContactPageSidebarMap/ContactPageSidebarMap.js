import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Main from 'layouts/Main';

import { Form, Hero  } from './components';
import { OurTeam } from '../../commoncomponents';


const ContactPageSidebarMap = () => {
  
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  
  
  

  return (
    <Main colorInvert={true}>
      {/* <Helmet
        title="Contact Us at Cash Capital"
        description="Contact Cash Capital for all your loan needs. We are the best in the business when it comes to loans."
        link={'/contact-sidebar-map'}
        keywords={''}
        imageCard={'https://assets.cashcapital.com.au/logo192.png'}
        largeTwitterCard={false}
        addPostfixTitle={false}
        noIndex={false}

      ></Helmet> */}
      <Hero />
      <OurTeam />
      <div id="contact-block">
        <Form />
      </div>
      
    </Main>
  );
};

export default ContactPageSidebarMap;
