import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className=" bg-orange-200 inline-block p-4 rounded-md cursor-pointer">
        <Link href={"/auth/login"}>로그인페이지</Link>
      </div>
    </>
  );
}
