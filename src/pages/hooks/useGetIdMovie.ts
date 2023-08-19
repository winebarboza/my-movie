// https://api.themoviedb.org/3/movie/${id}?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3&
import { useState, useEffect } from "react";
import { Movie, MovieApiResponse } from "../../models/movie.interface";
import api from "../../providers";

const useGetIdMovies = (id: number) => {

    const [movieDetail, setMovieDetail] = useState<Movie>({} as Movie);
    
    useEffect(() => {
        const fetchMoviesDetails = async () => {
            try {
                const response = await api.get<Movie>( `https://api.themoviedb.org/3/movie/${id}?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3`);
                setMovieDetail(response.data)
                console.log(movieDetail.backdrop_path)
            } catch (error) {
                console.error("error fetching movies", error)
            }
        };
        fetchMoviesDetails()
    }, []);
    return movieDetail;
};
export default useGetIdMovies;