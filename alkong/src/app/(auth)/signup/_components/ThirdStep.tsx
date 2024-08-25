'use client'

import Button from '@/components/button/Button'
import { InputField } from '@/components/InputField'

const ThirdStep = () => {
  return (
    <>
      <div className="title-B mb-6">
        <p>정말 마지막이에요,</p>
        <p>이용약관에 동의해 주세요!</p>
      </div>

      <div className="grow">
        <InputField>
          <InputField.InputCheck section="personal">개인정보이용 동의 (필수)</InputField.InputCheck>
          <InputField.InputCheck section="notification">
            알림 수신 동의 (선택)
          </InputField.InputCheck>
          <InputField.InputCheck section="location">
            위치 기반 서비스 동의 (선택)
          </InputField.InputCheck>
          <InputField.InputCheck section="all">전체 동의</InputField.InputCheck>
        </InputField>
      </div>

      <Button primary type="submit">
        다음으로
      </Button>
    </>
  )
}

export default ThirdStep
