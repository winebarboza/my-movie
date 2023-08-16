import React from 'react';
import Header from '../components/header';
import backgroundImg from '../assets/background1.png';
import { BackgroundImg } from './initialPage.style';
import { Container } from '@mui/material';
import CardMovie from '../components/movie-card';
import useGetMovies from './hooks/useGetMovies';
function InitialPage() {
  const movies = useGetMovies("/movie/popular?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3")
  return (
    <div>
      <Container>
        <Header />
      </Container>
      <BackgroundImg backgroundImage={backgroundImg} >
        <Container>
          <CardMovie movies={movies} />
        </Container>
      </BackgroundImg>
    </div>
  );
}

export default InitialPage;