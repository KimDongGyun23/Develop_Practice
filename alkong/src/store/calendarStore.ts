import dayjs from 'dayjs'
import { create } from 'zustand'

type CalendarActions = {
  goToPreviousMonth: () => void
  goToNextMonth: () => void
  setSelectedDate: (day: number) => void
  updateScheduledDates: (dates: string[]) => void
}

type CalendarState = {
  currentDate: string
  scheduledDays: number[]
  actions: CalendarActions
}

const initialDate = dayjs().format('YYYY-MM-DD')

export const useCalendarStore = create<CalendarState>((set, get) => ({
  currentDate: initialDate,
  scheduledDays: [],
  actions: {
    goToPreviousMonth: () => {
      const { currentDate } = get()
      const previousMonthDate = dayjs(currentDate).subtract(1, 'month').format('YYYY-MM-DD')
      set({ currentDate: previousMonthDate, scheduledDays: [] })
    },
    goToNextMonth: () => {
      const { currentDate } = get()
      const nextMonthDate = dayjs(currentDate).add(1, 'month').format('YYYY-MM-DD')
      set({ currentDate: nextMonthDate, scheduledDays: [] })
    },
    setSelectedDate: (day: number) => {
      const { currentDate } = get()
      const updatedDate = dayjs(currentDate).date(day).format('YYYY-MM-DD')
      set({ currentDate: updatedDate })
    },
    updateScheduledDates: (dates: string[]) => {
      const uniqueDays = Array.from(new Set(dates.map((date) => dayjs(date).date())))
      set({ scheduledDays: uniqueDays })
    },
  },
}))

export const useCurrentDate = () => useCalendarStore((state) => state.currentDate)
export const useScheduledDays = () => useCalendarStore((state) => state.scheduledDays)
export const useCalendarActions = () => useCalendarStore((state) => state.actions)
