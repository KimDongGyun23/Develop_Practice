'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, InputGroup, Label } from '@/components'

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

      <div className="flex-column grow gap-4 pb-10">
        <InputGroup>
          <Label>아이디</Label>
          <InputGroup.Input section="id" placeholder="6~12자/영문 소문자, 숫자 사용 가능" />
          <InputGroup.ErrorMessage section="id" />
        </InputGroup>

        <InputGroup>
          <Label>비밀번호</Label>
          <InputGroup.Input
            type="password"
            section="password"
            placeholder="8~16자/영문자, 숫자 모두 혼용"
          />
          <InputGroup.ErrorMessage section="password" />
        </InputGroup>

        <InputGroup>
          <Label>비밀번호 확인</Label>
          <InputGroup.Input
            type="password"
            section="confirm"
            placeholder="비밀번호를 다시 입력해 주세요."
          />
          <InputGroup.ErrorMessage section="confirm" />
        </InputGroup>
      </div>

      <Button primary handleClick={handleClickFirstStep}>
        다음으로
      </Button>
    </>
  )
}

export default FirstStep
