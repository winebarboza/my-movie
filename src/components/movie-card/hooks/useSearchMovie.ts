import { useState, useEffect } from "react";
import { Movie, MovieApiResponse } from "../../../models/movie.interface";
import api from "../../../providers";


export const useSearchMovie = (inputValue: string) => {

    const [moviesFilteredApi, setMoviesFilteredApi] = useState<Movie[]>([]);

    const fetchMovies = async () => {
        try {
            const response = await api.get<MovieApiResponse>(`https://api.themoviedb.org/3/search/multi?api_key=8e1d2d15df8ebdf9dc053c78b92de5c3&query=${inputValue}&page=3`);
            setMoviesFilteredApi(response.data.results)
        } catch (error) {
            console.error("error fetching movies", error)
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [inputValue]);
    return moviesFilteredApi;
}