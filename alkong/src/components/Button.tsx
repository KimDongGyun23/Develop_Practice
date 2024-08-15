import type { ReactNode } from 'react'

interface IButton {
  primary?: boolean
  secondary?: boolean
  shadow?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  handleClick: () => void
  children: ReactNode
}

const Button = ({
  primary = false,
  secondary = false,
  shadow = false,
  type = 'button',
  handleClick,
  children,
}: IButton) => {
  const primaryStyle = 'bg-mint-6 text-white'
  const secondaryStyle = `bg-white text-mint-6 border border-mint-4`
  const defaultStyle = 'bg-gray-5 text-white'

  return (
    <button
      type={type}
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
