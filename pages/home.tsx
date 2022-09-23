import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Carrousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { PeliculasContext } from '../context/PeliculasContext';
import { Spinner } from '../components/Spinner';

const HomePage: NextPage = () => {
  const { peliculasState, isLoading, filterMoviesByQuery } = useContext(PeliculasContext);

  const mostrarCarrouserPorCategoria = (query:string, title: string) => {
    const movies = filterMoviesByQuery(query);
    return(
      <Carrousel title={title} movies={(movies) ? movies : []} />
    )
  }

  return (
    <>
      <Layout>
        <Header movies={peliculasState} />
        <br />
        {
          (isLoading) ?
            <Spinner/>
            :
            <>
           {mostrarCarrouserPorCategoria('top_rated','Grandes exitos')}
           {mostrarCarrouserPorCategoria('now_playing','Tendencias')}
           {mostrarCarrouserPorCategoria('popular','Popular')}
           {mostrarCarrouserPorCategoria('upcoming','Proximamente')}
            </>
  }
      </Layout>
    </>
  )
}

export default HomePage;