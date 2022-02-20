import React from 'react'
import { visibilityTodos } from '../../functions/todoListFunctions'
import { ITodo } from '../../interfaces/interfaces'
import TodoTask from '../TodoTask/TodoTask'
import './TodoList.css'

interface ITodoList {
  todoList: ITodo[],
  printTypeTodos: string,
  deleteTask(idForDelete: string): void,
  changeTaskStatus(id: string): void
}

const TodoList = ({ todoList, printTypeTodos, deleteTask, changeTaskStatus }: ITodoList) => {
  return (
    <div className='todos'>
      {
        todoList.map(todo =>
          <TodoTask
            key={todo.todoId}
            todo={todo}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
            visible={visibilityTodos(printTypeTodos, todo.todoStatus)}
          />
        )
      }
    </div>
  )
}

export default TodoList