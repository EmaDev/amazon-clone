import type { NextPage } from 'next';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const Index: NextPage = () => {

  const {login} = useContext(AuthContext);

  return (
    <Link href={'/home'}>
      <h1 onClick={login}>Ingresar</h1>
    </Link>
  )
}

export default Index;
