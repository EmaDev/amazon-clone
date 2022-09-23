import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Pelicula, PeliculaFull, Peliculas } from '../interfaces/Peliculas';
import { useMovies } from '../hooks/useMovies';

interface PeliculasContextProps {
    isLoading: boolean;
    peliculasState: Pelicula[];
    peliculaActual: PeliculaFull | undefined;
    getPeliculaPorId: (id: number) => void;
    filterMoviesByQuery: any;
    getMovieByGenre: any;
}

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: 'aaa74d826d865032160b44636ae09040',
        language: 'es-ES'
    }
});

const arrQueries:string[] = [
    'popular',
    'now_playing',
    'top_rated',
    'upcoming',
];

export const PeliculasContext = createContext({} as PeliculasContextProps);

export const PeliculasContextProvider = ({ children }: any) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [peliculaActual, setPeliculaActual] = useState<PeliculaFull>();
    const { getMoviesByQuery, movies, filterMoviesByQuery, getMovieByGenre} = useMovies({queries: arrQueries});

    useEffect(() => {
        getTodasLasPelicula();
    }, []);

    const getTodasLasPelicula = async () => {
        setIsLoading(true);
        
        await getMoviesByQuery();

        setIsLoading(false);
    }

    const getPeliculaPorId = async (id: number) => {
        setIsLoading(true);
        const url = id;
        const { data } = await movieDb.get<PeliculaFull>(`/${url}`);
        setPeliculaActual(data);
        setIsLoading(false);
    }

    return (
        <PeliculasContext.Provider value={{
            isLoading,
            peliculasState: movies,
            peliculaActual: peliculaActual,
            getPeliculaPorId,
            filterMoviesByQuery,
            getMovieByGenre
        }}>
            {children}
        </PeliculasContext.Provider>
    )
}
