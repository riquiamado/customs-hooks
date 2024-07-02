import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[Todo] Add Todo',
      payload: todo,
    }
    dispatch(action)
  }

  const handleRemoveTodo = (id) => {
    dispatch({
      type: '[Todo] Remove Todo',
      payload: id,
    })
  }

  const handleToogleTodo = (id) => {
    dispatch({
      type: '[Todo] Toogle Todo',
      payload: id,
    })
  }

  return {
    todos,
    todosCount: todos.length,
    handleNewTodo,
    handleRemoveTodo,
    handleToogleTodo,
    todoPending: todos.filter((todo) => !todo.done).length,
  }
}
