import React, { useState, useContext,useEffect } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import {IoAlert} from 'react-icons/io5';
import { ButtonCambiarALogin, ButtonSubmit, Container, Form, FormContent, Input, LogoContainer, PreguntaLoginSignUp } from '../components/Registro.module';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { Spinner } from '../components/Spinner';
import { useRouter } from 'next/router';


const IngresarPage: NextPage = () => {

  const [onRegister, setOnRegister] = useState<boolean>(false);
  const {formValues,handleInputChange,reset} = useForm({nombre: '', email:'', clave: '', clave2:''});
  const {isLoading,isLogged,registrarse, ingresar} = useContext(AuthContext);
  const {push} = useRouter();
  
  useEffect(() => {
    if(isLogged){
      push('/inicio');
    }
  },[isLogged]);

  const handleCambiarLoginRegister = () => {
    setOnRegister((prev) => !prev);
    reset();
  }
  const handleIngresar = (e:any) => {
    e.preventDefault();
    const {email, clave} = formValues;
    if(email.trim() === '' || clave.trim() === ''){
      return alert('completa todos los campos');
    }
    ingresar(email, clave);
  }

  const handleRegistro = (e:any) => {
    e.preventDefault();
    const {nombre,email,clave,clave2} = formValues;
    if(nombre.trim() === '' ||email.trim() === ''||clave.trim() === ''||clave2.trim() === ''){
      return alert('todos los camplos son obligatorios');
    }
    if(formValues.clave === formValues.clave2){
      registrarse(formValues.nombre, formValues.email, formValues.clave);
    }else{
      alert('las claves son distintas')
    }
  }

  if(isLoading) {
    return(
      <Spinner/>
    );
  }
  return (
    <Container>
      <div>
        <LogoContainer>
          <Image src={require('../src/logo-dark.png')} />
        </LogoContainer>
        <Form>
          {onRegister ?
            <FormContent>
              <h2>Crear una cuenta</h2>
              <Input>
                <label>Su nombre</label>
                <input type={'text'} 
                placeholder={'Nombre y apellido'}
                name='nombre'
                value={formValues.nombre}
                onChange={handleInputChange}
                />
              </Input>
              <Input>
                <label>Corre electronico</label>
                <input type={'email'} 
                name='email'
                value={formValues.email}
                onChange={handleInputChange}
                />
              </Input>
              <Input>
                <label>Clave</label>
                <input type={'password'} 
                placeholder={'Al menos 6 caracteres'}
                name='clave'
                value={formValues.clave}
                onChange={handleInputChange}
                />
                <span><i><IoAlert/></i>Las contraseñas deben tener al menos 6 caracteres.</span>
              </Input>
              <Input>
                <label>Verificar contraseña</label>
                <input type={'password'} 
                name='clave2'
                value={formValues.clave2}
                onChange={handleInputChange}
                />
              </Input>
              <ButtonSubmit type='submit' onClick={handleRegistro}>Crea tu cuenta de Amazon</ButtonSubmit>
              <p>Al crear una cuenta, acepta los <span>Términos de uso y la Política de privacidad de </span>Amazon.</p>
              <ButtonCambiarALogin>
                <p>
                  Ya tienes una cuenta
                  <span onClick={handleCambiarLoginRegister}>Iniciar sesión</span>
                </p>
              </ButtonCambiarALogin>
            </FormContent>
            :

            <FormContent>
              <h2>Iniciar Sesion</h2>
              <Input>
                <label>Dirección de correo electrónico o número de móvil</label>
                <input type={'email'} 
                name='email'
                value={formValues.email}
                onChange={handleInputChange}
                />
              </Input>
              <Input>
                <label>Clave</label>
                <input type={'password'} 
                name='clave'
                value={formValues.clave}
                onChange={handleInputChange}
                />
              </Input>
              <ButtonSubmit type={'submit'} onClick={handleIngresar}>Iniciar sesion</ButtonSubmit>
              <p>Al continuar, acepta los <span>Términos de uso y la Política de privacidad de </span>Amazon.</p>
              <PreguntaLoginSignUp><p>¿Eres nuevo en Amazon?</p></PreguntaLoginSignUp>
              <ButtonSubmit type={'button'} onClick={handleCambiarLoginRegister} color='blanco'>Crea tu cuenta de Amazon</ButtonSubmit>
            </FormContent>
          }
        </Form>
      </div>
    </Container>
  )
}

export default IngresarPage;
