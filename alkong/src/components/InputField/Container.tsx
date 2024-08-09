import type { ChildrenProps } from '@/types/common'

export const Container = ({ children }: ChildrenProps) => {
  return <div className="flexColumn gap-2">{children}</div>
}
