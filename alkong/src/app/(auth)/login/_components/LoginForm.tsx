'use client'

import { FormProvider } from 'react-hook-form'

import { InputField } from '@/components/InputField'
import { useLoginForm } from '@/hooks/schema/useLoginForm'

const LoginForm = () => {
  const formMethod = useLoginForm()
  const { handleSubmit } = formMethod

  const hasError = false // 통신 후 로직
  const handleLoginFormSubmit = () => {}

  return (
    <FormProvider {...formMethod}>
      <form onSubmit={handleSubmit(handleLoginFormSubmit)} className="flexColumn mb-6 w-full gap-4">
        <InputField>
          <InputField.Input section="id" placeholder="아이디" />
        </InputField>

        <InputField>
          <InputField.Input section="password" placeholder="비밀번호" type="password" />
        </InputField>

        <p className="caption-M h-[18px] text-red">
          {hasError && '아이디와 비밀번호를 다시 확인해 주세요.'}
        </p>
      </form>
    </FormProvider>
  )
}

export default LoginForm
