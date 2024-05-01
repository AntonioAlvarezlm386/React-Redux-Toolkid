import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/task/taskSlice'

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks)

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  
  return (
    <div>
      { tasks.map((task, index) => (
          <div key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={()=> handleDelete(task.id)}>delete</button>
          </div>
        ) )
      }
    </div>
  )
}

export default TaskList