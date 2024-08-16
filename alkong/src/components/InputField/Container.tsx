import type { ChildrenProps } from '@/types/common'

export const Container = ({ children }: ChildrenProps) => {
  return <div className="flex-column gap-2">{children}</div>
}

export const ContainerBetween = ({ children }: ChildrenProps) => {
  return <div className="flex-between-align">{children}</div>
}
