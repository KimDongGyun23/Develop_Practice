'use client'
import { FormProvider } from 'react-hook-form'

import { MainHeader } from '@/components'
import { useClinicForm } from '@/schema/useClinicForm'
import type { ClinicFormType } from '@/types'

import ClinicForm from './ClinicForm'

const ClientWritePullPage = () => {
  const formMethod = useClinicForm()
  const { handleSubmit } = formMethod

  const handleSubmitClinicForm = (formData: ClinicFormType) => {
    alert(JSON.stringify(formData, null, 2))
  }

  return (
    <>
      <MainHeader.Confirm
        title={`의사에게 전달할
특이사항을 기입해주세요.`}
        onCancel={() => {}}
        onConfirm={handleSubmit(handleSubmitClinicForm)}
      />

      <FormProvider {...formMethod}>
        <form className="flex-column gap-8 px-5 py-8">
          <ClinicForm />
        </form>
      </FormProvider>
    </>
  )
}

export default ClientWritePullPage
