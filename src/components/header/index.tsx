import React from 'react'
import LogoHeader from '../../assets/logo.png'
import Button from '@mui/material/Button/Button';
import { Container, Logo, Div} from './header.Style'
import { Input} from '@mui/material';
import { grey } from '@mui/material/colors';
import { ThemeProvider, createTheme} from '@mui/material/styles';

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
          <Input  style={{ backgroundColor: grey[800] , width: '26rem', padding: '4px', margin:'5px', color:'white'}}  color='primary'/>
          <Button variant="outlined"  style={{ height: '2.6em' }}>Buscar</Button>
        </ThemeProvider>
      </Div>
    </Container>
  )
}

export default Header