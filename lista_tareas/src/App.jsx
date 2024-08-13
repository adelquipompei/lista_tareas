import './App.css'
import FormularioTareas from './components/FormularioTareas'
import Header from './components/Header'
import { useState } from 'react'
import ListaTareas from './components/ListaTareas';
import '../node_modules/animate.css/animate.css'

function App() {

  const [tareas, nuevaTarea] = useState([]);
  const [showTaskComplete , setShowTaskComplete ] = useState(false);



  return (
    <div className='contenedor'>

      <Header />
      <FormularioTareas tareas={tareas} nuevaTarea={nuevaTarea} />
      <ListaTareas tareas={tareas} nuevaTarea={nuevaTarea} showTaskComplete={showTaskComplete} />



    </div>
  )
}

export default App
