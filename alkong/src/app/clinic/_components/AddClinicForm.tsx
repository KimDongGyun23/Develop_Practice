'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { InputField, Label, Tag } from '@/components'

import alarm from '/public/image/label-alarm__green.svg'
import calender from '/public/image/label-calender__green.svg'
import check from '/public/image/label-check__green.svg'
import hospital from '/public/image/label-hospital__green.svg'
import snow from '/public/image/label-snow__green.svg'

const AddClinicForm = () => {
  const formMethod = useForm()
  const { handleSubmit } = formMethod
  const handleSubmitClinic = () => {}
  return (
    <FormProvider {...formMethod}>
      <form onSubmit={handleSubmit(handleSubmitClinic)} className="flex-column gap-8 px-5 py-8">
        <InputField>
          <Label src={check}>진료 과목</Label>
          <div className="flex-align gap-2">
            <Tag>건강검진</Tag>
            <Tag>멍</Tag>
            <Tag.Plus handleClick={() => {}}>추가</Tag.Plus>
          </div>
        </InputField>

        <InputField>
          <Label src={calender}>방문 날짜</Label>
          <InputField.Input section="day" placeholder="0000-00-00" />
        </InputField>

        <InputField>
          <Label src={hospital}>방문 병원</Label>
          <InputField.Input section="hospital" placeholder="병원을 입력해주세요" />
        </InputField>

        <InputField>
          <Label src={snow}>증상 및 특이사항</Label>
          <InputField.TextArea section="detail" placeholder="증상을 입력해주세요." />
        </InputField>

        <InputField>
          <InputField.ContainerBetween>
            <Label src={alarm}>알람</Label>
            <InputField.SelectedTextWithArrow handleClick={() => {}}>
              1시간 전
            </InputField.SelectedTextWithArrow>
          </InputField.ContainerBetween>
        </InputField>
      </form>
    </FormProvider>
  )
}

export default AddClinicForm
