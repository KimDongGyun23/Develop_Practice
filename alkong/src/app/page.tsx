'use client'
import { FormProvider, useForm } from 'react-hook-form'

import { InputField } from '@/components/InputField'
import Toggle from '@/components/Toggle'

export default function Home() {
  const formMethod = useForm({
    defaultValues: {
      count: 0,
      state: 'ssssssssss',
    },
  })
  const { handleSubmit } = formMethod
  const handleSubmitSignIn = (formData) => {
    console.log(formData)
  }

  return (
    <div>
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitSignIn)}>
          <InputField>
            <InputField.ContainerSpaceBetween>
              <InputField.Label>복용 횟수</InputField.Label>
              <InputField.InputStepper section="count" initial={0} />
            </InputField.ContainerSpaceBetween>
          </InputField>

          <InputField>
            <InputField.Label>증상 및 특이사항</InputField.Label>
            <InputField.TextArea section="state" placeholder="증상을 입력해주세요." readOnly />
          </InputField>

          <InputField>
            <InputField.Label>진료 과목</InputField.Label>
            <InputField.TagList list={['건강검진', '멍']} />
          </InputField>

          <Toggle />

          <button type="submit">제출</button>
        </form>
      </FormProvider>
    </div>
  )
}
