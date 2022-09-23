import React, { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { Layout } from '../../components/Layout';
import { DetallePelicula } from '../../components/DetallePelicula';
import { useRouter } from 'next/router';
import { PeliculasContext } from '../../context/PeliculasContext';
import { Spinner } from '../../components/Spinner';


const PeliculaPage: NextPage = () => {
  const { asPath } = useRouter();
  const { getPeliculaPorId, peliculaActual, isLoading } = useContext(PeliculasContext);
  useEffect(() => {

    const arrPath: any[] = asPath.split('/');

    if (arrPath.length > 0) {
      getPeliculaPorId(parseInt(arrPath[2]));
    }

  }, [asPath]);
  return (
    <Layout>
      {(isLoading || peliculaActual === undefined) ?
       <Spinner/>
       : <DetallePelicula pelicula={peliculaActual} />
      }
    </Layout>
  )
}

export default PeliculaPage;