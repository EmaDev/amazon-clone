import React from 'react';
import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
const userImg = require('../src/images/user.png');
const userChildImg = require('../src/images/user-child.png');

const MenuContainer = styled.section`
   background-color: #252e39;
   top: 0;
   transition: .3s ease all;

   @media(max-width: 678px){
    position:fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;
   }
   @media(min-width: 678px){
    position:absolute;
    right: 2rem;
    margin-top: 6rem; 
    display: grid;
    grid-template-columns: 50% 50%;
    border-radius: 4px;
    box-shadow: 2px 2px 8px #161a20;
  }
`;

const MenuUl = styled.ul`

   @media(max-width: 678px){
    width: 95%;
    margin:auto; 
    padding: 0 1rem;
    padding-bottom: 2rem;
    position:relative;
   
    h4{
    font-size: 1.8rem;
    font-wight: 700;
    color: #fff;
    margin: 2rem 0;
    }

    &:first-of-type{
      border-bottom: 2px solid #1e2630;
    }
  }
  
   @media(min-width: 678px){
    margin: 1rem 0;
    padding: 1rem;

    h4{
      display:none;
    }
    &:first-of-type{
      border-right: 2px solid #1e2630;
    }
   }
`;

const ItemUl = styled.li`
  display:flex;
  align-items:center;
  margin: 2rem 0;
  p{
    margin: 0;
    font-size: 1.6rem;
    color: #c4cacf;
    &:hover{
      color: #fff;
      transition: .5s ease;
    }
  }
  img{
    width: 35px;
    height: 35px;
    margin-right: 1rem;
  }

  @media(min-width: 678px){
    margin: 0;
    p{
      font-size: 1.4rem;
      margin: 1rem;
    }
  }
`;

const ButtonClose = styled.div`
   border-style:none;
   background: transparent;
   font-size: 3.5rem;
   color: #9f9f9f;
   position: absolute;
   top: 0; right: 0;

   @media(min-width: 678px){
    display:none;
   }
`;

interface Props {
  menuIsOpen: any;
  closeMenu: () => void;
}

export const Menu = ({ menuIsOpen, closeMenu }: Props) => {
  return (
    <div className={(menuIsOpen) ? '' : 'ocultar'}>
      <MenuContainer>
        <MenuUl>
          <ButtonClose onClick={closeMenu}><IoMdClose /></ButtonClose>
          <h4>Perfiles</h4>
          <ItemUl><img src={userImg.default.src} />
            <p>Emanuel</p>
          </ItemUl>
          <ItemUl><img src={userChildImg.default.src} />
            <p>Infantil</p>
          </ItemUl>
          <ItemUl><p>Editar perfiles</p></ItemUl>
          <ItemUl><p>Mas informacion</p></ItemUl>
        </MenuUl>
        <MenuUl>
          <h4>Mas</h4>
          <ItemUl><p>Mis lista</p></ItemUl>
          <ItemUl><p>Cuentas y configuracion</p></ItemUl>
          <ItemUl><p>Dispositivos compatibles</p></ItemUl>
          <ItemUl><p>Ayuda</p></ItemUl>
          <ItemUl><p>¿No eres Emanuel? Cerrar sesión</p></ItemUl>
        </MenuUl>
      </MenuContainer>
    </div>
  )
}
