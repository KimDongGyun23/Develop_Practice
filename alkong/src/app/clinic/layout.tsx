import type { PropsWithChildren } from 'react'

import { Profile } from '@/components'

export const ClinicLayout = ({ children }: PropsWithChildren) => {
  const name = '김동균'

  return (
    <main className="min-h-full px-5 scrollbar-hide">
      <div className="absolute right-5 top-[22px]">
        <Profile name={name} size="sm" bgColor="#C5FDEC" />
      </div>
      {children}
    </main>
  )
}

export default ClinicLayout
