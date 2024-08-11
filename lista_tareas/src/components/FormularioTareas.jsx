import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import App from '../App';
import {v4 as uuidv4} from 'uuid';

function FormularioTareas({tareas,nuevaTarea}) {
    

    const [inputTarea , setinputTarea] = useState('');
    
    const handleChange = (e) => {
        setinputTarea(e.target.value)
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputTarea.trim() != ''){
        nuevaTarea(
            [
                ...tareas,
                {
                    id: uuidv4() ,
                    texto:inputTarea,
                    completada:false
                }
            ]
        )
        setinputTarea('')
    }
    
}





  return (
    <>
    <form action="" className='formulario-tareas' onSubmit={handleSubmit}>
        <input type="text" className='formulario-tareas__input' placeholder='Escribe una tarea' value={inputTarea} onChange={handleChange} />

        <button type='submit' className='formulario-tareas__btn'>

            <FontAwesomeIcon icon={faPlusSquare} className='formulario-tareas__icono-btn' />

        </button>

    </form>


    
    </>
   

  )
}

export default FormularioTareas