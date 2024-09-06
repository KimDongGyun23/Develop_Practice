'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import AutoSignInCheckbox from '@/components/autoSignInCheckbox/AutoSignInCheckbox'
import Button from '@/components/button/Button'
import Divider from '@/components/divider/Divider'
import Input from '@/components/Input/Input'
import Loader from '@/components/loader/Loader'
import { auth } from '@/firebase/firebase'

import styles from './Auth.module.scss'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAutoLogin, setIsAutoLogin] = useState(false)

  const router = useRouter()

  const redirectUser = () => {
    router.push('/')
  }

  const loginUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.info('성공!')
    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false)
        toast.success('로그인에 성공했습니다.')
        redirectUser()
      })
      .catch((error) => {
        setIsLoading(false)
        toast.error(error.message)
      })
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('로그인에 성공했습니다.')
        redirectUser()
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={loginUser} className={styles.form}>
        {/* Input */}
        <Input
          email
          icon="letter"
          id="email"
          name="email"
          label="이메일"
          placeholder="아이디(이메일)"
          className={styles.control}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          password
          icon="lock"
          id="password"
          name="password"
          label="비밀번호"
          placeholder="비밀번호"
          className={styles.control}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.group}>
          {/* 자동 로그인, 비밀번호 수정 */}
          <AutoSignInCheckbox
            checked={isAutoLogin}
            onChange={(e) => setIsAutoLogin(e.target.checked)}
          />

          <Link href={'/reset'} className={styles.findLink}>
            비밀번호 수정하기
            <svg
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.findLinkArrow}
            >
              <path d="M1.5 1L9.5 9L1.5 17" stroke="#0074E9" strokeWidth="2" />
            </svg>
          </Link>
        </div>

        <div className={styles.buttonGroup}>
          {/* Button */}
          <Button type="submit" width="100%">
            로그인
          </Button>

          <Divider />

          <Button width="100%" secondary>
            <Link href={'/register'}>회원가입</Link>
          </Button>

          <Divider />

          <div>
            {/* Button */}

            <Button onClick={signInWithGoogle}>구글 로그인</Button>
          </div>
        </div>
      </form>
    </>
  )
}

export default LoginForm
