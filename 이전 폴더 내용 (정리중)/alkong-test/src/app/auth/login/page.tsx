"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await signIn("credentials", {
        id,
        password,
        redirect: false,
      });
      console.log(result);
      console.log("성공");
      router.push("/home");
    } catch (err) {
      console.error("아이디와 비밀번호가 일치하지 않습니다.", err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flexColumnAlign  gap-5">
      <div className="bg-gray-300 w-full h-24" />
      <input
        className="block px-3 py-1"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
        placeholder="아이디"
      />
      <input
        className="block px-3 py-1"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="비밀번호"
      />
      <button type="submit" className="bg-gray-300 w-full">
        로그인
      </button>
      <div className="flex gap-3">
        <p>처음이신가요?</p>
        <Link href={"/auth/signup"}>
          <p>회원 가입</p>
        </Link>
      </div>
    </form>
  );
};

export default Login;
