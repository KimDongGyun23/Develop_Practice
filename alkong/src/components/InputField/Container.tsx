import type { ChildrenProps } from '@/types/common'

export const Container = ({ children }: ChildrenProps) => {
  return <div className="flexColumn gap-2">{children}</div>
}

export const ContainerSpaceBetween = ({ children }: ChildrenProps) => {
  return <div className="flexBetweenAlign">{children}</div>
}
