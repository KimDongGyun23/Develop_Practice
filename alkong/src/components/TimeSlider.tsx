import { useSelectedTimeActions } from '@/store/timeSlider'

import ScrollPicker from './ScrollPicker'

const TimeSlider = () => {
  const hourArr = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
  const minuteArr = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))
  const degreeArr = ['AM', 'PM']

  const { handleHourChange, handleMinuteChange, handleDegreeChange } = useSelectedTimeActions()

  return (
    <div className="flexCenter relative rounded-xl bg-[#E4FDF5]">
      <div className="flexAlign z-10 gap-8">
        <ScrollPicker list={hourArr} handleSelectedChange={handleHourChange} />
        <ScrollPicker list={minuteArr} handleSelectedChange={handleMinuteChange} />
        <ScrollPicker list={degreeArr} handleSelectedChange={handleDegreeChange} />
      </div>
      <div className="absolute top-1/2 h-8 w-[192px] -translate-y-1/2 rounded-lg bg-mint-2" />
    </div>
  )
}

export default TimeSlider
