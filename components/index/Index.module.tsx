import styled from "styled-components";
const hero = require('../../src/images/hero-index.jpg');
const heroMobile = require('../../src/images/hero-index-mobile.jpg');

export const Header = styled.header`
   height: 100vh;
   background-image: linear-gradient(to right, #000 40%, transparent 58%), url(${hero.default.src});
   background-position: right top;
   padding: 2rem;

   @media(max-width: 678px){
    background-image: url(${heroMobile.default.src});
   }
`;

export const HeaderMobile = styled.header`
   min-height: 100vh;
   display: grid;
   grid-template-rows: 45% 55%;
`;
export const ImageHeaderMobile = styled.div`
   background-image: linear-gradient(to top, #000 0%, transparent 20%), url(${heroMobile.default.src});
   background-position: center top;
   background-size: cover;
   margin-top: 3rem;
`;
export const HeaderContentMobile = styled.div`
   width: 100%;
   padding: 1rem;
   margin: -.5rem auto;
   background-color: #000;
`;
export const HeaderContent = styled.div`
   width: 40%;
   padding: 1rem;
   margin-left: 3rem;
   display: flex;
   flex-direction:column;
   justify-content: center; 
   height: 100%;
`;
export const TextHeader = styled.div`
  h2{
    margin: 3rem 0;
    font-size: 2.6rem;
    font-weight: 500;
    color: #fff;
  }
  p{
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: 400;
    color: #fff;
  }

  @media(max-width: 678px){
    width: 95%;
    margin: auto;
    margin-top: -2rem;
    text-align: center;
    p{
      font-size: 1.6rem;
    }
    h2{
      padding: 0;
    }
  }
`;
export const ButtonsContainer = styled.div`
   width: 90%;
   position:relative;
   margin: 2rem auto;

   @media(min-width: 678px){
    max-width: 300px;
    margin: 2rem 0;
   }
   @media(max-width: 678px){
    max-width: 280px;
   }
`;
export const Button = styled.div`
   width: 100%;
   padding: 1rem;
   background-color: #0F79AF;
   text-align:center;
   border-radius: 3px;
   span{
    font-size: 1.7rem;
    font-weight: 700;
    color: #fff;
   }

`;
export const Separator = styled.p`
   width: 100%;
   color: #fff;
   text-align:center;
   font-size: 1.2rem;

   &: after {
    content: " ";
    position:absolute;
    top: 0; bottom: 0;
    right: 0;
    margin: auto 1rem;
    width: 110px;
    height: 1px;
    background-color: #fff;
  }
  &: before {
    content: " ";
    position:absolute;
    top: 0; bottom: 0;
    left: 0;
    margin: auto 1rem;
    width: 110px;
    height: 1px;
    background-color: #fff;
  }
`;

export const CancelText = styled.p`
  width: 100%;
  font-size: 1.6rem;
  color: #e1e1e1;
  margin: 2rem 0;
  background-color: #000;
`;

export const SeccionServicios = styled.section`
   min-height: 100vh;
   background-color: #fff;
   padding: 2rem;
   align-items:center;

   @media(min-width: 678px){
    display: grid;
    grid-template-columns: 33% 33% 33%;
   }
`;

export const SeccionCard = styled.div`
   color: #1e1e1e;
   margin: 2rem;
   div{
    width: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
   }
   h3{
    font-size: 4rem;
    font-weight: 400;
    color: #000;
    text-align:center;
    margin: 0;
   }
   p{
    font-size: 2rem;
    text-align:center;
    
    margin:auto;
   }
`;

export const SectionDivider = styled.div`
   background-color:#000;
`;