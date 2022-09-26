import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Elenco, Pelicula, PeliculaFull, PeliculaSimilar } from '../interfaces/Peliculas';
import { useMovies } from '../hooks/useMovies';

interface MoviesState {
    topRated: Pelicula[];
    nowPlaying: Pelicula[];
    tvPopular: Pelicula[];
    popular: Pelicula[];
    tvTopRated: Pelicula[];
} 

interface PeliculasContextProps {
    isLoading: boolean;
    peliculasState: MoviesState | undefined;
    peliculaActual: PeliculaActual | undefined;
    getPeliculaPorId: (id: string, tipo:string) => void;
    getMovieByGenre: any;
    getMoviesAndTvShowsByQuery: (query: string) => any;
}

interface PeliculaActual {
    detalle: PeliculaFull;
    similares: Pelicula[];
    elenco: Elenco;
}

export const PeliculasContext = createContext({} as PeliculasContextProps);

export const PeliculasContextProvider = ({ children }: any) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [peliculaActual, setPeliculaActual] = useState<PeliculaActual>();
    const { movies, getMovies, getMovieByGenre, getMoviesAndTvShowsByQuery, getDetailById } = useMovies();

    useEffect( () => {
        getMovies();
        setTimeout( () => {
            setIsLoading(false);
        },2000);
    },[]);

    const getPeliculaPorId = async(id: string, tipo:string) => {
        setIsLoading(true);
        const {movieDetail, credits, similarMovies} = await getDetailById(id, tipo);
        setPeliculaActual({
            detalle: movieDetail,
            elenco: credits,
            similares: similarMovies
        });
        setIsLoading(false);
    }

    return (
        <PeliculasContext.Provider value={{
            isLoading,
            peliculasState: movies,
            peliculaActual: peliculaActual,
            getPeliculaPorId,
            getMovieByGenre,
            getMoviesAndTvShowsByQuery
        }}>
            {children}
        </PeliculasContext.Provider>
    )
}
