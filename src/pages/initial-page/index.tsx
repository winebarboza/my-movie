import React, { useState } from 'react';
import Header from '../../components/header';
import backgroundImg from '../../assets/background1.png';
import { BackgroundImg } from './styles';
import { Container } from '@mui/material';
import { Movie } from '../../models/movie.interface';
import CardMovie from '../../components/movie-card';
import useGetMovies from '../hooks/useGetMovies';
function InitialPage() {

  const movies = useGetMovies("/movie/popular?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3")

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [inputMovie, setInputMovie] = useState("");

  const handleFilteredItems = (inputValue: string) => {
    setInputMovie(inputValue)
    setFilteredMovies(movies.filter(movie =>
      movie.title.toLowerCase().includes(inputValue.toLowerCase())
    ))
  };


  return (
    <div>
      <Container>
        <Header handleFilteredItems={handleFilteredItems} movies={movies} />
      </Container>
      <BackgroundImg backgroundImage={backgroundImg} >
        <Container>
          <CardMovie filteredMovies={filteredMovies} movies={movies} inputMovie={inputMovie} />
        </Container>
      </BackgroundImg>
    </div>
  );
}

export default InitialPage;