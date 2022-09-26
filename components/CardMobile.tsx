import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Pelicula } from '../interfaces/Peliculas';

const Card = styled.div<any>`
   min-width: 200px;
   height: 110px;
   background: var(--bg-secondary) url(${({image}) => image});
   background-size: cover;
   margin: auto .5rem;
   border-radius: 3px;
   box-shadow: 5px 5px 10px rgba(0,0,0,0.3);

   &:hover{
    transform: scale(1.1);
    transition: .4s ease all;
   }

   img{
    width: 100%;
    border-radius: 5px;
   }
`;

interface Props {
  movie: Pelicula
}
export const CardMobile = ({movie}:Props) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
  
  const linkDetalle = `/detalle/${movie.id}?tipo=${movie.first_air_date ? 'serie' : 'pelicula'}`
  return (
    <Link href={linkDetalle}>
      <Card image={imgUrl}/>
    </Link>
  )
}
