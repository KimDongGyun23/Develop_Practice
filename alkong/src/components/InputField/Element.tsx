import React from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'

import type { ChildrenProps } from '@/types/common'

import { Label as Tag } from '../Label'

import arrowImg from '/public/image/arrow-right__green.svg'

interface ILabelWithIcon {
  src: string
  children: React.ReactNode
}
interface ISelectedTextWithArrow {
  isFull?: boolean
  children: React.ReactNode
  handleClick: () => void
}

export const Label = ({ children }: ChildrenProps) => {
  return <div className="subtitle-B">{children}</div>
}

export const LabelWithIcon = ({ src, children }: ILabelWithIcon) => {
  return (
    <div className="flexAlign gap-2">
      <Image src={src} width={28} height={28} alt="label-icon" />
      <p className="subtitle-B">{children}</p>
    </div>
  )
}

export const SelectedTextWithArrow = ({
  isFull = false,
  children,
  handleClick,
}: ISelectedTextWithArrow) => {
  const flexStyle = isFull ? 'flexBetweenAlign' : 'flexAlign gap-1'

  return (
    <div className={`${flexStyle}`}>
      <p className="body-M text-[#959595]">{children}</p>
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

export const TagList = ({ list }: { list: string[] }) => {
  return (
    <div className="flexAlign gap-2">
      {list.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <Tag.Plus handleClick={() => {}}>추가</Tag.Plus>
    </div>
  )
}

export const ErrorMessage = ({ section }: { section: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  return (
    <p className="caption-M h-[18px] text-red">
      {errors && errors[section] && errors[section].message?.toString()}
    </p>
  )
}
