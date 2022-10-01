import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { DetallePelicula } from '../../components/DetallePelicula';
import { useRouter } from 'next/router';
import { PeliculasContext } from '../../context/PeliculasContext';
import { Spinner } from '../../components/Spinner';
import { AuthContext } from '../../context/AuthContext';

const PeliculaPage: NextPage = () => {
  const { query, push } = useRouter();
  const {isLogged} = useContext(AuthContext);
  const { getPeliculaPorId, peliculaActual, isLoading } = useContext(PeliculasContext);
  
  useEffect( () => {
    if(!isLogged){
      push('/');
    }
  },[isLogged]);
  
  useEffect(() => {    
    if(query.id && query.tipo){
      getPeliculaPorId(query.id.toString(), query.tipo.toString());
    }
  }, [query]);

  return (
    <Layout>
      {(isLoading || peliculaActual === undefined) ?
       <Spinner/>
       : <DetallePelicula 
       detalle={peliculaActual.detalle} 
       elenco={peliculaActual.elenco.cast.slice(0, 4)}
       similares={peliculaActual.similares}
       />
      }
    </Layout>
  )
}

export default PeliculaPage;