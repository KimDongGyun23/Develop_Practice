import useSlider from '@/hooks/useSlider'
import type { IScrollPicker } from '@/types/common'

const ScrollPicker = ({ list, handleSelectedChange }: IScrollPicker) => {
  const {
    containerRef,
    itemRefs,
    selected,
    handleScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  } = useSlider({ list, handleSelectedChange })

  return (
    <ul
      ref={containerRef}
      role="presentation"
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="headline-M m-0 h-[130px] select-none list-none overflow-hidden overflow-y-scroll py-[52px] scrollbar-hide"
    >
      {list.map((item, index) => (
        <li
          key={index}
          className={`flex items-center justify-center ${index === selected ? 'text-black' : 'text-[#949698]'}`}
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
