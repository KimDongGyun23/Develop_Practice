import { toast } from 'react-toastify'
import { redirect } from 'next/navigation'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { auth } from '../firebase'

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
