import React from 'react';
import styled from 'styled-components';
import {FaPlay} from 'react-icons/fa';
import {HiPlus} from 'react-icons/hi';
import {SiImdb} from 'react-icons/si';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Pelicula } from '../interfaces/Peliculas';

const Card = styled.div`
   width: 90%;
   margin: 1.5rem;
   border-radius: 5px;
   position:relative;
   background-color: var(--bg-secondary);
`;
const CardImage = styled.div`
  width: 100%;
  margin:auto;
  position:relative;
  border-radius: 5px 5px 0 0;
  img{
    width: 100%;
  }
`;
const ButtonPlay = styled.button`
   position: absolute;
   background-color: rgba(0,0,0,0.3);
   bottom: 2rem;
   left: 1.2rem; 
   border-style: none;
   display: flex;
   justify-content:center;
   align-items:center;
   border-radius: 50%;
   border: 2px solid #e1e1e1;
   color: #e1e1e1;
   font-size: 2rem;
   padding: 1rem;
   &:hover{
    background-color: #00a8e1;
    border: 2px solid #00a8e1;
   }
`;
const CardDescription = styled.div`
   padding: .5rem 1rem;
   background-color: var(--bg-secondary);
   color: #e1e1e1;
   border-radius: 0 0 5px 5px;
   display: grid;
   grid-template-columns: 90% 10%;
   div{
    p{
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: #e1e1e1;
    }
   }
`;
const MovieData = styled.div`
   display: flex;
   align-items:center;
   color: #8197a4;
   margin: 3px 0;
   span{
    font-size: 1.4rem;
    margin: 0 .5rem;
    &:last-child {
        border: 1px solid #8197a4;
        border-radius: 2px;
        padding: 1px;
    }
   }
   
`;

interface Props {
  movie: Pelicula;
}

export const CardConDescripcion = ({movie}:Props) => {
  
  const {push} = useRouter();
  const handleAgregarAFavoritos = () => {
    //TODO
  }

  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const linkDetalle = `/detalle/${movie.id}?tipo=${movie.first_air_date ? 'serie' : 'pelicula'}`;

  return (
    <Card>
        <CardImage>
            <img src={imgUrl} style={{borderRadius: '5px 5px 0 0'}}/>
            <ButtonPlay onClick={() => push(linkDetalle)}><FaPlay style={{marginLeft: '1px'}}/></ButtonPlay>
        </CardImage>
        <CardDescription>
            <div onClick={() => push(linkDetalle)}>
                <p>{movie.title || movie.original_title || movie.name || movie.original_name}</p>
                <MovieData>
                    <SiImdb size={'1.8rem'}/>
                    <span>7.2</span>
                    <span>2022</span>
                    <span>13</span>
                </MovieData>
            </div>
            <div>
            <HiPlus onClick={handleAgregarAFavoritos} size={'3rem'} color={'#8197a4'}/>
            </div>
        </CardDescription>
    </Card>
  )
}
