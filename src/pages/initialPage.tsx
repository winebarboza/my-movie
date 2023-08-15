import React from 'react';
import Header from '../components/header';
import backgroundImg from '../assets/background1.png';
import { BackgroundImg } from './initialPage.Style';
import { Container } from '@mui/material';

function InitialPage() {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <BackgroundImg backgroundImage={backgroundImg} >
        <Container>
           {/* cards */}
        </Container>
      </BackgroundImg>
    </div>
  );
}

export default InitialPage;