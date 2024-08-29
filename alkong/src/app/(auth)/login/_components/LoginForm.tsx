'use client'

import { FormProvider } from 'react-hook-form'

import { Button, InputGroup } from '@/components'

import { useLoginForm } from '../../../../schema/useLoginForm'

const LoginForm = () => {
  const { formMethod, handleSubmitLoginForm } = useLoginForm()
  const { handleSubmit } = formMethod

  const hasError = false // 통신 후 로직

  return (
    <FormProvider {...formMethod}>
      <form
        onSubmit={handleSubmit(handleSubmitLoginForm)}
        className="flex-column mb-6 w-full gap-4"
      >
        <InputGroup>
          <InputGroup.Input section="id" placeholder="아이디" />
        </InputGroup>

        <InputGroup>
          <InputGroup.Input section="password" placeholder="비밀번호" type="password" />
        </InputGroup>

        <p className="caption-M h-[18px] text-red">
          {hasError && '아이디와 비밀번호를 다시 확인해 주세요.'}
        </p>

        <Button primary type="submit">
          로그인
        </Button>
      </form>
    </FormProvider>
  )
}

export default LoginForm
