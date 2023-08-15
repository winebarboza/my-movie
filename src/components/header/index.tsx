import React from 'react'
import LogoHeader from '../../assets/logo.png'
import { Container, Logo, Div} from './header.Style'
import { Input } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme} from '@mui/material/styles';
import Button from '@mui/material/Button/Button';

const theme = createTheme({
  palette: {
    primary: grey
    },
});

function Header() {
  return (
    <Container>
      <Logo src={LogoHeader}/>   
      <Div>
        <ThemeProvider theme={theme}>
          <Input  style={{ backgroundColor: grey[800] , width: '26rem', padding: '4px', color:'white'}}  color='primary'/>
          <Button variant="outlined"  style={{ height: '2.5rem' }}>Buscar</Button>
        </ThemeProvider>
      </Div>
    </Container>
  )
}

export default Header