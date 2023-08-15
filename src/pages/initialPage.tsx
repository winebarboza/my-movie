import React from 'react';
import Header from '../components/header';
import backgroundImg from '../assets/background1.png';
import { BackgroundImg } from './initialPage.Style';
import { Container } from '@mui/material';
import CardMovie from '../components/movie-card';

function InitialPage() {
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <BackgroundImg backgroundImage={backgroundImg} >
        <Container>
          <CardMovie />
        </Container>
      </BackgroundImg>
    </div>
  );
}

export default InitialPage;