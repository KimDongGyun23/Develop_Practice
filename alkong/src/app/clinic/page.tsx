import { Profile } from '@/components'

const page = () => {
  const name = '김동균'
  return (
    <section>
      <Profile name={name} />
    </section>
  )
}

export default page
