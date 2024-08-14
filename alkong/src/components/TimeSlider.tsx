import ScrollPicker from './ScrollPicker'

const TimeSlider = () => {
  const hourArr = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
  const minuteArr = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'))
  const degreeArr = ['AM', 'PM']

  return (
    <div className="flexCenter relative rounded-xl bg-[#E4FDF5]">
      <div className="flexAlign z-10 gap-8">
        <ScrollPicker list={hourArr} handleSelectedChange={(selected) => console.log(selected)} />
        <ScrollPicker list={minuteArr} handleSelectedChange={(selected) => console.log(selected)} />
        <ScrollPicker list={degreeArr} handleSelectedChange={(selected) => console.log(selected)} />
      </div>
      <div className="absolute inset-x-0 ml-[66px] mr-[77px] h-8 rounded-lg bg-mint-2" />
    </div>
  )
}

export default TimeSlider
