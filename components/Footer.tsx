import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const FooterContianer = styled.footer`
   padding-top: 3rem;
   margin: 1rem;
   background-color: var(bg-primary);
   display:flex;
   flex-direction: column;
   align-items:center;
   justify-content: center;
`;

const Detalles = styled.ul`
    margin:auto;
    margin-top: 2rem;
    text-align:center;
    li, a{
      color: #8197a4;
      display: inline-block;
      padding: 4px;
      white-space: normal;
      text-align:center;
      font-size: 1.4rem;
    }
    a{
      display:block;
      width: 100%;
      text-align:center;
    }
    
`;
export const Footer = () => {
  return (
    <FooterContianer>
      <Image width={107} height={32} src={require('../src/logo.svg')} />
      <Detalles>
        <li>Términos y Aviso de privacidad</li>
        <li>Envíanos tus comentarios</li>
        <li>Ayuda</li>
        <a>Desarrollado con ❤️ por Emanuel Cisterna</a>
      </Detalles>
    </FooterContianer>

  )
}
