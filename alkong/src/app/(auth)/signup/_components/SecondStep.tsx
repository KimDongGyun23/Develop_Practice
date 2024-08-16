'use client'

import { type Dispatch, type SetStateAction } from 'react'
import { useFormContext } from 'react-hook-form'

import Button from '@/components/Button'
import { InputField } from '@/components/InputField'

interface IStep {
  setCurrentTab: Dispatch<SetStateAction<number>>
}

const SecondStep = ({ setCurrentTab }: IStep) => {
  const { trigger } = useFormContext()

  const handleClickSecondStep = async () => {
    const isValid = await trigger(['name', 'phone', 'birth', 'gender'])
    if (isValid) setCurrentTab(2)
  }

  return (
    <>
      <p className="title-B mb-6">회원 정보를 입력해주세요!</p>

      <div className="flexColumn grow gap-4 pb-10">
        <InputField>
          <InputField.Label>이름</InputField.Label>
          <InputField.Input section="name" placeholder="성명을 입력해주세요." />
          <InputField.ErrorMessage section="name" />
        </InputField>

        <InputField>
          <InputField.Label>휴대전화번호</InputField.Label>
          <InputField.Input section="phone" placeholder="숫자만 입력해주세요." />
          <InputField.ErrorMessage section="phone" />
        </InputField>

        <InputField>
          <InputField.Label>생년월일</InputField.Label>
          <InputField.Input section="birth" placeholder="생년월일 8자리를 입력해주세요." />
          <InputField.ErrorMessage section="birth" />
        </InputField>

        <InputField>
          <InputField.Label>성별</InputField.Label>
          <InputField.InputGender />
          <InputField.ErrorMessage section="gender" />
        </InputField>
      </div>

      <Button primary handleClick={handleClickSecondStep}>
        다음으로
      </Button>
    </>
  )
}

export default SecondStep
