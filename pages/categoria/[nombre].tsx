import React, {useState, useEffect, useContext} from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { CardConDescripcion } from '../../components/CardConDescripcion';
import { Layout } from '../../components/Layout';
import { PeliculasContext } from '../../context/PeliculasContext';
import { Pelicula } from '../../interfaces/Peliculas';
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


const CategoriaPage: NextPage = () => {
    
    const [categoria, setCategoria] = useState<string>('');
    const [peliculasDelGenero, setPeliculasDelGenero] = useState<Pelicula[]>([]);
    const {isLogged} = useContext(AuthContext);
    const {getMovieByGenre, peliculasState} = useContext(PeliculasContext);
    const {asPath, push} = useRouter();
    
    useEffect( () => {
        if(!isLogged){
          push('/');
        }
    },[isLogged]);

    useEffect( () => {
        const arrPath:any[] = asPath.split('/');
        setCategoria(arrPath[2]);

        const resp = getMovieByGenre(arrPath[2]);
        setPeliculasDelGenero(resp);
    },[asPath, peliculasState]);

    return (
        <Layout>
            <Title>{categoria.toUpperCase()}</Title>
            <Grid>
                {peliculasDelGenero.map(movie => (
                    <CardConDescripcion
                    key={movie.id}
                    movie={movie}
                    />
                ))}
            </Grid>
        </Layout>
    )
}

export default CategoriaPage;