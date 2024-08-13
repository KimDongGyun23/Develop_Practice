'use client'

import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import Image from 'next/image'

import { useCheckStore } from '@/store/checkList'

import circleAddImg from '/public/image/add-circle__green.svg'
import arrowImg from '/public/image/arrow-right__gray.svg'
import checkImg from '/public/image/check-circle__green.svg'
import circleMinusImg from '/public/image/minus-circle__green.svg'
import nonCheckImg from '/public/image/noncheck-circle__white.svg'

interface IInputField {
  type?: string
  section: string
  placeholder: string
}

interface IInputCheck {
  section: 'personal' | 'notification' | 'location'
  children: React.ReactNode
}

interface IInputStepper {
  section: string
  initial: number
}

export const Input = ({ type = 'text', section, placeholder }: IInputField) => {
  const { register } = useFormContext()
  return (
    <input
      type={type}
      {...register(section)}
      className="rounded-xl border border-mint-5 px-6 pb-4 pt-[14px] placeholder:text-gray-6 focus:outline-none"
      placeholder={placeholder}
    />
  )
}

export const TextArea = ({ section, placeholder }: Omit<IInputField, 'type'>) => {
  const { register } = useFormContext()
  return (
    <textarea
      {...register(section)}
      className="resize-none rounded-xl border border-mint-5 px-6 pb-4 pt-[14px] placeholder:text-gray-6 focus:outline-none"
      placeholder={placeholder}
    />
  )
}

export const InputGender = () => {
  const { register } = useFormContext()
  const genders = ['male', 'female']

  return (
    <div className="flex gap-[15px] text-center">
      {genders.map((gender) => (
        <div className="flex-1" key={gender}>
          <input type="radio" id={gender} {...register('gender')} className="peer hidden" />
          <label
            htmlFor={gender}
            className="block w-full rounded-xl border border-mint-5 py-3 text-mint-4 peer-checked:border-none peer-checked:bg-mint-4 peer-checked:text-white"
          >
            {gender === 'male' ? '남성' : '여성'}
          </label>
        </div>
      ))}
    </div>
  )
}

export const InputCheck = ({ section, children }: IInputCheck) => {
  const { register, setValue } = useFormContext()
  const { checkedSections, handleCheckClick } = useCheckStore()
  const isChecked = checkedSections.includes(section)

  const onCheckClick = () => {
    handleCheckClick(section)
    setValue(section, !isChecked)
  }

  return (
    <>
      <input
        type="checkbox"
        id={section}
        checked={isChecked}
        className="peer hidden"
        {...register(section)}
      />
      <label
        htmlFor={section}
        className={`cursor-pointer rounded-xl border border-gray-3 bg-white peer-checked:bg-green-1`}
      >
        <button
          type="button"
          className="flexAlign size-full gap-2 px-5 py-[14px]"
          onClick={onCheckClick}
        >
          <Image src={isChecked ? checkImg : nonCheckImg} width={28} height={28} alt="check" />
          <p className="headline-B mr-auto text-gray-8">{children}</p>
          <Image src={arrowImg} width={28} height={28} alt="arrow-right" />
        </button>
      </label>
    </>
  )
}

export const InputCheckAll = () => {
  const { setValue } = useFormContext()
  const { isAllChecked, handleAllCheckClick } = useCheckStore()

  const onAllCheckClick = () => {
    handleAllCheckClick()
    const allSections = ['personal', 'notification', 'location'] as const
    allSections.forEach((section) => {
      setValue(section, !isAllChecked)
    })
  }

  const isCheckStyle = isAllChecked ? 'bg-green-1' : 'white'

  return (
    <>
      <input type="checkbox" id="all" className="peer hidden" />
      <label
        htmlFor="all"
        className={`cursor-pointer rounded-xl border border-gray-3 ${isCheckStyle}`}
      >
        <button
          type="button"
          className="flexAlign size-full gap-2 px-5 py-[14px]"
          onClick={onAllCheckClick}
        >
          <Image src={isAllChecked ? checkImg : nonCheckImg} width={28} height={28} alt="check" />
          <p className="headline-B mr-auto text-gray-8">전체 동의</p>
          <Image src={arrowImg} width={28} height={28} alt="arrow-right" />
        </button>
      </label>
    </>
  )
}

export const InputStepper = ({ section, initial }: IInputStepper) => {
  const [count, setCount] = useState<number>(initial)
  const { register, setValue } = useFormContext()

  const handleDecrease = () => {
    setValue('count', count - 1)
    setCount((prevCount) => Math.max(0, prevCount - 1))
  }

  const handleIncrease = () => {
    setValue('count', count + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div className="flexAlign gap-4">
      <Image
        src={circleMinusImg}
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={handleDecrease}
        alt="circle-minus"
      />
      <p className="headline-M">
        <input type="hidden" value={count} {...register(section)} />
        {count}
      </p>
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
