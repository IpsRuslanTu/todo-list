import { ITodo } from "../interfaces/interfaces";

export const countAllTodos = (arr: ITodo[]): number => arr.length

export const countCompletedTodos = (arr: ITodo[]): number => {
  let numComletedTodos = 0;
  arr.map(item => {
    if (item.todoStatus === true) ++numComletedTodos
    return item
  })
  return numComletedTodos
}

export const countUncompletedTodos = (arr: ITodo[]): number => {
  let numUncomletedTodos = 0;
  arr.map(item => {
    if (item.todoStatus === false) ++numUncomletedTodos
    return item
  })
  return numUncomletedTodos
}

export const visibilityTodos = (printTodos: string, status: boolean): boolean => {
  switch (printTodos) {
    case 'completed':
      if (status) {
        return true
      } else return false
    case 'uncompleted':
      if (status) {
        return false
      } else return true
    default: return true
  }
}