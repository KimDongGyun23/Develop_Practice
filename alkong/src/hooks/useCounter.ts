import { useState } from 'react'

export const useCounter = (initial: number) => {
  const [count, setCount] = useState<number>(initial)

  const handleDecrease = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1))
  }

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return { count, handleDecrease, handleIncrease }
}
