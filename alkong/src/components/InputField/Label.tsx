import type { ChildrenProps } from '@/types/common'

export const Label = ({ children }: ChildrenProps) => {
  return <label className="subtitle-B">{children}</label>
}

export const LabelWithIcon = ({ children }: ChildrenProps) => {
  return <label className="subtitle-B flexAlign gap-2">{children}</label>
}
