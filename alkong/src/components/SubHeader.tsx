'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import type { ChildrenProps } from '@/types/common'

import arrowImg from '/public/image/arrow-left__gray.svg'
import closeImg from '/public/image/close__gray.svg'

interface IEdit {
  isSubmit?: boolean
  handleCancle: () => void
  handleComplete?: () => void
  children: React.ReactNode
}

interface IClose {
  handleClose: () => void
  children: React.ReactNode
}

export const SubHeaderEdit = ({
  isSubmit = false,
  handleCancle,
  handleComplete,
  children,
}: IEdit) => {
  return (
    <div className="flex-between-align px-1">
      <button type="button" className="body-B text-gray-6" onClick={handleCancle}>
        취소
      </button>
      <span className="subtitle-B text-center">{children}</span>
      <button
        type={isSubmit ? 'submit' : 'button'}
        className="body-B text-mint-9"
        onClick={isSubmit ? undefined : handleComplete}
      >
        완료
      </button>
    </div>
  )
}

export const SubHeaderBack = ({ children }: ChildrenProps) => {
  const router = useRouter()
  const handleClickBackButton = () => router.back()
  return (
    <div className="flex-between-align">
      <button type="button" onClick={handleClickBackButton}>
        <Image src={arrowImg} width={36} height={36} alt="back-button" />
      </button>
      <span className="subtitle-B text-center">{children}</span>
      <div className="size-9" />
    </div>
  )
}

export const SubHeaderClose = ({ handleClose, children }: IClose) => {
  return (
    <div className="flex-between-align">
      <div className="size-7" />
      <span className="subtitle-B text-center">{children}</span>
      <button type="button" onClick={handleClose}>
        <Image src={closeImg} width={28} height={28} alt="close-button" />
      </button>
    </div>
  )
}
