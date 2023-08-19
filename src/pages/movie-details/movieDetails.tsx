import { HeaderContent, Logo } from '../../components/header/header.style'
import { CardActionArea, Container } from '@mui/material'
import { CardMediaStyled } from './style';
import LogoHeader from '../../assets/logo.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useGetIdMovies from '../hooks/useGetIdMovie';
import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {

    const { id } = useParams();
    const movieDetail = useGetIdMovies(Number(id))
    return (
        <div>
            <HeaderContent>
                <Logo src={LogoHeader} />
            </HeaderContent>
            <Container>
                <Card sx={{ background: '#434344', maxWidth: 600, margin:'0 auto'}}>
                    <CardActionArea>
                        <CardMediaStyled
                         src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
                         alt={movieDetail.title} 
                         />
                        <CardContent sx={{ height: 150 }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {movieDetail.original_title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {movieDetail.overview}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    )
}
