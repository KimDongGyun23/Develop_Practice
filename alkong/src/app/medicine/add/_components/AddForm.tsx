'use client'

import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { InputField, Label, Stepper, SubHeaderEdit } from '@/components'
import { useMedicineForm } from '../../../../../schema/useMedicineForm'

const AddForm = () => {
  const router = useRouter()
  const formMethod = useMedicineForm()
  const { handleSubmit } = formMethod
  const handleSubmitAddMedicine = (formData) => {
    console.log('submit')
    console.log(formData)
  }

  return (
    <div className="mx-5">
      <FormProvider {...formMethod}>
        <form className="flex-column mb-10 gap-6" onSubmit={handleSubmit(handleSubmitAddMedicine)}>
          <SubHeaderEdit isSubmit handleCancle={() => router.back()}>
            복용약 추가
          </SubHeaderEdit>

          <InputField>
            <Label>약품명</Label>
            <InputField.Input section="medicine_name" placeholder="약품명을 입력해주세요." />
            <InputField.ErrorMessage section="medicine_name" />
          </InputField>

          <InputField>
            <InputField.ContainerBetween>
              <Label>복용 요일</Label>
              <InputField.SelectedTextWithArrow handleClick={() => {}}>
                월, 수, 금
              </InputField.SelectedTextWithArrow>
            </InputField.ContainerBetween>
          </InputField>

          <div className="border border-t-mint-5" />

          <InputField>
            <InputField.ContainerBetween>
              <Label>복용 횟수</Label>
              <Stepper />
            </InputField.ContainerBetween>
          </InputField>

          <div className="border border-t-mint-5" />

          <InputField>
            <Label>복용 시간</Label>
            <InputField.SelectedTextWithArrow isFull handleClick={() => {}}>
              오전 09:00
            </InputField.SelectedTextWithArrow>
            <InputField.SelectedTextWithArrow isFull handleClick={() => {}}>
              오전 09:00
            </InputField.SelectedTextWithArrow>
          </InputField>

          <div className="border border-t-mint-5" />

          <InputField>
            <InputField.ContainerBetween>
              <Label>복용 기간</Label>
              <InputField.SelectedTextWithArrow handleClick={() => {}}>
                7월 23일
              </InputField.SelectedTextWithArrow>
            </InputField.ContainerBetween>
          </InputField>

          <div className="border border-t-mint-5" />

          <InputField>
            <InputField.ContainerBetween>
              <Label>복용량</Label>
              <InputField.SelectedTextWithArrow handleClick={() => {}}>
                1회분
              </InputField.SelectedTextWithArrow>
            </InputField.ContainerBetween>
          </InputField>

          <div className="border border-t-mint-5" />

          <InputField>
            <Label>메모</Label>
            <InputField.TextArea section="memo" placeholder="메모를 기록해주세요." />
          </InputField>

          <InputField>
            <InputField.ContainerBetween>
              <Label>알람</Label>
              <InputField.SelectedTextWithArrow handleClick={() => {}}>
                1시간 전
              </InputField.SelectedTextWithArrow>
            </InputField.ContainerBetween>
          </InputField>
        </form>
      </FormProvider>
    </div>
  )
}

export default AddForm
