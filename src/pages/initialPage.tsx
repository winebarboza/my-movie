import React, { useState } from 'react';
import Header from '../components/header';
import backgroundImg from '../assets/background1.png';
import { BackgroundImg } from './initialPage.style';
import { Container } from '@mui/material';
import { Movie } from '../models/movie.interface';
import CardMovie from '../components/movie-card';
import useGetMovies from './hooks/useGetMovies';
function InitialPage() {

  const movies = useGetMovies("/movie/popular?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3")

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  const handleFilteredItems = (inputValue: string) =>
    setFilteredMovies(movies.filter(movie =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase())
    ));
    if(filteredMovies.length === 0 && filteredMovies.length <7){

    }
  return (
    <div>
      <Container>
        <Header handleFilteredItems={handleFilteredItems} movies={movies} />
      </Container>
      <BackgroundImg backgroundImage={backgroundImg} >
        <Container>
          <CardMovie filteredMovies={filteredMovies} movies={movies} />
        </Container>
      </BackgroundImg>
    </div>
  );
}

export default InitialPage;