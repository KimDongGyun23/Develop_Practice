export interface ChildrenProps {
  children: React.ReactNode
}

export interface IScrollPicker {
  list: (string | number)[]
  handleSelectedChange: (selected: string | number) => void
}
