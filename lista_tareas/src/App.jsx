import './App.css'
import FormularioTareas from './components/FormularioTareas'
import Header from './components/Header'
import { useState } from 'react'
import ListaTareas from './components/ListaTareas';
import '../node_modules/animate.css/animate.css'

function App() {

  const [tareas, nuevaTarea] = useState([]);



  return (
    <div className='contenedor'>

      <Header />
      <FormularioTareas tareas={tareas} nuevaTarea={nuevaTarea} />
      <ListaTareas tareas={tareas} nuevaTarea={nuevaTarea}  />



    </div>
  )
}

export default App
