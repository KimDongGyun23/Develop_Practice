'use client'

import React, { useState } from 'react'
import { FormProvider } from 'react-hook-form'

import { useSignupForm } from '@/hooks/schema/useSignupForm'

import FirstStep from './FirstStep'
import SignupHeader from './SignupHeader'

const SignupForm = () => {
  const formMethod = useSignupForm()
  const [currentTab, setCurrentTab] = useState<number>(0)
  const { handleSubmit } = formMethod
  const handleSignupFormSubmit = () => {}

  return (
    <div className="flexColumn h-full px-5 pt-[18px]">
      <SignupHeader currentTab={currentTab} />
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(handleSignupFormSubmit)} className="flexColumn grow pb-20">
          <FirstStep setCurrentTab={setCurrentTab} />
        </form>
      </FormProvider>
    </div>
  )
}

export default SignupForm
