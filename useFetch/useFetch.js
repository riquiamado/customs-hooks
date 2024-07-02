import { useEffect, useState } from 'react'

const localCache = {}

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  })
  useEffect(() => {
    getFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }

  const getFetch = async () => {
    if (localCache[url]) {
      console.log('usando cache')
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return
    }

    setLoadingState()
    const res = await fetch(url)

    await new Promise((resolve) => setTimeout(resolve, 1500))
    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText,
        },
      })
      return
    }
    const data = await res.json()
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    })
    localCache[url] = data
  }
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
