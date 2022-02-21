import React, { useState } from 'react'
import './App.css'
import { ITodo } from './interfaces/interfaces'
import { v4 as uuidv1 } from 'uuid'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import TodoList from './components/TodoList/TodoList'
import { optionCase } from './constants/constats'

const App = () => {

  const [task, setTask] = useState<string>("")
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [printTypeTodos, setPrintTypesTodos] = useState<string>(optionCase.SHOW_ALL)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value)
  }

  const addTask = (): void => {
    const newTaskName = task.trim();
    if (newTaskName !== "") {
      const newTask = { todoId: uuidv1(), todoName: newTaskName, todoStatus: false }
      setTodoList([...todoList, newTask])
    }
    setTask("")
  }

  const deleteTask = (idForDelete: string): void => {
    setTodoList(todoList.filter(elem => {
      return idForDelete !== elem.todoId
    }))
  }

  const changeTaskStatus = (id: string) => {
    let copyArr = [...todoList]
    copyArr.map((item) => {
      if (item.todoId === id) {
        item.todoStatus = !item.todoStatus
      }
      return item
    })
    setTodoList(copyArr)
  }

  const getSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPrintTypesTodos(e.target.value)
  }

  return (
    <div className='app'>
      <Header
        todoList={todoList}
      />
      <Menu
        task={task}
        handleChange={handleChange}
        addTask={addTask}
        getSelectValue={getSelectValue}
      />
      <TodoList
        todoList={todoList}
        printTypeTodos={printTypeTodos}
        deleteTask={deleteTask}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  )
}

export default App