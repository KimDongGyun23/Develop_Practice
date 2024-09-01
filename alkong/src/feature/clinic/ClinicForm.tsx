'use client'
import { FormProvider } from 'react-hook-form'

import { InputGroup, Label, Tag } from '@/components'
import { useToggle } from '@/hooks'
import { useClinicForm } from '@/schema/useClinicForm'
import type { ClinicFormType } from '@/types'

import { DateBottomSheet, TagBottomSheet } from '.'

const ClinicForm = () => {
  const formMethod = useClinicForm()
  const { handleSubmit, getValues } = formMethod
  const [tagBottomSheet, toggleTagBottomSheet] = useToggle(false)
  const [dateBottomSheet, toggleDateBottomSheet] = useToggle(false)
  const [alarmBottomSheet, toggleAlarmBottomSheet] = useToggle(false)

  const handleSubmitClinicForm = (formData: ClinicFormType) => {
    alert(JSON.stringify(formData, null, 2))
  }

  return (
    <FormProvider {...formMethod}>
      <form onSubmit={handleSubmit(handleSubmitClinicForm)} className="flex-column gap-8 px-5 py-8">
        <InputGroup>
          <Label icon="check-label">진료 과목</Label>
          <div className="flex flex-wrap gap-2">
            {getValues('medicalPart').map((part) => (
              <Tag key={part}>{part}</Tag>
            ))}
            <Tag.Plus handleClick={toggleTagBottomSheet}>추가</Tag.Plus>
          </div>
          <InputGroup.ErrorMessage section="medicalPart" />
          <TagBottomSheet
            section="medicalPart"
            isShowing={tagBottomSheet}
            onClickScrim={toggleTagBottomSheet}
          />
        </InputGroup>

        <InputGroup>
          <Label icon="calendar-label">방문 날짜</Label>
          <button type="button" onClick={toggleDateBottomSheet}>
            <InputGroup.Input
              section="hospitalDate"
              readOnly
              placeholder="클릭하여 방문 날짜를 선택해주세요."
            />
          </button>
          <InputGroup.ErrorMessage section="hospitalDate" />
          <DateBottomSheet
            section="hospitalDate"
            isShowing={dateBottomSheet}
            onClickScrim={toggleDateBottomSheet}
          />
        </InputGroup>

        <InputGroup>
          <Label icon="clinic-label">방문 병원</Label>
          <InputGroup.Input section="hospitalName" placeholder="병원을 입력해주세요." />
          <InputGroup.ErrorMessage section="hospitalName" />
        </InputGroup>

        <InputGroup>
          <Label icon="emergency-label">증상 및 특이사항</Label>
          <InputGroup.TextArea section="medicalMemo" placeholder="증상을 입력해주세요." />
        </InputGroup>

        <InputGroup>
          <Label icon="time-label">알람</Label>
          <div className="flex-between-align w-full rounded-xl border border-mint-3 px-6 py-4">
            <Label>알람</Label>
            <InputGroup.TextWithArrow section="medicalAlarm" onClick={toggleAlarmBottomSheet} />
          </div>
          <InputGroup.ErrorMessage section="medicalAlarm" />
        </InputGroup>

        <button type="submit">d</button>
      </form>
    </FormProvider>
  )
}

export default ClinicForm
