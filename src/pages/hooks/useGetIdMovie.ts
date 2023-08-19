import { useState, useEffect } from "react";
import { Movie} from "../../models/movie.interface";
import api from "../../providers";

const useGetIdMovies = (id: number) => {

    const [movieDetail, setMovieDetail] = useState<Movie | null>(null);
    
    useEffect(() => {
        const fetchMoviesDetails = async () => {
            try {
                const response = await api.get<Movie>( `/movie/${id}?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3`);
                    setMovieDetail(response.data)
            } catch (error) {
                console.error("error fetching movies", error)
            }
        };
        fetchMoviesDetails()
    }, []);
    return movieDetail;
};
export default useGetIdMovies;