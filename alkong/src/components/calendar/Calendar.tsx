import { CalendarDateList } from './CalendarDateList'
import { CalendarNavigator } from './CalendarNavigator'

const week = ['일', '월', '화', '수', '목', '금', '토']

const Calendar = () => {
  return (
    <div className="flex-column flex w-full justify-between gap-3">
      <CalendarNavigator />

      <div className="flex shrink justify-around gap-2">
        {week.map((day, idx) => (
          <div key={idx} className="flex-1 text-center text-body font-regular text-gray-6">
            {day}
          </div>
        ))}
      </div>

      <CalendarDateList />
    </div>
  )
}

export default Calendar
