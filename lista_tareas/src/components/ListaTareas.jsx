import React from 'react'
import Tarea from './Tarea'
function ListaTareas({ tareas, nuevaTarea,showTaskComplete }) {

    const toggleCompletada = id => nuevaTarea(tareas.map(tarea => tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea));
    const editTarea = (id,nuevoTexto) => nuevaTarea(tareas.map( tarea => tarea.id === id ? ({...tarea, texto:nuevoTexto}) : tarea));
    const borrarTarea = (id) => nuevaTarea(tareas.filter(tarea => tarea.id !== id ? tarea : ''));







    return (
        <ul>
            {tareas.length > 0 ? tareas.map(tarea => <Tarea key={tarea.id} tarea={tarea} editTarea={editTarea} toggleCompletada={toggleCompletada}  borrarTarea={borrarTarea} />) : <li style={{ color: 'rgb(189 189 189)', fontStyle:'italic'  }}>No hay tareas agregadas...</li>}
        </ul>
    )
}

export default ListaTareas