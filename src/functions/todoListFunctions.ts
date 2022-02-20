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