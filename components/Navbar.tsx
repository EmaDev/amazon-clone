import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { GoSearch } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { Buscador } from './Buscador';
import { MenuExplore } from './MenuExplore';
import { BiDownArrow } from 'react-icons/bi';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Container = styled.header`
   position: fixed;
   width: 100%;
   z-index: 999;
`;
const ContainerNavBar = styled.div`
   padding: 1.5rem;
   background-color: var(--bg-secondary);
   display: flex;
   justify-content: space-between;
   align-items:center;

   div{
    display: flex;
    justify-content: center;
    align-items:center;
    color: #8197a4;
   }
`;

const ItemText = styled.span<any>`
   margin: 0 1rem;
   font-size: 1.6rem;
   font-weight: 700;
   text-transform:capitalize;
   padding: 5px 0;
   cursor:pointer;
   display:flex;
   align-items:center;

   ${({ active }) => active ?
    `border-bottom: 2px solid #fff;
    color: #fff;`
    : ''}

   &:hover{
    color: #fff;
   }
   &:after{

   }
   
`;

export const Navbar = () => {

  const isBigScreen = useMediaQuery({ query: '(min-width: 678px)' });
  const isBigBigScreen = useMediaQuery({ query: '(min-width: 880px)' });
  const {push} = useRouter();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const openMenu = () => {
    setMenuIsOpen((prev) => !prev);
  }

  return (
    <Container>
      <ContainerNavBar>
        <div>
          <Image onClick={() => push('/')} width={'110px'} height={'32px'} src={require('../src/logo.svg')} />
          {(isBigScreen) ?
            <>
              <Link href={'/'}><ItemText active>Inicio</ItemText></Link>
              <Link href={'/series'}><ItemText>series</ItemText></Link>
              <Link href={'/peliculas'}><ItemText>peliculas</ItemText></Link>
              <ItemText onClick={openMenu}>Categorias<BiDownArrow size={'1.2rem'} style={{margin: '0 .5rem'}}/></ItemText>
            </>
            :
            <ItemText onClick={openMenu}>Explorar<BiDownArrow size={'1.2rem'} style={{margin: '0 .5rem'}}/></ItemText>
          }
        </div>
        <div>
          {(isBigBigScreen) ? <Buscador /> : <GoSearch size={'2rem'} style={{ margin: '0 2rem' }}/>}
          <FaUserCircle size={'3rem'} />
          {(isBigScreen) && <ItemText>Emanuel</ItemText>}
        </div>
      </ContainerNavBar>
      <MenuExplore menuIsOpen={menuIsOpen} closeMenu={openMenu}/>
    </Container>
  )
}
