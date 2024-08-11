'use client'
import { FormProvider } from 'react-hook-form'

import { InputField } from '@/components/InputField'
import { useSignupForm } from '@/hooks/schema/useSignupForm'

export default function Home() {
  const formMethod = useSignupForm()
  const { handleSubmit } = formMethod
  const handleSubmitSignIn = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitSignIn)}>
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
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </InputField>

          <InputField>
            <InputField.Label>이름</InputField.Label>
            <InputField.Input section="name" placeholder="성명을 입력해주세요." />
          </InputField>

          <InputField>
            <InputField.Label>휴대전화번호</InputField.Label>
            <InputField.Input section="phone" placeholder="숫자만 입력해주세요." />
          </InputField>

          <InputField>
            <InputField.Label>생년월일</InputField.Label>
            <InputField.Input section="birth" placeholder="생년월일 8자리를 입력해주세요." />
          </InputField>

          <InputField>
            <InputField.Label>성별</InputField.Label>
            <InputField.InputGender />
          </InputField>

          <InputField>
            <InputField.InputCheck section="personal">
              개인정보 이용 동의 (필수)
            </InputField.InputCheck>
          </InputField>
          <InputField>
            <InputField.InputCheck section="notification">
              알림 수신 동의 (선택)
            </InputField.InputCheck>
          </InputField>
          <InputField>
            <InputField.InputCheck section="location">
              위치 기반 서비스 동의 (선택)
            </InputField.InputCheck>
          </InputField>

          <InputField>
            <InputField.InputCheckAll />
          </InputField>

          <InputField>
            <InputField.ContainerSpaceBetween>
              <InputField.Label>복용 요일</InputField.Label>
              <InputField.TextWithArrow>월, 수, 금</InputField.TextWithArrow>
            </InputField.ContainerSpaceBetween>
          </InputField>

          <button type="submit">제출</button>
        </form>
      </FormProvider>
    </div>
  )
}
