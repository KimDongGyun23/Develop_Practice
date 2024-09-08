import { toast } from 'react-toastify'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import LogoPath from '@/assets/colorful.svg'
import Button from '@/components/button/Button'
import Divider from '@/components/divider/Divider'
import { auth } from '@/firebase/firebase'

import styles from '../login/Auth.module.scss'

import RegisterClient from './RegisterClient'

const Register = () => {
  const handleRegisterAction = async (formData: FormData) => {
    'use server'

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cPassword = formData.get('cPassword') as string

    if (password !== cPassword) {
      return toast.error(`비밀번호가 일치하지 않습니다.`)
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('user', user)

        toast.success('등록 성공...')
        redirect('/login')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image priority src={LogoPath} alt="logo" />
        </h1>

        <form action={handleRegisterAction} className={styles.form}>
          <RegisterClient />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="아이디(이메일)"
            className={styles.control}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호"
            className={styles.control}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호 확인"
            className={styles.control}
          />

          <div className={styles.buttonGroup}>
            <Button type="submit" width="100%">
              회원가입
            </Button>

            <Divider />

            <Button width="100%" secondary>
              <Link href={'/login'}>로그인</Link>
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Register
