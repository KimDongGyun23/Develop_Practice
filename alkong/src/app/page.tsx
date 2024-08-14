'use client'

import Picker from '@/components/Test'

export default function Home() {
  return (
    <div>
      <Picker
        list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
        onSelectedChange={(i) => console.log(i)}
      />
    </div>
  )
}
