import { useState, useEffect } from "react";
import { Movie, MovieApiResponse } from "../../models/movie.interface";
import api from "../../providers";

const useGetMovies = (endpoint: string) => {

    const [movies, setMovies] = useState<Movie[]>([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get<MovieApiResponse>(endpoint);
                setMovies(response.data.results)
            } catch (error) {
                console.error("error fetching movies", error)
            }
        };
        fetchMovies()
    }, [endpoint]);
    return movies;
};
export default useGetMovies;