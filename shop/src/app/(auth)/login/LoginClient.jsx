"use client";

import Image from "next/image";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";
import { Loader } from "@/components/loader/Loader";
import { Icon } from "@/components/icon/Icon";
import { AutoSignInCheckbox } from "@/components/autoSignInCheckbox/AutoSignInCheckbox";
import { useState } from "react";
import Link from "next/link";

export const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthLogin, setIsAuthLogin] = useState(false);

  const router = useRouter();

  const redirecUser = () => router.push("/");

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const signInWithGoogle = () => {};

  return (
    <>
      {isLoading && <Loader />}
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>

          <form onSubmit={loginUser} className={styles.form}>
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
              <Link href={"/reset"} className={styles.findLink}>
                비밀번호 수정하기
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.findLinkArrow}
                >
                  <path
                    d="M1.5 1L9.5 9L1.5 17"
                    stroke="#0074E9"
                    strokeWidth="2"
                  />
                </svg>
              </Link>
            </div>
            <div className={styles.buttonGroup}></div>
          </form>
        </div>
      </section>
    </>
  );
};
