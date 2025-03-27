'use client'; // This is a client component 👈🏽

/* eslint-disable react/display-name */
import React from 'react';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import createCache from '@emotion/cache';
// import createEmotionServer from '@emotion/server/create-instance';

import Page from '../components/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

/* eslint-disable react/prop-types */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href="https://assets.expertbrokers.com.au/logos/logo-only-black.svg"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="title"
          content="Expert Brokers"
        />
        <title>
          Expert Brokers
        </title>
        <meta
          name="description"
          content="Your Goals Our Expertise | Trusted Mortgage and Loan Brokers serving Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra and Regional Australia"
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          // property="og:image"
          // content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
        />
        <meta
          property="og:title"
          content="Expert Brokers | Your Goals Our Expertise"
        />
        <meta
          property="og:description"
          content="Trusted Mortgage and Loan Brokers serving Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Darwin, Canberra and Regional Australia"
        />
        <meta
          property="og:url"
          content="https://expertbrokers.com.au"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Page>
          {children}
        </Page>
      </body>
    </html>
  );
}
  