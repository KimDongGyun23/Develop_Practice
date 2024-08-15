'use client'

import { InputField } from '@/components/InputField'

const FirstStep = () => {
  return (
    <div>
      <p className="title-B mb-6">로그인 정보를 입력해주세요!</p>

      <div className="flexColumn gap-4">
        <InputField>
          <InputField.Label>아이디</InputField.Label>
          <InputField.Input section="id" placeholder="6~12자/영문 소문자, 숫자 사용 가능" />
        </InputField>

        <InputField>
          <InputField.Label>비밀번호</InputField.Label>
          <InputField.Input
            type="password"
            section="password"
            placeholder="8~16자/영문자, 숫자 모두 혼용"
          />
        </InputField>

        <InputField>
          <InputField.Label>비밀번호 확인</InputField.Label>
          <InputField.Input
            type="password"
            section="confirm"
            placeholder="비밀번호를 다시 입력해 주세요."
          />
        </InputField>
      </div>
    </div>
  )
}

export default FirstStep
