import { faCheck, faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'


function Tarea({ tarea,nuevaTarea }) {
    
   
    const arraytarea = [tarea]
    const [editarTarea,setEditarTarea] = useState(false)
    const [completada,setCompletada] = useState(false);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditarTarea(false)

    }


    const toggleTarea = (id) => {
        console.log(id)
        nuevaTarea(
          tarea.map(t => {
                tarea.id === id ? {...t,completada:!t.completada} : t;
            })
        )
    }



    
    return (
        <>
            <li className='lista-container animate__animated animate__fadeIn'>
                <div style={{display:'flex',alignItems:'center',width:'100%'}}>
                    <FontAwesomeIcon style={{fontSize:'15px'}} onClick={() => toggleTarea(tarea.id)} icon={tarea.completada ? faCheckSquare : faSquare} className='lista-tareas__icono' />
                    {
                        editarTarea ? 
                        <form action="" style={{display:'flex'}} onSubmit={handleSubmit} >
                            <input type="text" placeholder={tarea.texto} className='input-editar animate__animated animate__fadeIn animate__faster ' />
                            <button type='submit' className='btn-actualizar'>Actualizar</button>
                        </form> :
                        tarea.texto
                    }
                </div>
                <div className='editar-eliminar animate__animated animate__fadeIn animate__faster'>
                    <FontAwesomeIcon onClick={(e) => setEditarTarea(!editarTarea)} icon={faEdit} className='lista-tareas__icono ' style={{color: 'gray'}} />
                    <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono' style={{color: 'gray'}} />
                </div>
            </li>
        </>
    )
}

export default Tarea