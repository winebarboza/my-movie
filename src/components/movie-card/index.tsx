import React from 'react'
import { CardStyled, CardMediaStyled, ButtonStyled } from './movieCard.style'
import { CardActionArea, CardActions, CardContent, Typography, Button } from '@mui/material'
import { Movie } from '../../models/movie.interface'

interface CardMovieProps {
    movies: Movie[];
}
const CardMovie: React.FC<CardMovieProps> = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
                <CardStyled key={movie.id}>
                    <CardActionArea >
                       <CardMediaStyled src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <CardContent>
                            <Typography variant='h6' style={{ color: '#CCCCCC' }}>
                                {movie.title}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonStyled size="small">
                                Ver mais
                            </ButtonStyled>
                        </CardActions>
                    </CardActionArea>
                </CardStyled>
            ))}
        </div>

    )
}

export default CardMovie
