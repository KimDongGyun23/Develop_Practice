'use client'
import { useEffect } from 'react'

import { Calendar, Label, Tag } from '@/components'
import { useCalendarActions } from '@/store/calendarStore'

import ClinicList from './ClinicList'

const LIST = [
  {
    medicalId: 0,
    hospitalName: '연세 세브란스',
    hospitalDate: '2024-08-11 12:05:30',
    medicalPart: ['건강검진', '수면 내시경', '속쓰림'],
  },
  {
    medicalId: 1,
    hospitalName: '서울대학교병원',
    hospitalDate: '2024-08-13 12:05:30',
    medicalPart: ['멍', '감기'],
  },
  {
    medicalId: 2,
    hospitalName: '아주대학교병원',
    hospitalDate: '2024-08-11 17:05:30',
    medicalPart: ['다리 골절', '깁스'],
  },
]

const ClinicClientPage = () => {
  const schedules = LIST.map((item) => item.hospitalDate)
  const { resetCalendar, updateScheduledDates } = useCalendarActions()

  useEffect(() => {
    resetCalendar()
    updateScheduledDates(schedules)
  }, [])

  return (
    <>
      <section className="mt-[38px]">
        <Calendar />
      </section>

      <section className="mt-7">
        <div className="flex-between mb-3">
          <Label icon="clinic-label">병원 내원 일정</Label>
          <Tag.Plus primary handleClick={() => {}}>
            추가
          </Tag.Plus>
        </div>

        <ClinicList list={LIST} />
      </section>
    </>
  )
}

export default ClinicClientPage
