import { useRef, useState } from 'react'

interface ScrollPickerProps {
  list: (string | number)[]
  onSelectedChange: (selected: string | number) => void
}

const Picker = ({ list, onSelectedChange }: ScrollPickerProps) => {
  const SCROLL_DEBOUNCE_TIME = 100
  const ITEM_HEIGHT = 50

  const ref = useRef<HTMLUListElement>(null)
  const [selected, setSelected] = useState(1)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const handleScroll = () => {
    if (ref.current) {
      clearTimeout(timerRef.current!)

      timerRef.current = setTimeout(() => {
        const index = Math.floor((ref.current!.scrollTop + ITEM_HEIGHT / 2) / ITEM_HEIGHT)
        if (list[index] !== '') {
          if (index !== selected) {
            setSelected(index)
          }
          itemRefs.current[index]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
          if (index !== selected) {
            onSelectedChange(list[index])
          }
        }
      }, SCROLL_DEBOUNCE_TIME)
    }
  }

  return (
    <ul
      ref={ref}
      onScroll={handleScroll}
      className="m-0 h-[250px] w-full list-none overflow-hidden overflow-y-scroll py-[100px] "
    >
      {list.map((item, index) => {
        console.log(index, selected)
        return (
          <li
            key={index}
            className={`flex h-[50px] items-center justify-center ${
              index === selected ? 'font-bold opacity-100' : 'opacity-40'
            }`}
            ref={(el) => (itemRefs.current[index] = el)}
          >
            {item}
          </li>
        )
      })}
    </ul>
  )
}

export default Picker
