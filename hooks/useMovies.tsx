import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { generos } from '../helpers';
import { Elenco, Pelicula, PeliculaFull, Peliculas, PeliculaSimilar, PeliculasSimilaresResp } from '../interfaces/Peliculas';

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'aaa74d826d865032160b44636ae09040',
        language: 'es-ES'
    }
});
const movieDbSeries = axios.create({
    baseURL: 'https://api.themoviedb.org/3/tv/',
    params: {
        api_key: 'aaa74d826d865032160b44636ae09040',
        language: 'es-ES'
    }
});

type TipoMovie = 'pelicula'|'serie';

interface MoviesState {
    topRated: Pelicula[];
    nowPlaying: Pelicula[];
    popular: Pelicula[];
    tvPopular: Pelicula[];
    tvTopRated: Pelicula[];
}
export const useMovies = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [movies, setMovies] = useState<MoviesState>();

    const getMovies = async () => {

        const promiseMovie0 = await movieDb.get<Peliculas>('movie/top_rated');
        const promiseMovie1 = await movieDb.get<Peliculas>('movie/now_playing');
        const promiseMovie2 = await movieDb.get<Peliculas>('tv/popular');
        const promiseMovie3 = await movieDb.get<Peliculas>('movie/popular');
        const promiseMovie4 = await movieDb.get<Peliculas>('tv/top_rated');
        const resps = await Promise.all([promiseMovie0, promiseMovie1, promiseMovie2, promiseMovie3, promiseMovie4]);

        setMovies({
            topRated: resps[0].data.results,
            nowPlaying: resps[1].data.results,
            tvPopular: resps[2].data.results,
            popular: resps[3].data.results,
            tvTopRated: resps[4].data.results
        });

        setIsLoading(false);

    }

    const getMovieByGenre = (genreName: string) => {

        const genreBuscado = generos.find(genero => genero.name.toLocaleLowerCase() === genreName.toLocaleLowerCase());
        const pelisObtenidas: Pelicula[] = [];
        let allMovies:Pelicula[] = [];
        if(movies){
            allMovies = [...movies.nowPlaying, ...movies.popular, ...movies.topRated, ...movies.tvPopular, ...movies.tvTopRated];
        }

        allMovies.forEach( movie => {
            let exist = false;
            movie.genre_ids.forEach(genre => {
                if (genre === genreBuscado?.id) {
                    pelisObtenidas.forEach(finalMovie => {
                        if (finalMovie.id === movie.id) {
                            exist = true;
                        }
                    });

                    if (!exist) {
                        pelisObtenidas.push(movie);
                    }
                }
            });
        });
        return pelisObtenidas;        
    };

    const getMoviesAndTvShowsByQuery = async(query: string = '') => {
        const movies = await movieDb.get<Peliculas>(`movie/${query}`);
        const tvShows = await movieDb.get<Peliculas>(`tv/${query}`);
        const resps = await Promise.all([movies, tvShows]);
        
        return [
            ...resps[0].data.results,
            ...resps[1].data.results
        ]
    }

    const getDetailById = async(id:string = '', tipo:string = '') => {
        setIsLoading(true);
        
        const tvOrMovie = (tipo === 'serie') ? 'tv' : 'movie'; 
    
        const {data} = await movieDb.get<PeliculaFull>(`${tvOrMovie}/${id.toString()}`);
        const similar = await movieDb.get<PeliculasSimilaresResp>(`${tvOrMovie}/${id}/similar`);
        const credits = await movieDb.get<Elenco>(`${tvOrMovie}/${id}/credits`);
        
        return {
            movieDetail: data,
            similarMovies: similar.data.results,
            credits: credits.data
        };
    }

    return {
        movies,
        getMovies,
        getMovieByGenre,
        getMoviesAndTvShowsByQuery,
        getDetailById
    }

}
