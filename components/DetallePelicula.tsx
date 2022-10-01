import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { FaPlay } from 'react-icons/fa';
import { BiListPlus, BiDownload } from 'react-icons/bi';
import { BsPlay, BsShare, BsQuestionCircle, BsPencil } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import {
   ActionButton, ActionButtonsContainer, Blur, ButtonPlay,
   ButtonsCompartir, ContainerCompartir, DetalleContainer, GridHeader,
   HeaderContainer, IconsDetalles, ItemDetalle, Resena, Title
} from './DetallesPelicula.module';
import { Cast, Pelicula, PeliculaFull, PeliculaSimilar } from '../interfaces/Peliculas';
import { Carrousel } from './Carrousel';

interface Props {
   detalle: PeliculaFull;
   elenco: Cast[];
   similares: Pelicula[];
   agregarAFavoritos?: (id: number, tipo: string) => void;
}
export const DetallePelicula = ({ detalle, elenco, similares }: Props) => {

   const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' });

   const agregarAFavoritos = () => {
      //TODO: agregar a favs
   }

   const detallePelicula = () => {
      return (
         <>
            <DetalleContainer>
               <div style={{ height: '100%', width: '100%' }} />
               <Title>{detalle.title || detalle.original_title || detalle.name || detalle.original_name}</Title>
               <IconsDetalles>
                  <span>IMDb</span>
                  <p>{detalle.vote_average}</p>
                  <p>{detalle.release_date}</p>
                  <span>X-Ray</span>
                  <span>{'AD)))'}</span>
                  <BiMessageDetail size={'2.2rem'} />
               </IconsDetalles>
               <ActionButtonsContainer>
                  <ButtonPlay><FaPlay size={'3rem'} /><p>Reproducir</p></ButtonPlay>
                  <div>
                     {(!isBigScreen) && <ActionButton><span><BsPlay /></span><span>Ver trailer</span></ActionButton>}
                     <ActionButton><span><BiListPlus /></span><span>Añadir a mi lista</span></ActionButton>
                     <ActionButton><span><BiDownload /></span><span>Descargar</span></ActionButton>
                  </div>
               </ActionButtonsContainer>
               {isBigScreen && mostrarDetalles()}
               <Resena>{detalle.overview}</Resena>

            </DetalleContainer>
            {isBigScreen &&
               <ContainerCompartir>
                  <p>
                     Al hacer clic en reproducir, aceptas nuestros
                     <span>Términos de uso</span>
                  </p>
                  <ButtonsCompartir>
                     <a><BsShare style={{ marginRight: '1rem' }} /><span>Compartir</span></a>
                     <a><BsPencil style={{ marginRight: '1rem' }} /><span>Comentarios</span></a>
                     <a><BsQuestionCircle style={{ marginRight: '1rem' }} /><span>Obtener ayuda</span></a>
                  </ButtonsCompartir>
               </ContainerCompartir>
            }
         </>
      )
   }

   const mostrarDetalles = () => {
      return (
         <>
            <ItemDetalle>
               <h4>Reparto</h4>
               <p>{elenco.map(actor => { return `${actor.original_name},` })}</p>
            </ItemDetalle>
            <ItemDetalle>
               <h4>Idioma de audio</h4>
               <p>{
                  detalle.spoken_languages.map(lang => {
                     return `${lang.name},`
                  })
               }</p>
            </ItemDetalle>
            <ItemDetalle>
               <h4>Subtitulos</h4>
               <p>Ingles, Español, Frances, Chino...</p>
            </ItemDetalle>
         </>
      );
   }
   return (
      <>
         {isBigScreen ?
            <>
               <HeaderContainer img={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}>
                  <GridHeader>{detallePelicula()}<div /></GridHeader>
               </HeaderContainer>
            </>
            :
            <div>
               <HeaderContainer img={`https://image.tmdb.org/t/p/original${detalle.backdrop_path}`}><Blur /></HeaderContainer>
               <div>
                  {detallePelicula()}
               </div>
               {mostrarDetalles()}
               <ButtonsCompartir>
                  <a><BsShare style={{ marginRight: '1rem' }} /><span>Compartir</span></a>
                  <a><BsPencil style={{ marginRight: '1rem' }} /><span>Comentarios</span></a>
                  <a><BsQuestionCircle style={{ marginRight: '1rem' }} /><span>Obtener ayuda</span></a>
               </ButtonsCompartir>
            </div>

         }

         <Carrousel movies={similares} title={'Otros clientes tambien han visto'} />
      </>
   )
}
