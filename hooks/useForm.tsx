import {useState} from 'react';

interface initialState{
    nombre: string; email:string; clave: string; clave2:string;
}

export const useForm = ( initialState = {nombre: '', email:'', clave: '', clave2:''}) => {
    
    const [formValues, setValues] = useState<initialState>(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({target}:any) => {

        setValues({
            ...formValues,
            [ target.name ]: target.value
        });

    }

    return { formValues, handleInputChange, reset };
}
