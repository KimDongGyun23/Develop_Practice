import { Profile } from '@/components'
import { ClinicClientPage } from '@/feature/clinic'

const page = () => {
  const name = '김동균'

  return (
    <main className="min-h-full px-5 scrollbar-hide">
      <div className="absolute right-5 top-[22px]">
        <Profile name={name} size="sm" bgColor="#C5FDEC" />
      </div>
      <ClinicClientPage />
    </main>
  )
}

export default page
