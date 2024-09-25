import Image from 'next/image'
import Link from 'next/link'

import LogoPath from '@/assets/colorful.svg'
import Button from '@/components/button/Button'
import Divider from '@/components/divider/Divider'
import Icon from '@/components/icon/Icon'
import { handleRegisterAction } from '@/firebase/auth'

import styles from '../login/Auth.module.scss'

const Register = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image priority src={LogoPath} alt="logo" />
        </h1>

        <form action={handleRegisterAction} className={styles.form}>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>
              이메일
            </label>
            <div className={styles.inputWrapper}>
              <Icon type="letter" />
              <input
                type="email"
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

          <div className={styles.inputField}>
            <label htmlFor="cPassword" className={styles.label}>
              비밀번호
            </label>
            <div className={styles.inputWrapper}>
              <Icon type="lock" />
              <input
                type="password"
                id="cPassword"
                name="cPassword"
                placeholder="비밀번호 확인"
                className={styles.input}
              />
            </div>
          </div>

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
