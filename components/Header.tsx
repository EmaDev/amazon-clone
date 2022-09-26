import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pelicula } from '../interfaces/Peliculas';

const hero0 = require('../src/images/hero1.jpg');
const hero1 = require('../src/images/hero.jpeg');
const hero2 = require('../src/images/hero2.jpeg');

const HeaderContainer = styled.header`
   padding-top: 5rem;
   width: 100%;
   height: 30vh;

   @media(min-width: 600px){
    height: 50vh;
    padding-bottom: 2rem;
   }
`;

const SwiperItem = styled.div<any>`
  width: 100%;
  height: 190px;
  background: var(--bg-secondary) url(${({ img }) => img});
  background-position: center;
  background-size: cover;
  @media(min-width: 600px){
    height: 300px;
  }
`;

export const Header = () => {

  return (
    <HeaderContainer>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <SwiperItem img={hero0.default.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem img={hero1.default.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperItem img={hero2.default.src} />
        </SwiperSlide>

      </Swiper>
    </HeaderContainer>
  )
}
