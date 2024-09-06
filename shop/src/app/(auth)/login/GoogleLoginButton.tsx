'use client'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import Button from '@/components/button/Button'
import { auth } from '@/firebase/firebase'

const GoogleLoginButton = () => {
  const router = useRouter()

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success('로그인에 성공했습니다.')
        router.push('/')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return (
    <div>
      <Button onClick={signInWithGoogle} width="100%">
        구글 로그인
      </Button>
    </div>
  )
}

export default GoogleLoginButton
