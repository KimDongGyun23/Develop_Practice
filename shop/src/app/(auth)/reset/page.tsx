import Link from 'next/link'

import Button from '@/components/button/Button'
import Heading from '@/components/heading/Heading'
import { handleResetAction } from '@/firebase/auth'

import styles from './Reset.module.scss'

const Reset = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.form}>
          <Heading title="비밀번호 업데이트" subtitle="이메일 주소를 입력해주세요." />

          <form action={handleResetAction}>
            <div className={styles.inputField}>
              <label htmlFor="reset" className={styles.label}>
                reset
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="reset"
                  type="text"
                  placeholder="Email"
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <div>
              <Button type="submit">업데이트</Button>
            </div>

            <div className={styles.links}>
              <p>
                <Link href="/login">-로그인</Link>
              </p>
              <p>
                <Link href="/register">-회원가입</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reset
