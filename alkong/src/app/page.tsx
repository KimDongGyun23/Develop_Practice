'use client'
import { FormProvider, useForm } from 'react-hook-form'

import { InputField } from '@/components/InputField'

export default function Home() {
  const formMethod = useForm({
    defaultValues: {
      count: 0,
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
          <button type="submit">제출</button>
        </form>
      </FormProvider>
    </div>
  )
}
