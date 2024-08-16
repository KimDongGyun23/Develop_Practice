'use client'
import { useEffect } from 'react'
import Image from 'next/image'

import { useStepperActions, useStepperCount } from '@/store/stepper'

import circleAddImg from '/public/image/add-circle__green.svg'
import circleMinusImg from '/public/image/minus-circle__green.svg'

interface IInputStepper {
  initial: number
}

const Stepper = ({ initial }: IInputStepper) => {
  const count = useStepperCount()
  const { handleIncrease, handleDecrease, setInitialCount } = useStepperActions()

  useEffect(() => {
    setInitialCount(initial)
  }, [initial, setInitialCount])

  return (
    <div className="flex-align gap-4">
      <Image
        src={circleMinusImg}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={handleDecrease}
        alt="circle-minus"
      />
      <p className="headline-M">{count}</p>
      <Image
        src={circleAddImg}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={handleIncrease}
        alt="circle-add"
      />
    </div>
  )
}

export default Stepper
