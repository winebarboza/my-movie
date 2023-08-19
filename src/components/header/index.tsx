import React, { useState } from 'react'
import LogoHeader from '../../assets/logo.png'
import { Movie } from '../../models/movie.interface';
import { HeaderContent, Logo, Div, InputStyled, ButtonStyled } from './styles'
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: grey
  },
});

interface HeaderProps {
  movies: Movie[];
  handleFilteredItems: (value: string) => void;
};

const Header: React.FC<HeaderProps> = ({ movies, handleFilteredItems }) => {

  let [inputValue, setInputValue] = useState('');

  const handleInputvalue = (event: any) => {
    setInputValue(event.target.value)
  }

  return (
    <HeaderContent>
        <Logo src={LogoHeader} onClick={() => window.location.reload()}/>
      <Div>
        <ThemeProvider theme={theme}>
          <InputStyled
            type='text'
            name='movie'
            value={inputValue}
            onChange={handleInputvalue}
            color='primary'
            style={{ color: 'white' }} />
          <ButtonStyled variant="outlined" onClick={() => handleFilteredItems(inputValue)}>Buscar</ButtonStyled>
        </ThemeProvider>
      </Div>
    </HeaderContent>
  )
}

export default Header