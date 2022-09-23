import React from 'react';
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';


const Container = styled.div`
   padding: 5px 1rem;
   margin: 0 1rem;
   width: 200px;
   border: 1px solid gray;

   display: flex;
   align-items:center;
   justify-content: left;

   font-size: 1.8rem; 

   input{
    width: 100%;
    background: none;
    border-style: none;
    padding: 3px 1rem;
    font-size: 1.8rem;
   }
`;

export const Buscador = () => {
  return (
    <Container>
      <GoSearch/>
      <input placeholder='Buscar'/>
    </Container>
  )
}
