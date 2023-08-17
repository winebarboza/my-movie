import React from 'react'
import PopularMovie from '../section'
import { Movie } from '../../models/movie.interface'
import { CardStyled, CardMediaStyled, TypographyStyled } from './movieCard.style'
import { CardActionArea, CardContent } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './swiper.style.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

//type 
interface CardMovieProps {
    movies: Movie[];
}

const CardMovie: React.FC<CardMovieProps> = ({ movies }) => {
    return (
        <div>
            <PopularMovie />
            <Swiper
                slidesPerView={6}
                grid={{ rows: 2}}
                spaceBetween={10}
                pagination={{clickable: true}}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    480: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    },
                }}
                modules={[Grid, Pagination]}
                className="mySwiper swiper-direction-vertical"
            >
                {movies.map((movie) => (
                    <SwiperSlide>
                        <CardStyled
                            sx={{ background: '#202123' }}
                            key={movie.id}>
                            <CardActionArea >
                                <CardMediaStyled
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    alt={movie.title} />
                                <CardContent>
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
