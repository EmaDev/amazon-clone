import styled from 'styled-components';

export const Container = styled.section`
   width: 100%;
   height: 100vh;
   background-color: #fff;

   @media(min-width: 450px){
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
   }
`;

export const LogoContainer = styled.div`

   margin: 2rem auto; 
   margin-top: 2rem;
   display: flex;
   justify-content: center;
   @media(max-width: 450px){
    margin-bottom: 0;
    background: rgb(203,203,203);
    background: linear-gradient(0deg, rgba(203,203,203,1) 29%, rgba(252,252,253,1) 100%);
   }
`;

export const Form = styled.form`
   margin:auto
   padding: .5rem;
   border: 1px solid gray;
   border-radius: 4px;
   h2{
    font-size: 2.6rem;
    font-weight: 400;
    color: #111;
    margin: .5rem 1rem; 
   }

   @media(max-width: 450px){
    background-color: #f6f6f6;
    padding: 1rem .5rem;
   }
   @media(min-width: 450px){
    max-width: 350px;
   }
`;
export const FormContent = styled.div`
   padding: 1rem .5rem;
   margin:auto;
   position:relative;
   p{
    width: 90%;
    margin:auto;
    font-size: 1.4rem;
    span{
      color: #0066c0;
    }
   }
`;
export const Input = styled.div`
  padding: .5rem 1rem;
  margin: 0 auto;
  input{
    width: 100%;
    margin:auto;
    padding:1rem;
    border-style:none;
    border: 1px solid gray;
    border-radius: 3px;
    outline: 0;

    &:focus{
      border-color: #e77600;
      box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
    }
  }
  label{
    margin:auto;
    width: 100%;
    font-size: 1.2rem;
    font-weight: 700;
  }
  span{
    text-aling: center;
    font-size: 1.2rem;
    i{
      color: #0066c0;
      font-size: 1.4rem;
    }
  }

  @media(max-width: 450px){
    label{
        font-size: 1.6rem;
    }
  }

`;

export const ButtonSubmit = styled.button`
  background: #f0c14b;
  
  ${({ color }) => color === 'blanco'
    ?
    `background: rgb(232,234,237);
    background: linear-gradient(0deg, rgba(232,234,237,1) 29%, rgba(252,252,253,1) 100%);`
    :
    `background: rgb(241,197,86);
    background: linear-gradient(0deg, rgba(241,197,86,1) 42%, rgba(246,220,157,1) 100%);`
  }
  border-style:none;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  width: 90%;
  display:block;
  margin: 1rem auto;
  padding: .8rem;
  border-radius: 4px;
  border: 1px solid ${({ color }) => color === 'blanco' ? '#878787;' : '#5c4713;'};

  &:hover{
    ${({ color }) => color === 'blanco' ?
    'background: linear-gradient(0deg, rgba(203,203,203,1) 29%, rgba(252,252,253,1) 100%);'
    :
    'background: linear-gradient(0deg, rgba(252,197,58,1) 42%, rgba(252,220,142,1) 100%);'
  }
    transition: .3s ease all;
  }

  @media(max-width: 450px){
    margin: 2rem auto;
    padding: 1.2rem;
    font-size: 1.6rem;
  }
`;

export const PreguntaLoginSignUp = styled.div`
   position:relative;
   margin: 2rem auto;
   p{
    font-size: 1.4rem;
    color: gray;
    font-weight: 400;
    text-align:center;
    margin: 0;
   }
   &:before{
    content: " ";
    position:absolute;
    width: 55px;
    height: 1px;
    top: 0; bottom: 0; left: 0;
    margin: auto;
    background-color: gray;
   }
   &:after{
    content: " ";
    position:absolute;
    width: 55px;
    height: 1px;
    top: 0; bottom: 0; right: 0;
    margin: auto;
    background-color: gray;
   }
`;

export const ButtonCambiarALogin = styled.div`
  height: 50px;
  margin-top: 2rem;
  margin-bottom: -18px;
  background: -webkit-linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
  background: linear-gradient(to bottom,rgba(0,0,0,.14),rgba(0,0,0,.03) 3px,transparent);
  z-index: 0;
  zoom: 1;

  p{
    padding: 1rem;
    font-size: 1.3rem;

    span{
      margin: 0 1rem;
      color: #0066c0;
      cursor: poiner;
      &:hover{
        text-decoration: underline;
        cursor: pointer;
        color: #c45500;
      }
    }
  }

  @media(max-width: 450px){
    p{
        font-size: 1.6rem;
    }
  }
`;