'use client'

import { useEffect } from 'react'

import { useToggleActions, useToggleState } from '@/store/toggle'

interface IToggle {
  initial?: boolean
  handleClick: () => void
}

const Toggle = ({ initial = false, handleClick }: IToggle) => {
  const isActive = useToggleState()
  const { setInitialState, changeIsActive } = useToggleActions()

  const containerStyle = isActive ? 'bg-mint-6' : 'bg-gray-2'
  const innerStyle = isActive ? 'translate-x-8 bg-white' : 'translate-x-0 bg-mint-6'

  const handleClickToggle = () => {
    handleClick()
    changeIsActive()
  }

  useEffect(() => {
    setInitialState(initial)
  }, [initial, setInitialState])

  return (
    <button
      className={`flex-align h-[34px] w-[66px] shrink-0 rounded-full p-[5px] transition-all ${containerStyle}`}
      onClick={handleClickToggle}
    >
      <div className={`size-6 rounded-full transition-all ${innerStyle}`} />
    </button>
  )
}

export default Toggle
