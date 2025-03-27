import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const mock = [
  'https://assets.cashcapital.com.au/crousel/1.svg',
  'https://assets.cashcapital.com.au/crousel/2.svg',
  'https://assets.cashcapital.com.au/crousel/3.svg',
  'https://assets.cashcapital.com.au/crousel/4.svg',
  'https://assets.cashcapital.com.au/crousel/5.svg',
  'https://assets.cashcapital.com.au/crousel/1.svg',
  'https://assets.cashcapital.com.au/crousel/2.svg',
  'https://assets.cashcapital.com.au/crousel/3.svg',
  'https://assets.cashcapital.com.au/crousel/4.svg',
  'https://assets.cashcapital.com.au/crousel/5.svg',
  'https://assets.cashcapital.com.au/crousel/1.svg',
  'https://assets.cashcapital.com.au/crousel/2.svg',
  'https://assets.cashcapital.com.au/crousel/3.svg',
  'https://assets.cashcapital.com.au/crousel/4.svg',
  'https://assets.cashcapital.com.au/crousel/5.svg',
  
];

const Partners = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Box>
      <Slider {...sliderOpts}>
        {mock.map((item, i) => (
          <Box maxWidth={150} key={i} marginX={3}>
            <Box
              component="img"
              height={1}
              width={1}
              src={item}
              alt="..."
              sx={{
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Partners;
