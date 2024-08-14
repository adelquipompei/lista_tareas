import './App.css'
import FormularioTareas from './components/FormularioTareas'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import ListaTareas from './components/ListaTareas';
import '../node_modules/animate.css/animate.css'

function App() {
  const tareasGuardadas = localStorage.getItem('tareas') ? JSON.parse(localStorage.getItem('tareas')) : []; 
  const [tareas, nuevaTarea] = useState(tareasGuardadas);
  const [showTaskComplete , setShowTaskComplete ] = useState(false);

  useEffect(()=> {
    localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas])



  return (
    <div className='contenedor'>

      <Header />
      <FormularioTareas tareas={tareas} nuevaTarea={nuevaTarea} />
      <ListaTareas tareas={tareas} nuevaTarea={nuevaTarea} showTaskComplete={showTaskComplete} />



    </div>
  )
}

export default App
