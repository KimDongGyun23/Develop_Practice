import { create } from 'zustand'

interface Actions {
  handleHourChange: (selected: string | number) => void
  handleMinuteChange: (selected: string | number) => void
  handleDegreeChange: (selected: string | number) => void
  resetSelectedTime: () => void
}

interface SelectedTimeStore {
  selectedTime: (number | string)[]
  actions: Actions
}

const initialSelectedTime: (number | string)[] = ['01', '00', 'AM']

export const useSelectedTimeStore = create<SelectedTimeStore>((set) => ({
  selectedTime: initialSelectedTime,
  actions: {
    handleHourChange: (selected) =>
      set((state) => ({ selectedTime: [selected, state.selectedTime[1], state.selectedTime[2]] })),
    handleMinuteChange: (selected) =>
      set((state) => ({ selectedTime: [state.selectedTime[0], selected, state.selectedTime[2]] })),
    handleDegreeChange: (selected) =>
      set((state) => ({ selectedTime: [state.selectedTime[0], state.selectedTime[1], selected] })),
    resetSelectedTime: () => set(() => ({ selectedTime: initialSelectedTime })),
  },
}))

export const useSelectedTime = () => useSelectedTimeStore((state) => state.selectedTime)
export const useSelectedTimeActions = () => useSelectedTimeStore((state) => state.actions)
