import ScrollPicker from './ScrollPicker'

const WeightSlider = () => {
  const integerPart = Array.from({ length: 99 }, (_, i) => String(i + 1).padStart(2, '0'))
  const decimalPart = Array.from({ length: 10 }, (_, i) => String(i))

  return (
    <div className="flexCenter relative rounded-xl bg-[#E4FDF5]">
      <div className="flexCenter z-10 w-[178px] gap-[14px]">
        <ScrollPicker
          list={integerPart}
          handleSelectedChange={(selected) => console.log(selected)}
        />
        <p>.</p>
        <ScrollPicker
          list={decimalPart}
          handleSelectedChange={(selected) => console.log(selected)}
        />
      </div>
      <p className="headline-M">kg</p>
      <div className="absolute top-1/2 mr-4 h-8 w-[158px] -translate-y-1/2 rounded-lg bg-mint-2" />
      {/* <div className="absolute inset-x-0  ml-[73px] mr-[104px] h-8 w-[158px] rounded-lg bg-mint-2" /> */}
    </div>
  )
}

export default WeightSlider
