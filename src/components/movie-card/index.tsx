import React from 'react'
import { CardStyled , CardMediaStyled} from './movieCard.Style'
import { CardActionArea, CardContent, Typography} from '@mui/material'
function CardMovie() {
  return (
    <CardStyled>
        <CardActionArea >
            <CardMediaStyled/>
            <CardContent>
                <Typography variant='h6'style={{color: '#CCCCCC'}}>
                    Nome do Filme
                </Typography>
                <Typography variant='subtitle2' style={{color: '#CCCCCC'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique praesentiu. 
                </Typography>
            </CardContent> 
        </CardActionArea>
    </CardStyled>
  )
}

export default CardMovie
 