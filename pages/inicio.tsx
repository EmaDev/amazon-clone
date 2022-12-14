import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Carrousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { PeliculasContext } from '../context/PeliculasContext';
import { Spinner } from '../components/Spinner';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/router';

const HomePage: NextPage = () => {
  const {isLogged, isLoading:authIsLoading} = useContext(AuthContext);
  const { peliculasState, isLoading} = useContext(PeliculasContext);
  const {push} = useRouter();

  useEffect(() => {
    if(!isLogged){
      push('/');
    }
  },[isLogged]);

  if(authIsLoading){
    return(
      <Spinner/>
    )
  }
  return (
    <>
      <Layout>
        <Header />
        <br />
        {
          (isLoading) ?
            <Spinner />
            :
            <>
            <Carrousel url='/explorar/top_rated' title='Peliculas Destacadas' movies={(peliculasState?.topRated) ? peliculasState.topRated : []}/>
            <Carrousel url='/explorar/popular?series' title='Series Populares' movies={(peliculasState?.tvPopular) ? peliculasState.tvPopular : []}/>
            <Carrousel url='/explorar/popular' title='Peliculas Populares' movies={(peliculasState?.popular) ? peliculasState.popular : []}/>
            <Carrousel url='/explorar/now_playing' title='Tendencias' movies={(peliculasState?.nowPlaying) ? peliculasState.nowPlaying : []}/>
            <Carrousel url='/explorar/top_rated' title='Series Mejor Calificadas' movies={(peliculasState?.tvTopRated) ? peliculasState.tvTopRated : []}/>
            </>

        }
      </Layout>
    </>
  )
}

export default HomePage;
