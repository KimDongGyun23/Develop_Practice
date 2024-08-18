'use client'

import { useEffect } from 'react'

import { useToggleActions, useToggleState } from '@/store/toggle'

interface IToggle {
  initial?: boolean
  onClick: () => void
}

const Toggle = ({ initial = false, onClick }: IToggle) => {
  const isActive = useToggleState()
  const { setInitialState, changeIsActive } = useToggleActions()
  const handleToggleClick = () => {
    onClick()
    changeIsActive()
  }

  useEffect(() => {
    setInitialState(initial)
  }, [initial, setInitialState])

  const containerStyle = isActive ? 'bg-mint-6' : 'bg-gray-2'
  const innerStyle = isActive ? 'translate-x-8 bg-white' : 'translate-x-0 bg-mint-6'

  return (
    <div className="inline-block">
      <input
        type="checkbox"
        id="toggle"
        name="toggle"
        onChange={handleToggleClick}
        className="hidden"
      />
      <label
        htmlFor="toggle"
        className={`flex-align h-[34px] w-[66px] shrink-0 rounded-full p-[5px] transition-all focus-visible:outline-none ${containerStyle}`}
      >
        <div className={`size-6 rounded-full transition-all ${innerStyle}`}>{''}</div>
      </label>
    </div>
  )
}

export default Toggle
