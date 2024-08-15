import { useEffect, useRef, useState } from 'react'

import type { IScrollPicker } from '@/types/common'

const useSlider = ({ list, handleSelectedChange }: IScrollPicker) => {
  const ITEM_HEIGHT = 26
  const [selected, setSelected] = useState(0)
  const containerRef = useRef<HTMLUListElement>(null)
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const isDraggingRef = useRef(false)
  const startY = useRef(0)
  const scrollStartPosition = useRef(0)

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

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    startY.current = e.clientY
    scrollStartPosition.current = containerRef.current!.scrollTop
    e.preventDefault()
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      const deltaY = e.clientY - startY.current
      containerRef.current!.scrollTop = scrollStartPosition.current - deltaY
      handleScroll()
    }
  }

  const handleMouseUp = () => {
    isDraggingRef.current = false
  }

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return {
    containerRef,
    itemRefs,
    selected,
    handleScroll,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  }
}

export default useSlider
