'use client'
import React, { useState } from 'react'

import Input from '@/components/Input/Input'

import styles from '../login/Auth.module.scss'

const RegisterClient = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cPassword, setCPassword] = useState('')

  return (
    <>
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

      <Input
        password
        icon="lock"
        id="password"
        name="password"
        label="비밀번호 확인"
        placeholder="비밀번호 확인"
        className={styles.control}
        value={cPassword}
        onChange={(e) => setCPassword(e.target.value)}
      />
    </>
  )
}

export default RegisterClient
