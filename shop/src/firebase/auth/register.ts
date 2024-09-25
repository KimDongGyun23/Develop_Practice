import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../firebase'

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
