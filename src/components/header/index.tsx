import React from 'react'
import LogoHeader from '../../assets/logo.png'
import { HeaderContent, Logo, Div, InputStyled, ButtonStyled } from './header.style'
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: grey
  },
});

function Header() {
  return (
    <HeaderContent>
      <Logo src={LogoHeader} />
      <Div>
        <ThemeProvider theme={theme}>
          <InputStyled color='primary' style={{ color: 'white' }} />
          <ButtonStyled variant="outlined">Buscar</ButtonStyled>
        </ThemeProvider>
      </Div>
    </HeaderContent>
  )
}

export default Header