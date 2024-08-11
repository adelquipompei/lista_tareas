import React from 'react'
import Tarea from './Tarea'
function ListaTareas({tareas,nuevaTarea}) {
    console.log(tareas)
    const toggleCompletada = (id) => {
        nuevaTarea(tareas.map(tarea => {
            if(tarea.id === id){
                return {...tarea,completada:!tarea.completada}
            }else{
                return tarea
            }
        }))
    }
    return (
        <ul>
            {tareas.length > 0 ? tareas.map(tarea => <Tarea key={tarea.id} tarea={tarea}  toggleCompletada={toggleCompletada}  nuevaTarea={nuevaTarea} />) : <li style={{color: 'rgb(189 189 189)'}}>No hay tareas agregadas...</li> }
        </ul>
    )
}

export default ListaTareas