import type { ReactNode } from 'react'

interface IButton {
  primary?: boolean
  secondary?: boolean
  shadow?: boolean
  handleClick: () => void
  children: ReactNode
}

const Button = ({
  primary = false,
  secondary = false,
  shadow = false,
  handleClick,
  children,
}: IButton) => {
  const primaryStyle = 'bg-mint-6 text-white'
  const secondaryStyle = `bg-white text-mint-6 border border-mint-4`
  const defaultStyle = 'bg-gray-5 text-white'

  return (
    <button
      onClick={handleClick}
      className={`subtitle-B h-14 rounded-xl
        ${shadow && 'shadow-lightShadow'}
        ${primary && primaryStyle}
        ${secondary && secondaryStyle}
        ${!primary && !secondary && defaultStyle}
      `}
    >
      {children}
    </button>
  )
}

export default Button
