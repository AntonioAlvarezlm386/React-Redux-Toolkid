//haceralgoa, seleccionar algo
import { useDispatch, useSelector } from "react-redux"
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'


function App() {



  return (
    <>
    <div>
      <h1>Hello world</h1>
      <TaskList/>
      <TaskForm/>
    </div>
    </>
  )
}

export default App
