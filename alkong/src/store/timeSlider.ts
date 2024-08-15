import { create } from 'zustand'

interface Actions {
  handleHourChange: (selected: string | number) => void
  handleMinuteChange: (selected: string | number) => void
  handleDegreeChange: (selected: string | number) => void
  getFormattedTime: () => string
  resetSelectedTime: () => void
}

interface SelectedTimeStore {
  selectedTime: [number, number, string]
  actions: Actions
}

const initialSelectedTime: [number, number, string] = [1, 0, 'AM']

export const useSelectedTimeStore = create<SelectedTimeStore>((set, get) => ({
  selectedTime: initialSelectedTime,
  actions: {
    handleHourChange: (selected) =>
      set((state) => ({
        selectedTime: [Number(selected), state.selectedTime[1], state.selectedTime[2]],
      })),
    handleMinuteChange: (selected) =>
      set((state) => ({
        selectedTime: [state.selectedTime[0], Number(selected), state.selectedTime[2]],
      })),
    handleDegreeChange: (selected) =>
      set((state) => ({
        selectedTime: [state.selectedTime[0], state.selectedTime[1], selected as string],
      })),
    getFormattedTime: () => {
      const [hour, minute, period] = get().selectedTime
      let hourNumber = hour

      if (period === 'PM' && hour < 12) hourNumber += 12
      else if (period === 'AM' && hour === 12) hourNumber = 0

      const formattedHour = hourNumber.toString().padStart(2, '0')
      const formattedMinute = minute.toString().padStart(2, '0')

      return `${formattedHour}:${formattedMinute}`
    },
    resetSelectedTime: () => set(() => ({ selectedTime: initialSelectedTime })),
  },
}))

export const useSelectedTime = () => useSelectedTimeStore((state) => state.selectedTime)
export const useSelectedTimeActions = () => useSelectedTimeStore((state) => state.actions)
