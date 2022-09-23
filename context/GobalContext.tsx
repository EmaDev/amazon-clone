import React, { createContext, useState } from 'react';

interface GlobalContextProps {
    isLoding: boolean;
    setIsLoadig: () => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);

export const GlobalContextProvider = ({children}:any) => {
  
    const [isLoding, setIsloading] = useState<boolean>(false);
    
    const setLoding = () => {
        setIsloading( (prev) => !prev);
    }

    return (
    <GlobalContext.Provider value={{
        isLoding,
        setIsLoadig: setLoding
    }}>
        {children}
    </GlobalContext.Provider>
  )
}
