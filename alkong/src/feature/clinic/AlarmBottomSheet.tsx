'use client'

import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { BottomSheet, Label, SubHeader } from '@/components'

type AlarmBottomSheetProps = {
  section: string
  isShowing: boolean
  onClickScrim: () => void
}

const ALARM_TIME = ['1주 전', '24시간 전', '12시간 전', '1시간 전', '30분 전', '없음']

const AlarmBottomSheet = ({ section, isShowing, onClickScrim }: AlarmBottomSheetProps) => {
  const { setValue } = useFormContext()
  const [selectedTime, setSelectedTime] = useState<string>('없음')

  const handleClickComplete = () => {
    setValue(section, selectedTime)
    onClickScrim()
  }

  const handleClickTime = (time: string) => {
    setSelectedTime(time)
  }

  return (
    <BottomSheet isShowing={isShowing} onClickScrim={onClickScrim}>
      <SubHeader.Complete onClickCancle={onClickScrim} onClickComplete={handleClickComplete}>
        알람
      </SubHeader.Complete>

      <div className="mt-10 w-full">
        <Label icon="time-label">알람 주기를 선택해주세요.</Label>
      </div>

      <div className="flex-column mt-3 w-full rounded-xl bg-gray-2 px-6 py-[2px]">
        {ALARM_TIME.map((time) => (
          <button
            key={time}
            className="headline-M border border-b-gray-4 py-[14px] text-left last:border-none"
            onClick={() => handleClickTime(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </BottomSheet>
  )
}

export default AlarmBottomSheet
