import React, { useEffect, useState, useContext } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout } from '../../components/Layout';
import { PeliculasContext } from '../../context/PeliculasContext';
import { Pelicula } from '../../interfaces/Peliculas';
import { CardConDescripcion } from '../../components/CardConDescripcion';
import { AuthContext } from '../../context/AuthContext';


const Title = styled.h1`
    width: 90%;
    margin: 0 auto; 
    font-size: 2rem;
    font-weight: 500;
    color: #8197a4;
    padding-top: 8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #8197a4;
`;
const Grid = styled.div`
   display: grid;
   grid-template-columns: 100%;
   column-gap: 1rem;
   margin: auto;
   @media(min-width: 600px){
    grid-template-columns: 50% 50%;
    width: 90%;
   }
   @media(min-width: 930px){
    grid-template-columns: 33% 33% 33%;
   }
   @media(min-width: 1200px){
    grid-template-columns: 25% 25% 25% 25%;
   }
`;

const ExplorarPage: NextPage = () => {

  const { query, push } = useRouter();
  const {isLogged} = useContext(AuthContext);
  const [peliculasState, setPeliculasState] = useState<Pelicula[]>([]);
  const { getMoviesAndTvShowsByQuery } = useContext(PeliculasContext);

  useEffect( () => {
    if(!isLogged){
      push('/');
    }
  },[isLogged]);

  useEffect(() => {
    const getData = async () => {
      if (query.id) {
        const resp = await getMoviesAndTvShowsByQuery(query.id.toString());
        setPeliculasState(resp.sort(function() {return Math.random() - 0.5}));
      }
    }
    getData();
  }, [query]);


  return (
    <Layout>
      <Title>{query.id}</Title>
      <Grid>
        {
           peliculasState.map( peli => (
             <CardConDescripcion
             key={peli.id}
             movie={peli}
             />
           ))
        }
      </Grid>
    </Layout>
  )
}

export default ExplorarPage;
