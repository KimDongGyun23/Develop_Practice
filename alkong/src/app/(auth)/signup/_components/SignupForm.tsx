'use client'

import React, { useState } from 'react'
import { FormProvider } from 'react-hook-form'

import { useSignupForm } from '../../../../../schema/useSignupForm'

import { FirstStep, SecondStep, SignupHeader, ThirdStep } from './index'

const SignupForm = () => {
  const formMethod = useSignupForm()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const { handleSubmit } = formMethod
  const handleSignupFormSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="flex-column h-full px-5 pt-[18px]">
      <SignupHeader currentTab={currentTab} />
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSignupFormSubmit)} className="flex-column grow pb-20">
          {currentTab === 0 && <FirstStep setCurrentTab={setCurrentTab} />}
          {currentTab === 1 && <SecondStep setCurrentTab={setCurrentTab} />}
          {currentTab === 2 && <ThirdStep />}
        </form>
      </FormProvider>
    </div>
  )
}

export default SignupForm
