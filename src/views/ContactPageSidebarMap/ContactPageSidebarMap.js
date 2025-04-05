'use client';
import React from 'react';
import { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

import { usePathname } from 'next/navigation';
import Main from 'layouts/Main';

import { Form, Hero  } from './components';
import { OurTeam } from '../../commoncomponents';


const ContactPageSidebarMap = () => {
  
  const { pathname, hash } = usePathname();
  
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
      
      <Hero />
      {/* <OurTeam /> */}
      <div id="contact-block">
        <Form />
      </div>
      
    </Main>
  );
};

export default ContactPageSidebarMap;
