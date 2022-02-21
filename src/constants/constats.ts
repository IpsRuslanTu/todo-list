export enum optionCase {
  SHOW_ALL = "all",
  SHOW_COMLETED = "completed",
  SHOW_UNCOMLETED = "uncompleted",
}

export const selectOptions = [
  {value: optionCase.SHOW_ALL, text: "Показать все"},
  {value: optionCase.SHOW_COMLETED, text: "Выполненные"},
  {value: optionCase.SHOW_UNCOMLETED, text: "Невыполненные"},
]