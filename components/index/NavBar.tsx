import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import {AiOutlineUser} from 'react-icons/ai';
import {IoEarthOutline} from 'react-icons/io5';


const Container = styled.header`
   position: fixed;
   width: 100%;
   z-index: 999;
   top: 0;
`;
const ContainerNavBar = styled.div`
   padding: 1.3rem;
   background-color: var(--bg-secondary);
   display: flex;
   justify-content: space-between;
   align-items:center;
   color: #8197a4;

   div{
    display: flex;
    justify-content: center;
    align-items:center;
   }

   @media(min-width: 678px){
    padding: 2rem;
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

   &:hover{
    color: #fff;
   }
   
`;

export const NavBar = () => {

  const {push} = useRouter();
  const isBigScreen = useMediaQuery({ query: '(min-width: 678px)' });

  return (
    <Container>
      <ContainerNavBar>
        <div>
        <Image onClick={() => push('/')} width={'110px'} height={'32px'} src={require('../../src/logo.svg')} />
        </div>
        {
          (isBigScreen) ? 
          <div>
          <ItemText><IoEarthOutline size={'2.6rem'} style={{marginRight: '1rem'}}/>ES</ItemText>
          <Link href={'/ingresar'}><ItemText>Identificarse</ItemText></Link>
          </div>
          :
          <Link href={'/ingresar'}><AiOutlineUser size={'2.8rem'}/></Link>
        }
      </ContainerNavBar>
    </Container>
  )
}
