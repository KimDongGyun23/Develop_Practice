import Image from 'next/image'
import Link from 'next/link'

import LogoPath from '@/assets/colorful.svg'
import AutoSignInCheckbox from '@/components/autoSignInCheckbox/AutoSignInCheckbox'
import Button from '@/components/button/Button'
import Divider from '@/components/divider/Divider'
import Icon from '@/components/icon/Icon'
import { handleLoginAction, signInWithGoogle } from '@/firebase/auth/login'

import styles from './Auth.module.scss'

const Login = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image priority src={LogoPath} alt="logo" />
        </h1>

        <form action={handleLoginAction} className={styles.form}>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <div className={styles.inputWrapper}>
              <Icon type="letter" />
              <input
                id="email"
                name="email"
                placeholder="아이디(이메일)"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <div className={styles.inputWrapper}>
              <Icon type="lock" />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.group}>
            <AutoSignInCheckbox />

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
            <Button type="submit" width="100%">
              로그인
            </Button>

            <Divider />

            <Button width="100%" secondary>
              <Link href={'/register'}>회원가입</Link>
            </Button>

            <Divider />

            <div>
              <Button onClick={signInWithGoogle} width="100%">
                구글 로그인
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
