import { useState } from "react";

//formulario inicial, hook para trabajar con formularios, se llama react-hook-form
//formState posibles errores que pueden ocurrir a la hora de introducir datos en el formulario.
//Definición del hook useForm
export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    //función para manejar cambios en los campos
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            //Estoy expandiendo las propiedades y valores del objeto formState dentro de otro objeto
            //Estoy añadiendo dentro en otro objeto lo que tiene el objeto formState y le añado la propiedad name
            ...formState,
            [ name ]: value
        });
    }
    //restablece los valores del formulario a su valor inicial
    const onResetForm = () => {
        setFormState( initialForm );
    }
    //retorno un objeto que contiene el valor actual del formulario
    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}