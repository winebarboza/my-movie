import { HeaderContent, Logo } from '../../components/header/styles'
import { CardActionArea, Container } from '@mui/material'
import { CardMediaStyled } from './styles';
import LogoHeader from '../../assets/logo.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import useGetIdMovies from '../hooks/useGetIdMovie';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function MovieDetailsPage() {

    const { id } = useParams();
    const movieDetail = useGetIdMovies(Number(id))

    return (
        <div>
            <HeaderContent>
                <Link to={'/'}>
                    <Logo src={LogoHeader} style={{ width: '28%', height: 'auto' }} />
                </Link>
            </HeaderContent>
            <Container>
                <Card sx={{ background: '#434344', maxWidth: 600, margin: '0 auto' }}>
                    <CardActionArea>
                        <CardMediaStyled
                            src={`https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}`}
                            alt={movieDetail.title}
                        />
                        <CardContent sx={{ color: '#A6A6A6', maxHeight: '80vh', overflow: 'auto' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {movieDetail.original_title}
                            </Typography>
                            <Typography variant="body2" color="#808080">
                                {movieDetail.release_date}
                            </Typography>
                            <Typography variant="body2" color="#c5c0c0">
                                {movieDetail.overview}
                            </Typography>
                            {movieDetail.vote_average && (
                                <Rating name="half-rating-read" value={movieDetail.vote_average} max={10} precision={0.5} readOnly />
                            )}
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
        </div>
    )
}
