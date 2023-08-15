import styled from 'styled-components'
import { Button, Input} from '@mui/material';

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 7px;
    height: 3%;
`;
export const Div = styled.div`
    width: 38rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`;

export const Logo = styled.img`
    width: 8%;
`;

//componentes do materia ui estilizados

export const InputStyled = styled(Input)`
    padding: 5px;
    width: 30rem;
    background-color: #7e7b7b71;
    border-radius: 4px;
`;

export const ButtonStyled = styled(Button)`
    height: 3em;
`