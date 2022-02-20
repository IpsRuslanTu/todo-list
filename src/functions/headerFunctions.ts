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