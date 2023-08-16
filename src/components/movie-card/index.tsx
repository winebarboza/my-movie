import React from 'react'
import { CardStyled, CardMediaStyled } from './movieCard.Style'
import { CardActionArea, CardContent, Typography } from '@mui/material'
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
                        <CardMediaStyled src={movie.poster_path}/>
                        <CardContent>
                            <Typography variant='h6' style={{ color: '#CCCCCC' }}>
                                {movie.title}
                            </Typography>
                            <Typography variant='subtitle2' style={{ color: '#CCCCCC' }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique praesentiu.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </CardStyled>
            ))}
        </div>

    )
}

export default CardMovie
