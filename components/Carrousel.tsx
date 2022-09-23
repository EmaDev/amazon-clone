import React, { useRef } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CardBigScreen } from './CardBigScreen';
import { useMediaQuery } from 'react-responsive';
import { CardMobile } from './CardMobile';
import { Pelicula } from '../interfaces/Peliculas';

const GLobalContainer = styled.div`
  color: #e1e1e1;
  width: 95%;
  margin: 1rem auto;
`;
const Title = styled.h3`
    margin: 0 1rem;
    font-size: 1.8rem; 
    font-weight: 700;
    color: #fff;
    span{
        color: #79b8f3;
        margin: 0 2rem; 
        font-size: 1.4rem;
    }
`;

const PrimaryContainer = styled.div`
   font-size: 3rem;
   display:flex;
   align-items:center;
   position:relative;
`;
const Arrow = styled.button<any>`
   position: absolute;
   border:none;
   background: rgba(0,0,0,0.2);
   font-size: 4.5rem;
   height: 50%;
   top: calc(50% - 25%);
   line-height: 50px;
   color: #D0D0D0;
   cursor: pointer;
   z-index: 500;
   transition: .2s ease all;

   ${({ position }) => `${position}: 1rem;`}

   &:hover{
    background: rgba(0,0,0,0.6);
   }
`;
const CarrouselContainer = styled.div`
   width: 100%;
   padding: 20px;
   position:relative;
   overflow-x: hidden;
   scroll-behavior: smooth;
`;
const CarrouselSliderBigScreen = styled.div`
   display:flex;
   width: 100%;
   flex-wrap: nowrap;
`;
const CarrouselSlider = styled.div`
   display:flex;
   width: 100%;
   padding: 1rem 0;
   flex-wrap: nowrap;
   overflow-x:auto;
   @media(min-width: 870px){
    padding: 2rem 0;
   }
`;

interface Props {
    movies: Pelicula[];
    title: string;
}
export const Carrousel = ({movies, title}:Props) => {

    const isBigScreen = useMediaQuery({ query: '(min-width: 870px)' });
    const scrollCarrousel: any = useRef(null);

    const handleScrollCarrousel = (rigth: boolean) => {
        const widthCarr = scrollCarrousel.current.offsetWidth;
        if (rigth) {
            scrollCarrousel.current.scrollLeft += widthCarr;
        } else {
            scrollCarrousel.current.scrollLeft -= widthCarr;
        }
    };

    return (
        <GLobalContainer>
            <br />
            <Title>{title}<span>ver mas</span></Title>
            <PrimaryContainer>
                {
                    (isBigScreen) ?
                        <>
                            <Arrow onClick={() => handleScrollCarrousel(false)} position={'left'}><IoIosArrowBack /></Arrow>
                            <CarrouselContainer ref={scrollCarrousel}>
                                <CarrouselSliderBigScreen>
                                    {movies.map(item => (
                                        <CardBigScreen key={item.id} movie={item}/>
                                    ))}
                                </CarrouselSliderBigScreen>
                            </CarrouselContainer>
                            <Arrow onClick={() => handleScrollCarrousel(true)} position={'right'}><IoIosArrowForward /></Arrow>
                        </>
                        :
                        <CarrouselSlider>
                            {movies.map(item => (
                                <CardMobile key={item.id} movie={item}/>
                            ))}
                        </CarrouselSlider>
                }
            </PrimaryContainer>
        </GLobalContainer>
    )
}
