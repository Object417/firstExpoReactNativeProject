import { useState } from "react"

function useCounter(defaultValue) {
  const [counter, setCounter] = useState(defaultValue)

  function handleIncrement() {
    setCounter(counter + 1)
  }
  function handleDecrement() {
    setCounter(counter - 1)
  }

  return [counter, setCounter, handleIncrement, handleDecrement]
}

export default useCounter
