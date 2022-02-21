import { ITodo } from "../interfaces/interfaces";

export const countAllTodos = (arr: ITodo[]): number => arr.length

export const countCompletedTodos = (arr: ITodo[]): number => {
  let numComletedTodos = 0;
  arr.forEach(item => {
    if (item.todoStatus === true) ++numComletedTodos
  })
  return numComletedTodos
}

export const countUncompletedTodos = (arr: ITodo[]): number => {
  let numUncomletedTodos = 0;
  arr.forEach(item => {
    if (item.todoStatus === false) ++numUncomletedTodos
  })
  return numUncomletedTodos
}

export const visibilityTodos = (printTodos: string, status: boolean): boolean => {
  switch (printTodos) {
    case 'completed':
      return status
    case 'uncompleted':
      return !status
    default: return true
  }
}