import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BiDownArrow } from 'react-icons/bi';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
const bgCategory = require('../src/images/category.png');

const MenuContainer = styled.ul`
   width: 100%;
   background-color: var(--bg-menu);
   margin: auto;
   padding: 0;
   box-shadow: 1px 1px 6px #1b2129; 
`;

const MenuItem = styled.li`
   padding: 1.2rem 0;
   border-bottom: 1px solid #3b4756;
   list-style:none;
   cursor:pointer;

   p{
    display: flex;
    align-items:center;
    margin: 0 2rem;
    font-size: 1.6rem;
    font-weigth: 700;
    color: #e1e1e1;
    span{
        font-size: 1.2rem;
        margin: 0 .5rem;
        margin-top: 3px;
    }
   }
`;

const CategoriesMenu = styled.ul`
   width: 100%;
   min-height: 90vh;
   background-image: radial-gradient(ellipse at left top,rgba(29,79,115,.2) 10%,#0f171e 80%),radial-gradient(ellipse at left bottom,rgba(29,79,115,.1) 20%,#0f171e 80%);
   box-shadow: 1px 1px 6px #1b2129; 
   margin: 0;
   padding: 1rem;
   cursor:pointer;
    p{
        color: #fff;
    }
    li{
        padding: 0;
        color: #8197a4;
        margin: 1rem;
        list-style:none;

        &:hover{
            color: #fff;
            transition: .2s ease;
        }
    }
`;


const CategoriesMenuBigScreen = styled.div` 
   display:grid;
   grid-template-columns: 50% 50%;
   column-gap: 3rem;
   position:relative;
   min-height: 60vh;
`;

const ContainerCategories = styled.div`
    background-color: var(--bg-menu);
    width: 100%;
    height: 60%;
    padding: 1rem;
    display: grid;
    grid-template-columns: 50% 50%;
    &:not(:last-of-type):before{
        position:absolute;
        content: '';
        display:block;
        width: 1px;
        height: 90%;
        top: 0; bottom: 0;
        right: 0; left: 0;
        margin:auto;
        background-color: #fff;;
    }
    p{
        font-size: 1.6rem;
        color: #fff;
        cursor:pointer;
    }
    li{
        padding: 0;
        color: #8197a4;
        margin: 1rem;
        list-style:none;
        cursor:pointer;

        &:hover{
            color: #fff;
            transition: .2s ease;
        }
    }

`;

const CategoryItem = styled.li`
    background: rgb(40,72,103) url(${bgCategory.default.src});
    background-size: cover;
    background-repeat: no-repeat;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: auto;
    max-width: 190px;
    list-style:none;
    border-radius: 6px;
    
    p{
        text-align:center;
        font-size: 1.4rem;
        color: #fff;
        font-weight: 700;
    }

    &:hover{
        border: 2px solid #fff;
        transition: .2s ease;
    }
`;
interface Props {
    menuIsOpen: any;
    closeMenu: () => void;
}
export const MenuExplore = ({ menuIsOpen, closeMenu }: Props) => {

    const categoriesRef: any = useRef(null);
    const isBigScreen = useMediaQuery({ query: '(min-width: 750px)' });

    const handleOpenCloseCategories = () => {
        categoriesRef.current.classList.toggle('ocultar');
    }

    return (
        <MenuContainer className={(menuIsOpen) ? '' : 'ocultar'}>
            {
                (isBigScreen) ?
                    <CategoriesMenuBigScreen onClick={closeMenu}>
                        <ContainerCategories>
                            <Link href={'/categoria/amazon'}><CategoryItem><p>Oringinales de Amazon</p></CategoryItem></Link>
                            <Link href={'/categoria/familia'}><CategoryItem><p>Familia</p></CategoryItem></Link>
                            <Link href={'/categoria/recientes'}><CategoryItem><p>Añadidos recientemente</p></CategoryItem></Link>
                            <Link href={'/categoria/proximamente'}><CategoryItem><p>Proximamente</p></CategoryItem></Link>

                        </ContainerCategories>
                        <ContainerCategories>
                            <div>
                                <p>Generos</p>
                                <Link href={'/categoria/accion'}><li>Accion</li></Link>
                                <Link href={'/categoria/aventura'}><li>Aventura</li></Link>
                                <Link href={'/categoria/comedia'}><li>Comedia</li></Link>
                                <Link href={'/categoria/drama'}><li>Drama</li></Link>
                                <Link href={'/categoria/ciencia-ficcion'}><li>Ciencia ficcion</li></Link>
                                <Link href={'/categoria/terror'}><li>Terror</li></Link>
                                <Link href={'/categoria/animacion'}><li>Animacion</li></Link>
                                <Link href={'/categoria/documental'}><li>Documental</li></Link>

                            </div>
                        </ContainerCategories>
                    </CategoriesMenuBigScreen>

                    :
                    <>
                        <MenuItem><p>inicio</p></MenuItem>
                        <MenuItem><p>Series</p></MenuItem>
                        <MenuItem><p>Peliculas</p></MenuItem>
                        <MenuItem onClick={handleOpenCloseCategories}><p>Categorias <span><BiDownArrow /></span></p></MenuItem>
                        <CategoriesMenu onClick={closeMenu} className='ocultar' ref={categoriesRef}>
                            <p>Categorias princiaples</p>
                            <Link href={'/explorar/popular'}><li>Populares</li></Link>
                            <Link href={'/explorar/top_rated'}><li>Grandes Exitos</li></Link>
                            <Link href={'/explorar/now_playing'}><li>Tendencias</li></Link>
                            <Link href={'/explorar/upcoming'}><li>Proximamente</li></Link>
                            <p>Generos</p>
                            <Link href={'/categoria/accion'}><li>Accion</li></Link>
                            <Link href={'/categoria/aventura'}><li>Aventura</li></Link>
                            <Link href={'/categoria/comedia'}><li>Comedia</li></Link>
                            <Link href={'/categoria/drama'}><li>Drama</li></Link>
                            <Link href={'/categoria/ciencia-ficcion'}><li>Ciencia ficcion</li></Link>
                            <Link href={'/categoria/terror'}><li>Terror</li></Link>
                            <Link href={'/categoria/animacion'}><li>Animacion</li></Link>
                            <Link href={'/categoria/documental'}><li>Documental</li></Link>
                            <br/>
                        </CategoriesMenu>
                    </>
            }
        </MenuContainer>
    )
}
