import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { DetallePelicula } from '../../components/DetallePelicula';
import { useRouter } from 'next/router';
import { PeliculasContext } from '../../context/PeliculasContext';
import { Spinner } from '../../components/Spinner';

const PeliculaPage: NextPage = () => {
  const { query } = useRouter();
  const { getPeliculaPorId, peliculaActual, isLoading } = useContext(PeliculasContext);
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