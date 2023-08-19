import React from 'react'
import PopularMovie from '../section'
import { Movie } from '../../models/movie.interface'
import { CardStyled, CardMediaStyled, TypographyStyled } from './styles'
import { CardActionArea, CardContent } from '@mui/material'
import { Skeleton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useSearchMovie } from './hooks/useSearchMovie'
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.styles.css';

//type 
interface CardMovieProps {
    movies: Movie[];
    filteredMovies: Movie[];
    inputMovie: string;
}

const CardMovie: React.FC<CardMovieProps> = ({ movies, filteredMovies, inputMovie }) => {

    const moviesFilteredApi = useSearchMovie(inputMovie)
    const combinedMovies = moviesFilteredApi.concat(movies);
    const combinedMovies2 = filteredMovies.concat(combinedMovies);
    return (
        <div>
            <PopularMovie />
            <Swiper
                 direction="horizontal"
                 slidesPerView={10}
                 spaceBetween={4}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                             320: {
                                 direction: 'vertical',
                                 slidesPerView: 1,
                                 spaceBetween: 40
                             },
                             480: {
                                 slidesPerView: 5,
                                 spaceBetween: 5
                             },
                             1366: {  
                                slidesPerView: 7,
                                spaceBetween: 5,
                              },
                         }}
                 className="mySwiper"
            >
                {combinedMovies2.map((movie) => (
                    <SwiperSlide key={movie.id}>
                    <CardStyled sx={{ background: '#202123' }}>
                        <CardActionArea>
                        <Link to={`/movie/${movie.id}`}>
                            <CardMediaStyled
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                            <CardContent sx={{ height: '30%' }}>
                                {movie.title ? (
                                    <TypographyStyled>
                                        {movie.title}
                                    </TypographyStyled>
                                ) : (
                                    <Skeleton height={30} width="80%" />
                                )}
                            </CardContent>
                            </Link>
                        </CardActionArea>
                    </CardStyled>
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CardMovie
