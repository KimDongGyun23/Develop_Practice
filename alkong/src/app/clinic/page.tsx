import React from 'react'

import MainHeader from '@/components/MainHeader'

import AddClinicForm from './_components/AddClinicForm'

const page = () => {
  return (
    <div>
      <MainHeader firstLine="의사에게 전달할" secondLine="특이사항을 기입해 주세요.">
        <div className="flex-between-align mb-[35px] pt-[25px]">
          <button className="text-mint-7">취소</button>
          <button className="text-mint-9">완료</button>
        </div>
      </MainHeader>
      <AddClinicForm />
    </div>
  )
}

export default page
