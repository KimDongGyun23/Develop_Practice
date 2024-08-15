'use client'

import { DECIMAL_WEIGHT, INTEGER_WEIGHT } from '@/constants'
import { useWeightActions } from '@/store/weightSlider'

import ScrollPicker from './ScrollPicker'

const WeightSlider = () => {
  const { handleIntegerWeightChange, handleDecimalWeightChange } = useWeightActions()

  return (
    <div className="flexCenter relative rounded-xl bg-[#E4FDF5]">
      <div className="flexCenter z-10 w-[178px] gap-[14px]">
        <ScrollPicker list={INTEGER_WEIGHT} handleSelectedChange={handleIntegerWeightChange} />
        <p>.</p>
        <ScrollPicker list={DECIMAL_WEIGHT} handleSelectedChange={handleDecimalWeightChange} />
      </div>
      <p className="headline-M">kg</p>
      <div className="absolute top-1/2 mr-4 h-8 w-[158px] -translate-y-1/2 rounded-lg bg-mint-2" />
    </div>
  )
}

export default WeightSlider
