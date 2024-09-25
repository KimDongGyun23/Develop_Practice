import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

import { auth } from './firebase'

export const handleLoginAction = async (formData: FormData) => {
  'use server'
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      toast.success('로그인에 성공했습니다.')
      redirect('/')
    })
    .catch((error) => {
      toast.error(error.message)
    })
}

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then(() => {
      toast.success('로그인에 성공했습니다.')
      redirect('/')
    })
    .catch((error) => {
      toast.error(error.message)
    })
}

export const handleRegisterAction = async (formData: FormData) => {
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

export const handleResetAction = async (formData: FormData) => {
  'use server'
  const email = formData.get('email') as string

  sendPasswordResetEmail(auth, email)
    .then(() => {
      toast.success('비밀번호 업데이트를 위해서 이메일을 체크해주세요.')
    })
    .catch((error) => {
      toast.error(error.message)
    })
}
