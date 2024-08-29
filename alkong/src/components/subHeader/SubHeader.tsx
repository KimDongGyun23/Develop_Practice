'use client'
import type { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

import { Icon } from '..'

type EditProps = {
  isSubmit?: boolean
  onClickCancle: () => void
  onClickComplete?: () => void
}

type CloseProps = {
  onClick: () => void
}

export const Complete = ({
  isSubmit = false,
  onClickCancle,
  onClickComplete,
  children,
}: PropsWithChildren<EditProps>) => {
  return (
    <header className="flex-between-align w-full px-6">
      <button type="button" className="body-B text-gray-6" onClick={onClickCancle}>
        취소
      </button>
      <h2 className="subtitle-B text-center">{children}</h2>
      <button
        type={isSubmit ? 'submit' : 'button'}
        className="body-B text-mint-9"
        onClick={isSubmit ? undefined : onClickComplete}
      >
        완료
      </button>
    </header>
  )
}

export const Back = ({ children }: PropsWithChildren) => {
  const router = useRouter()
  const handleClickBackButton = () => router.back()
  return (
    <header className="flex-between-align w-full px-4">
      <button type="button" onClick={handleClickBackButton}></button>
      <Icon name="arrow-left" size={36} />
      <h2 className="subtitle-B text-center">{children}</h2>
      <div className="size-9" />
    </header>
  )
}

export const Close = ({ onClick, children }: PropsWithChildren<CloseProps>) => {
  return (
    <header className="flex-between-align w-full px-5">
      <div className="size-7" />
      <h2 className="subtitle-B text-center">{children}</h2>
      <button onClick={onClick}>
        <Icon name="close" size={28} />
      </button>
    </header>
  )
}

const SubHeader: { Complete: typeof Complete; Back: typeof Back; Close: typeof Close } = {
  Complete,
  Back,
  Close,
}

export default SubHeader
