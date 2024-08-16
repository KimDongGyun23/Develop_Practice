'use client'

import { useToggle } from '@/hooks/useToggle'

interface IToggle {
  initial?: boolean
  handleClick: () => void
}

const Toggle = ({ initial, handleClick }: IToggle) => {
  const [isActive, changeIsActive] = useToggle(initial)
  const containerStyle = isActive ? 'bg-mint-6' : 'bg-gray-2'
  const innerStyle = isActive ? 'translate-x-8 bg-white' : 'translate-x-0 bg-mint-6'

  const handleClickToggle = () => {
    handleClick()
    changeIsActive()
  }

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
