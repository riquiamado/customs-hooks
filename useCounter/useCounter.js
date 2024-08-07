import { useState } from 'react'

export const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue)

  const increment = () => {
    setCounter(counter + 1)
  }
  const decrement = () => {
    setCounter(counter - 1)
  }
  const resetCounter = () => {
    setCounter(initialValue)
  }

  return {
    counter,
    increment,
    decrement,
    resetCounter,
  }
}
