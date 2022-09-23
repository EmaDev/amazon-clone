import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';
import { BiListPlus, BiDownload } from 'react-icons/bi';
import { BsPlay, BsShare, BsQuestionCircle, BsPencil } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { ActionButton, ActionButtonsContainer, Blur, ButtonPlay, ConstButtonsConmpartir, DetalleContainer, GridHeader, HeaderContainer, IconsDetalles, ItemDetalle, Resena, Title } from './DetallesPelicula.module';
import { PeliculaFull } from '../interfaces/Peliculas';

const imagen = require('../src/images/detail.jpg');

interface Props {
   pelicula: PeliculaFull
}
export const DetallePelicula = ({pelicula}: Props) => {

   const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

   const agregarAFavoritos = () => {
      //TODO: agregar a favs
   }
 
   const detallePelicula = () => {
      return (
         <DetalleContainer>
            <div style={{ height: '100%', width: '100%' }} />
            <Title>{pelicula.title || pelicula.original_title}</Title>
            <IconsDetalles>
               <span>IMDb</span>
               <p>{pelicula.vote_average}</p>
               <p>{pelicula.release_date}</p>
               <span>X-Ray</span>
               <span>{'AD)))'}</span>
               <BiMessageDetail size={'2.2rem'} />
            </IconsDetalles>
            <ActionButtonsContainer>
               <ButtonPlay><FaPlay size={'3rem'} /><p>Reproducir</p></ButtonPlay>
               <div>
                  <ActionButton><span><BsPlay /></span><span>Ver trailer</span></ActionButton>
                  <ActionButton><span><BiListPlus /></span><span>Añadir a mi lista</span></ActionButton>
                  <ActionButton><span><BiDownload /></span><span>Descargar</span></ActionButton>
               </div>
            </ActionButtonsContainer>
            <Resena>{pelicula.overview}</Resena>
         </DetalleContainer>
      )
   }
   return (
      <>
         {isBigScreen ?
            <>
               <HeaderContainer img={`https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`}>
                  <GridHeader>{detallePelicula()}<div /></GridHeader>
               </HeaderContainer>

            </>
            :
            <div>
               <HeaderContainer img={`https://image.tmdb.org/t/p/original${pelicula.backdrop_path}`}><Blur /></HeaderContainer>
               <div>
                  {detallePelicula()}
               </div>
               <ItemDetalle>
                  <h4>Reparto</h4>
                  {/*reparto.join(',')*/}
               </ItemDetalle>
               <ItemDetalle>
                  <h4>Idioma de audio</h4>
                  <p>{
                   pelicula.spoken_languages.map( lang => {
                     return lang.name + ','
                   })
                  }</p>
               </ItemDetalle>
               <ItemDetalle>
                  <h4>Subtitulos</h4>
                  <p>Ingles, Español, Frances, Chino...</p>
               </ItemDetalle>
               <ConstButtonsConmpartir>
                  <a><BsShare style={{ marginRight: '1rem' }} /><span>Compartir</span></a>
                  <a><BsPencil style={{ marginRight: '1rem' }} /><span>Comentarios</span></a>
                  <a><BsQuestionCircle style={{ marginRight: '1rem' }} /><span>Obtener ayuda</span></a>
               </ConstButtonsConmpartir>
            </div>

         }
      </>
   )
}
