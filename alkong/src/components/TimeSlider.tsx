import { HOURS, MINUTES, TIME_PERIOD } from '@/constants'
import { useSelectedTimeActions } from '@/store/timeSlider'

import ScrollPicker from './ScrollPicker'

const TimeSlider = () => {
  const { handleHourChange, handleMinuteChange, handleDegreeChange } = useSelectedTimeActions()

  return (
    <div className="flexCenter relative rounded-xl bg-[#E4FDF5]">
      <div className="flexAlign z-10 gap-8">
        <ScrollPicker list={HOURS} handleSelectedChange={handleHourChange} />
        <ScrollPicker list={MINUTES} handleSelectedChange={handleMinuteChange} />
        <ScrollPicker list={TIME_PERIOD} handleSelectedChange={handleDegreeChange} />
      </div>
      <div className="absolute top-1/2 h-8 w-[192px] -translate-y-1/2 rounded-lg bg-mint-2" />
    </div>
  )
}

export default TimeSlider
