import React, { createContext, useState } from 'react';
import { createAnUserWithEmailAndPassword } from '../firebase/auth';

interface AuthContextProps {
    isLogged: boolean;
    login: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({children}:any) => {
  
    const [isLogged, setIsLogged] = useState<boolean>(false);
    
    const login = async() => {
        const resp = await createAnUserWithEmailAndPassword('romario','juani@gmail.com', '123456789');
        console.log(resp);
    }

    return (
    <AuthContext.Provider value={{
        isLogged,
        login
    }}>
        {children}
    </AuthContext.Provider>
  )
}
