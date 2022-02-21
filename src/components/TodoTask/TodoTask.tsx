import React from 'react'
import { ITodo } from '../../interfaces/interfaces'
import './TodoTask.css'

interface ITodoTask {
  todo: ITodo,
  deleteTask(idForDelete: string): void,
  changeTaskStatus(id: string): void,
  visible: boolean
}

const TodoTask = ({ todo, deleteTask, changeTaskStatus, visible }: ITodoTask) => {
  const isCompleted = (todo.todoStatus) ? 'completed' : ''
  const isVisible = (!visible) ? 'unvisible' : ''

  return (
    <div className={`todoTask ${isCompleted} ${isVisible}`}>
      <span
        className='todoTask__title'
        onClick={() => changeTaskStatus(todo.todoId)}
      >
        {todo.todoName}
      </span>
      <button
        className='todoTask__button'
        onClick={() => deleteTask(todo.todoId)}
      >
        &#10060;
      </button>
    </div>
  )
}

export default TodoTask