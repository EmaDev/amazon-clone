import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Button, ButtonsContainer, CancelText, Header, HeaderContent, HeaderContentMobile, HeaderMobile, ImageHeaderMobile, SeccionCard, SeccionServicios, SectionDivider, Separator, TextHeader } from '../components/index/Index.module';
import { Layout } from '../components/Layout';
import { AuthContext } from '../context/AuthContext';



const Index: NextPage = () => {

  const { login } = useContext(AuthContext);
  const isBigScreen = useMediaQuery({ query: '(min-width: 678px)' });

  return (
    <Layout>
      {
        (isBigScreen) ?
          <Header>
            <HeaderContent>
              <TextHeader>
                <h2>Ve películas y series</h2>
                <p>Disfruta de títulos Amazon Original exclusivos, además de películas y series populares por ARS 319/mes, más los impuestos aplicables. Disfruta ahora, cancela cuando quieras.</p>
              </TextHeader>
              <ButtonsContainer>
                <Link href={'/'}><Button><span>¿Eres cliente de Prime Video? Identifícate</span></Button></Link>
                <Separator>O</Separator>
                <Link href={'/'}><Button><span>Comienza tu periodo de prueba gratis*</span></Button></Link>
              </ButtonsContainer>
              <CancelText>*Cancela la prueba gratis en cualquier momento</CancelText>
            </HeaderContent>
          </Header>
          :
          <HeaderMobile>
            <ImageHeaderMobile />
            <HeaderContentMobile>
              <TextHeader>
                <h2>Ve películas y series</h2>
                <p>Disfruta de títulos Amazon Original exclusivos, además de películas y series populares por ARS 319/mes, más los impuestos aplicables. Disfruta ahora, cancela cuando quieras.</p>
              </TextHeader>

              <ButtonsContainer>
                <Link href={'/'}><Button><span>¿Eres cliente de Prime Video? Identifícate</span></Button></Link>
                <Separator>O</Separator>
                <Link href={'/'}><Button><span>Comienza tu periodo de prueba gratis*</span></Button></Link>

              </ButtonsContainer>
            </HeaderContentMobile>
          </HeaderMobile>
      }
      <SectionDivider><br/><br/></SectionDivider>
      <SeccionServicios>
        <SeccionCard>
          <div><Image src={require('../src/images/servicio-ver.png')} /></div>
          <h3>Ver en cualquier parte</h3>
          <p>Disfruta desde la web o con la aplicación de Prime Video en tu teléfono, tablet o ciertos Smart TV en hasta 3 dispositivos al mismo tiempo.</p>
        </SeccionCard>
        <SeccionCard>
          <div><Image src={require('../src/images/servicio-descarga.png')} /></div>
          <h3>Descarga y disfruta</h3>
          <p>Disfruta de contenido sin conexión con la aplicación Prime Video cuando descargues títulos en tu iPhone, iPad, tablet o dispositivo Android.</p>
        </SeccionCard>
        <SeccionCard>
          <div><Image src={require('../src/images/servicio-ahorro.png')} /></div>
          <h3>Ahorro de datos</h3>
          <p>Controla el uso de datos mientras descargas y ves videos en ciertos teléfonos y tablets.</p>
        </SeccionCard>
      </SeccionServicios>
    </Layout>
  )
}

export default Index;
