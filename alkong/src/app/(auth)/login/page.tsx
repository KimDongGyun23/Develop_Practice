import Image from 'next/image'
import Link from 'next/link'

import LoginForm from './_components/LoginForm'

import logo from '/public/image/logo-brand.svg'

const page = () => {
  return (
    <div className="flex-columnAlign h-full justify-center bg-mint-4 px-5">
      <Image src={logo} width={160} height={168} alt="logo" className="mb-8" />
      <LoginForm />
      <Link href={'/signup'} className="headline-M text-white">
        처음이신가요? 회원가입하기
      </Link>
    </div>
  )
}

export default page
