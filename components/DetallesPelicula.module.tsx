import styled from "styled-components";

export const HeaderContainer = styled.header<any>`
   position:relative;
   min-height: 50vh;
   background: url(${ ({img}) => img }); 
   background-size: cover;
   background-position: bottom;
   background-repeat: no-repeat;
   
   @media(min-width: 678px){
      background-position: top right;
      background-size: contain;
      height: 95vh;
   }
`;
export const GridHeader = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
    background: rgb(15,23,30);
    background: linear-gradient(90deg, rgba(15,23,30,1) 0%, rgba(15,23,30,0.969625350140056) 49%, rgba(15,23,30,0.06486344537815125) 94%);
    display:grid;
    @media(min-width: 600px){
      grid-template-columns: 60% 40%;
    }
`;

export const Blur = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   bottom: -1rem;
   background: rgb(15,23,30);
   background: linear-gradient(0deg, rgba(15,23,30,1) 0%, rgba(15,23,30,0.969625350140056) 10%, 
   rgba(15,23,30,0.06486344537815125) 85%);
   
   `;
export const DetalleContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content:center;
   z-index: 1;
`;

export const Title = styled.h1`
   margin: 1rem;
   margin-top: -1rem;
   font-size: 3.5rem;
   font-weight: 700;
   color: #fff;
   z-index: 2;
`;

export const IconsDetalles = styled.div`
   margin: 1rem;
   display:flex;
   align-items: center;
   color: #425265;
   font-size: 1.3rem;
   max-width: 350px;
   p{
      margin: 0 .5rem;
   }
   span{
      margin: 0 .5rem;
      padding: 0 1rem;
      border: 1px solid #425265;
      border-radius: 4px;
   }
   
`;
export const ActionButtonsContainer = styled.div`
   margin:auto;
   width: 100%;
   div{
      margin:auto;
      display: flex;
      justify-content:center;
      align-items:center;
      max-width: 300px;
   }
   @media(min-width: 600px){
      display: flex;
      max-width: 500px;
      margin: 1rem;
   }
`;
export const ButtonPlay = styled.button`
   width: 90%;
   display: flex;
   align-items:center;
   margin: 2rem auto;
   border-radius: 6px;
   border-style:none;
   padding: 2rem;
   color: #fff;
   background-color:#0f79af;
   p{
      margin: 0 2rem;
      font-size: 1.8rem;
   }
   @media(min-width: 600px){
      max-width: 300px;
   }
`;

export const ActionButton = styled.div`
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: center;
   margin:auto;
   width: 70px;
   position:relative;
   span{
      color: #e1e1e1;
      font-size: 1.4rem;
      font-weight: 700;
      &:first-child{
         text-align:center;
         font-size: 3rem;
         margin: 1rem auto;
         padding: 1rem;
         width: 46px; height: 46px;
         border-radius: 50%;
         background-color:#425265;
         display:flex;
         align-items:center;
         position:relative;
      }
      &:last-child{
         position:absolute;
         top: 60px;
         text-align:center;
         @media(min-width: 600px){
            display:none;
         }
      }
   }
`;

export const Resena = styled.p`
   font-size: 1.6rem;
   font-weight: 500;
   color: #fff;
   width: 100%;
   padding: 1rem;
   margin: 2rem 0;
   @media(max-width: 600px){
      margin-top: 4rem;
   }
`;

export const ItemDetalle = styled.div`
   margin: 1rem;
   @media(min-width: 600px){
      padding: 1rem;
   }
   h4{
      font-size: 1.6rem;
      font-weight: 700;
      color: #8197a4;
      margin: 0;
   }
   p{
      font-size: 1.6rem;
      font-weight: 500;
      color: #79b8f3;
      margin: 0;
   }
`;

export const ConstButtonsConmpartir = styled.div`
   display: flex;
   justify-content:center;
   align-items: center;
   margin: 2rem auto;
   a{
      font-size: 1.6rem;
      color: #f0f0ff;
      margin: 0 1rem;
      display: flex;
      align-items:center;
      span{
         display:inline-block;
      }
   }
`;