import { useState } from 'react'

const useForm = (initialValue = {}) => {
  const [formState, setFormSate] = useState(initialValue)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormSate({
      ...formState,
      [name]: value,
    })
  }
  const onResetForm = () => {
    setFormSate(initialValue)
  }
  return {
    formState,
    ...formState,
    onInputChange,
    onResetForm,
  }
}

export default useForm
