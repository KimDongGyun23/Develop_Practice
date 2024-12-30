"use client";

import Image from "next/image";
import LogoPath from "@/assets/colorful.svg";
import { useRouter } from "next/navigation";

import styles from "./Auth.module.scss";
import { Loader } from "@/components/loader/Loader";

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
      <Loader />
      <section className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <Image src={LogoPath} alt="logo" />
          </h1>

          <form onSubmit={loginUser} className={styles.form}>
            <div className={styles.group}></div>
            <div className={styles.buttonGroup}></div>
          </form>
        </div>
      </section>
    </>
  );
};
