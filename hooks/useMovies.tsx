import axios from 'axios';
import React, { useState } from 'react';
import { generos } from '../helpers';
import { Pelicula, Peliculas } from '../interfaces/Peliculas';

const movieDb = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: 'aaa74d826d865032160b44636ae09040',
        language: 'es-ES'
    }
});

interface Props {
    queries: string[];
}
export const useMovies = ({ queries }: Props) => {

    const [movies, setMovies] = useState<Pelicula[]>([]);

    const getMoviesByQuery = async () => {

        const arrMovies: Pelicula[] = [];

        queries.forEach(async (query) => {

            const { data } = await movieDb.get<Peliculas>(query);
            data.results.forEach(movie => {
                movie.busqueda = query;
            })
            arrMovies.push(...data.results);

            setMovies(arrMovies);
        });
    }

    const filterMoviesByQuery = (query: string) => {
        const moviesFiltered = movies.filter(movie => movie.busqueda === query);
        const data: any = new Set(moviesFiltered);
        return [...data];
    }

    const getMovieByGenre = (genreName: string) => {

        const genreBuscado = generos.find(genero => genero.name.toLocaleLowerCase() === genreName.toLocaleLowerCase());
        const pelisObtenidas: Pelicula[] = [];

        if (genreBuscado) {
            movies.forEach(movie => {
                movie.genre_ids.forEach(genre => {
                    if (genre === genreBuscado.id) {
                        pelisObtenidas.push(movie);
                    }
                })
            });
        }
        //TODO: que no se muestren repetidos
        return pelisObtenidas;

    };

    return {
        movies,
        getMoviesByQuery,
        filterMoviesByQuery,
        getMovieByGenre,
    }

}
