import React from 'react'
import PopularMovie from '../section'
import { Movie } from '../../models/movie.interface'
import { CardStyled, CardMediaStyled, TypographyStyled } from './movieCard.style'
import { CardActionArea, CardContent } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.style.css';

//type 
interface CardMovieProps {
    movies: Movie[];
    filteredMovies: Movie[];
}

const CardMovie: React.FC<CardMovieProps> = ({ movies, filteredMovies }) => {
    
    return (
        <div>
            <PopularMovie />
            <Swiper
                 slidesPerView={10}
                 spaceBetween={4}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                             320: {
                                 slidesPerView: 2,
                                 spaceBetween: 5
                             },
                             480: {
                                 slidesPerView: 7,
                                 spaceBetween: 5
                             },
                         }}
                 className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide>
                        <CardStyled
                            sx={{ background: '#202123' }}
                            key={movie.id}>
                            <CardActionArea>
                                <CardMediaStyled
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt={movie.title}
                                     />
                                <CardContent sx={{height:'30%'}}>
                                    <TypographyStyled>
                                        {movie.title}
                                    </TypographyStyled>
                                </CardContent>
                            </CardActionArea>
                        </CardStyled>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CardMovie
