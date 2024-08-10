import Image from 'next/image'

import type { ChildrenProps } from '@/types/common'

interface ILabelWithIcon {
  src: string
  children: React.ReactNode
}

export const Label = ({ children }: ChildrenProps) => {
  return <label className="subtitle-B">{children}</label>
}

export const LabelWithIcon = ({ src, children }: ILabelWithIcon) => {
  return (
    <label className="flexAlign gap-2">
      <Image src={src} width={28} height={28} alt="label-icon" />
      <p className="subtitle-B">{children}</p>
    </label>
  )
}
