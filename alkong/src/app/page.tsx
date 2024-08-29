'use client'
import SubHeader from '@/components/subHeader/SubHeader'

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <SubHeader.Back>추가</SubHeader.Back>
      <SubHeader.Close onClick={() => {}}>닫기</SubHeader.Close>
      <SubHeader.Complete onClickCancle={() => {}} onClickComplete={() => {}}>
        완료
      </SubHeader.Complete>
    </div>
  )
}
