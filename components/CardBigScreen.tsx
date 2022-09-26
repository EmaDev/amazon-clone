import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Pelicula } from '../interfaces/Peliculas';
const image = require('../src/images/card.jpg');

const Card = styled.div<any>`
   min-width: 20%;
   min-height: 120px;
   background-color: var(--bg-secondary);
   margin:1rem;
   transition: .3s ease all;
   box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
   position:relative;
   border-radius: 3px;
   overflow: hidden;

   &:hover{
    transform: scale(1.4);
    transform-origin: center;
    z-index: 2;
   }

   img{
    width: 100%;
    height: 100%;
    margin:auto;
   }
`;

const CardDetail = styled.div`
   background-color: gray;
   width: 100%;
   height: 250px;
   margin-top: -10px;
   opacity: 1;
   position: static;
   top: 0;
   transition: all .3s;
   z-index: 2;
   border-radius: 6px;
`;

interface Props {
  movie: Pelicula
}

export const CardBigScreen = ({ movie }: Props) => {

  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  const linkDetalle = `/detalle/${movie.id}?tipo=${movie.first_air_date ? 'serie' : 'pelicula'}`

  return (
    <Link href={linkDetalle}>
      <Card>
        <img src={imgUrl} alt={movie.original_title} />
      </Card>
    </Link>
  )
}
