import Image from 'next/image'

import LogoPath from '@/assets/colorful.svg'

import styles from './Auth.module.scss'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Image priority src={LogoPath} alt="logo" />
        </h1>

        <LoginForm />
      </div>
    </section>
  )
}

export default Login
