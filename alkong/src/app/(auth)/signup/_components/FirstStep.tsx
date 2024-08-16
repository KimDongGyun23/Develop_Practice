'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, InputField, Label } from '@/components'

interface IStep {
  setCurrentTab: Dispatch<SetStateAction<number>>
}

const FirstStep = ({ setCurrentTab }: IStep) => {
  const { trigger } = useFormContext()

  const handleClickFirstStep = async () => {
    const isValid = await trigger(['id', 'password', 'confirm'])
    if (isValid) setCurrentTab(1)
  }
  return (
    <>
      <p className="title-B mb-6">로그인 정보를 입력해주세요!</p>

      <div className="flexColumn grow gap-4 pb-10">
        <InputField>
          <Label>아이디</Label>
          <InputField.Input section="id" placeholder="6~12자/영문 소문자, 숫자 사용 가능" />
          <InputField.ErrorMessage section="id" />
        </InputField>

        <InputField>
          <Label>비밀번호</Label>
          <InputField.Input
            type="password"
            section="password"
            placeholder="8~16자/영문자, 숫자 모두 혼용"
          />
          <InputField.ErrorMessage section="password" />
        </InputField>

        <InputField>
          <Label>비밀번호 확인</Label>
          <InputField.Input
            type="password"
            section="confirm"
            placeholder="비밀번호를 다시 입력해 주세요."
          />
          <InputField.ErrorMessage section="confirm" />
        </InputField>
      </div>

      <Button primary handleClick={handleClickFirstStep}>
        다음으로
      </Button>
    </>
  )
}

export default FirstStep
