import { faCheck, faCheckSquare, faEdit, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'


function Tarea({ tarea,editTarea,toggleCompletada,borrarTarea }) {
    const [editarTarea,setEditarTarea] = useState(false)
    const [newTask, setNewTask] = useState(tarea.texto)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        editTarea(tarea.id,newTask);
        setEditarTarea(false)
    }

    return (
        <>
            <li className='lista-container animate__animated animate__fadeIn'>
                <div style={{display:'flex',alignItems:'center',width:'100%'}}>
                    <FontAwesomeIcon style={{fontSize:'15px'}} onClick={() => toggleCompletada(tarea.id)} icon={tarea.completada ? faCheckSquare : faSquare} className='lista-tareas__icono' />
                    {
                        editarTarea ? 
                        <form action="" style={{display:'flex'}} onSubmit={handleSubmit} >
                            <input type="text"  value={newTask} onChange={(e) => setNewTask(e.target.value)} className='input-editar animate__animated animate__fadeIn animate__faster ' />
                            <button type='submit'  className='btn-actualizar'>Actualizar</button>
                        </form> :
                        tarea.texto
                    }
                </div>
                <div className='editar-eliminar animate__animated animate__fadeIn animate__faster'>
                    <FontAwesomeIcon onClick={(e) => setEditarTarea(!editarTarea)} icon={faEdit} className='lista-tareas__icono ' style={{color: 'gray'}} />
                    <FontAwesomeIcon icon={faTimes} className='lista-tareas__icono' style={{color: 'gray'}} onClick={() => borrarTarea(tarea.id)} />
                </div>
            </li>
        </>
    )
}

export default Tarea