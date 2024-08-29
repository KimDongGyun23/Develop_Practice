'use client'

import { InputGroup } from '@/components'
import Button from '@/components/button/Button'

const ThirdStep = () => {
  return (
    <>
      <div className="title-B mb-6">
        <p>정말 마지막이에요,</p>
        <p>이용약관에 동의해 주세요!</p>
      </div>

      <div className="grow">
        <InputGroup>
          <InputGroup.CheckBox section="personal">개인정보이용 동의 (필수)</InputGroup.CheckBox>
          <InputGroup.CheckBox section="notification">알림 수신 동의 (선택)</InputGroup.CheckBox>
          <InputGroup.CheckBoxAll>전체 동의</InputGroup.CheckBoxAll>
        </InputGroup>
      </div>

      <Button primary type="submit">
        다음으로
      </Button>
    </>
  )
}

export default ThirdStep
