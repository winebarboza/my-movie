import styled from 'styled-components'
import { Card, Typography } from '@mui/material'

export const CardStyled = styled(Card)`
    width: 14rem;
    height: 15rem;
    display: flex;
    @media (max-width: 480px) {
         height:30rem;
        }
`
export const TypographyStyled = styled(Typography)`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    color: gray;
`

export const CardMediaStyled = styled.img`
    width: 100%;
    height: 70%;
`
