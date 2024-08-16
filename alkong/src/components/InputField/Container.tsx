import type { ChildrenProps } from '@/types/common'

export const Container = ({ children }: ChildrenProps) => {
  return <div className="flex-column gap-2">{children}</div>
}
