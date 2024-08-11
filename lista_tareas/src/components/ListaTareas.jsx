import React from 'react'
import Tarea from './Tarea'
function ListaTareas({tareas,nuevaTarea}) {
    console.log(tareas)
   
    return (
        <ul>
            {tareas.length > 0 ? tareas.map((tarea) => <Tarea key={tarea.id} tarea={tarea}  nuevaTarea={nuevaTarea} />) : <li style={{color: 'rgb(189 189 189)'}}>No hay tareas agregadas...</li> }
        </ul>
    )
}

export default ListaTareas