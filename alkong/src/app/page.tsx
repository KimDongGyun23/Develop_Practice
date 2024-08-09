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
          <InputField.Input register={register('id')} placeholder="아이디를 입력해주세요." />
        </InputField>
      </FormProvider>
    </div>
  )
}
