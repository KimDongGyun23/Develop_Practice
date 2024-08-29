'use client'

import React, { useState } from 'react'
import { FormProvider } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import { useSignupForm } from '../../../../schema/useSignupForm'

import { FirstStep, SecondStep, SignupHeader, ThirdStep } from './index'

const SignupForm = () => {
  const { formMethod, handleSubmitSignupForm } = useSignupForm()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const { handleSubmit, control } = formMethod

  return (
    <div className="flex-column h-full px-5 pt-[18px]">
      <SignupHeader currentTab={currentTab} />
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSubmitSignupForm)} className="flex-column grow pb-20">
          {currentTab === 0 && <FirstStep setCurrentTab={setCurrentTab} />}
          {currentTab === 1 && <SecondStep setCurrentTab={setCurrentTab} />}
          {currentTab === 2 && <ThirdStep />}
        </form>
      </FormProvider>
      <DevTool control={control} />
    </div>
  )
}

export default SignupForm
