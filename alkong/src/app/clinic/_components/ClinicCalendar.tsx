'use client'
import { useState } from 'react'

import { Calendar } from '@/components'

const ClinicCalendar = () => {
  const [date, setDate] = useState<Date>(new Date())
  const schedules = ['2024-08-27 12:00:00', '2024-08-28 13:00:00', '2024-08-29 14:00:00']

  return <Calendar date={date} setDate={setDate} schedules={schedules} />
}

export default ClinicCalendar
