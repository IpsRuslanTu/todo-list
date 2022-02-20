import React from 'react'
import {
  countAllTodos, countCompletedTodos,
  countUncompletedTodos
} from '../../functions/headerFunctions'
import { ITodo } from '../../interfaces/interfaces'
import './Header.css'

interface IHeader {
  todoList: ITodo[]
}

const Header = ({todoList}: IHeader) => {
  return (
    <div className='header'>
      <div>Всего задач: {countAllTodos(todoList)}</div>
      <div>Выполнено: {countCompletedTodos(todoList)}</div>
      <div>Не выполнено: {countUncompletedTodos(todoList)}</div>
    </div>
  )
}

export default Header