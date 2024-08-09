'use client'
import { FormProvider } from 'react-hook-form'

import { InputField } from '@/components/InputField'
import { useSignupForm } from '@/hooks/schema/useSignupForm'

export default function Home() {
  const formMethod = useSignupForm()
  const { register } = formMethod

  return (
    <div>
      <FormProvider {...formMethod}>
        <InputField>
          <InputField.Label>아이디</InputField.Label>
          <InputField.Input
            type="text"
            register={register('id')}
            placeholder="6~12자/영문 소문자, 숫자 사용 가능"
          />
        </InputField>

        <InputField>
          <InputField.Label>비밀번호</InputField.Label>
          <InputField.Input
            type="password"
            register={register('password')}
            placeholder="8~16자/영문자, 숫자 모두 혼용"
          />
        </InputField>

        <InputField>
          <InputField.Label>비밀번호 확인</InputField.Label>
          <InputField.Input
            type="password"
            register={register('confirm')}
            placeholder="비밀번호를 다시 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label>이름</InputField.Label>
          <InputField.Input
            type="text"
            register={register('name')}
            placeholder="성명을 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label>휴대전화번호</InputField.Label>
          <InputField.Input
            type="text"
            register={register('phone')}
            placeholder="숫자만 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label>생년월일</InputField.Label>
          <InputField.Input
            type="text"
            register={register('birth')}
            placeholder="생년월일 8자리를 입력해주세요."
          />
        </InputField>

        <InputField>
          <InputField.Label>성별</InputField.Label>
          <InputField.InputGender register={register('gender')} />
        </InputField>
      </FormProvider>
    </div>
  )
}
