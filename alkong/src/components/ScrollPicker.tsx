import { useRef, useState } from 'react'

interface IScrollPicker {
  list: (string | number)[]
  handleSelectedChange: (selected: string | number) => void
}

const ScrollPicker = ({ list, handleSelectedChange }: IScrollPicker) => {
  const ITEM_HEIGHT = 50

  const [selected, setSelected] = useState(0)
  const containerRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = () => {
    if (!containerRef.current) return

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = setTimeout(() => {
      const scrollPosition = containerRef.current!.scrollTop
      const index = Math.floor((scrollPosition + ITEM_HEIGHT / 2) / ITEM_HEIGHT)

      if (index !== selected) {
        setSelected(index)
        handleSelectedChange(list[index])
      }

      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }, 100)
  }

  return (
    <ul
      ref={containerRef}
      onScroll={handleScroll}
      className="headline-M m-0 h-[250px] w-full list-none overflow-hidden overflow-y-scroll py-[100px] scrollbar-hide"
    >
      {list.map((item, index) => (
        <li
          key={index}
          className={`flex h-[50px] items-center justify-center ${index === selected ? 'text-black' : 'text-[#949698]'}`}
          ref={(el) => {
            itemRefs.current[index] = el
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ScrollPicker
