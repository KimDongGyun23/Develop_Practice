import dayjs from 'dayjs'

import { useCurrentDate } from '@/store/calendarStore'

import { CalendarDateItem } from './CalendarDateItem'

export const CalendarDateList = () => {
  const date = useCurrentDate()

  const emptyDatesCount = dayjs(date).startOf('month').day()
  const totalDates = dayjs(date).daysInMonth()

  return (
    <div className="flex-column flex-1 gap-2">
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: emptyDatesCount }).map((_, idx) => (
          <div key={idx} />
        ))}

        {Array.from({ length: totalDates }).map((_, idx) => (
          <CalendarDateItem key={idx} indexOfDate={idx + 1} />
        ))}
      </div>
    </div>
  )
}
