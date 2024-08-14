'use client'

import ScrollPicker from '@/components/ScrollPicker'

export default function Home() {
  return (
    <div>
      <ScrollPicker
        list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        handleSelectedChange={(i) => console.log(i)}
      />
    </div>
  )
}
