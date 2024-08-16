import React from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'

import arrowImg from '/public/image/arrow-right__gray.svg'

interface ISelectedTextWithArrow {
  isFull?: boolean
  children: React.ReactNode
  handleClick: () => void
}

export const SelectedTextWithArrow = ({
  isFull = false,
  children,
  handleClick,
}: ISelectedTextWithArrow) => {
  const flexStyle = isFull ? 'flex-between-align' : 'flex-align gap-1'

  return (
    <div className={`${flexStyle}`}>
      <p className="headline-M text-[#959595]">{children}</p>
      <Image
        src={arrowImg}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={handleClick}
        alt="arrow"
      />
    </div>
  )
}

export const ErrorMessage = ({ section }: { section: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <>
      {errors && errors[section] && (
        <p className="caption-M h-[18px] text-red">{errors[section].message?.toString()}</p>
      )}
    </>
  )
}
