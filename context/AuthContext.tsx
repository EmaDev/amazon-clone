import React, { createContext, useState } from 'react';
import { createAnUserWithEmailAndPassword, loginWithEmailAndPassword, logOut } from '../firebase/auth';

interface AuthContextProps {
    isLoading: boolean;
    isLogged: boolean;
    user: UserProps|null;
    ingresar: (email: string, clave:string) => void;
    registrarse: (nombre: string, email: string, clave: string) => void;
    cerrarSesion: () => void;
}
interface UserProps {
    name: string;
    uid: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({children}:any) => {
  
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLogged, setIsLogged] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserProps|null>(null);
    
    const ingresar = async(email: string, clave:string) => {
        setIsLoading(true);
        const {ok, uid} = await loginWithEmailAndPassword(email, clave);
        if(ok){
            setUserData({
                name: '',
                uid
            });
            setIsLogged(true);
        }
        setIsLoading(false);
    }

    const registrarse = async(nombre: string, email: string, clave: string) => {
        setIsLoading(true);
        const {ok, uid} = await createAnUserWithEmailAndPassword(nombre, email, clave);
        if(ok){
            setUserData({
                name: 'juanito',
                uid: uid
            });
            setIsLogged(true);
        }
        setIsLoading(false);
    }

    const cerrarSesion = () => {
        logOut();
        setUserData(null);
        setIsLogged(false);
    }

    return (
    <AuthContext.Provider value={{
        isLoading,
        isLogged,
        user:userData,
        ingresar,
        registrarse,
        cerrarSesion
    }}>
        {children}
    </AuthContext.Provider>
  )
}
