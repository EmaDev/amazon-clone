import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../context/GobalContext'
import { AuthContextProvider } from '../context/AuthContext'
import { PeliculasContextProvider } from '../context/PeliculasContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <AuthContextProvider>
        <PeliculasContextProvider>
          <Component {...pageProps} />
        </PeliculasContextProvider>
      </AuthContextProvider>
    </GlobalContextProvider>
  )
}

export default MyApp
