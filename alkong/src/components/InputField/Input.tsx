'use client'

import { useFormContext } from 'react-hook-form'
import Image from 'next/image'

import { useAllChecked, useCheckList, useCheckListActions } from '@/store/checkList'

import arrowImg from '/public/image/arrow-right__gray.svg'
import checkImg from '/public/image/check-circle__green.svg'
import nonCheckImg from '/public/image/noncheck-circle__white.svg'

interface IInputField {
  type?: string
  section: string
  readOnly?: boolean
  placeholder: string
}

interface IInputCheck {
  section: 'personal' | 'notification' | 'location'
  children: React.ReactNode
}

export const Input = ({ type = 'text', section, readOnly = false, placeholder }: IInputField) => {
  const { register } = useFormContext()
  return (
    <input
      type={type}
      {...register(section)}
      readOnly={readOnly}
      className="rounded-xl border border-mint-5 px-6 pb-4 pt-[14px] placeholder:text-gray-6 focus:outline-none"
      placeholder={placeholder}
    />
  )
}

export const TextArea = ({ section, readOnly = false, placeholder }: Omit<IInputField, 'type'>) => {
  const { register } = useFormContext()
  return (
    <textarea
      {...register(section)}
      readOnly={readOnly}
      className="resize-none rounded-xl border border-mint-5 px-6 pb-4 pt-[14px] placeholder:text-gray-6 focus:outline-none"
      placeholder={placeholder}
    />
  )
}

export const InputGender = () => {
  const { register } = useFormContext()
  const genders = ['male', 'female']

  return (
    <div className="flex cursor-pointer gap-[15px] text-center">
      {genders.map((gender) => (
        <div className="flex-1" key={gender}>
          <input
            type="radio"
            id={gender}
            value={gender}
            {...register('gender')}
            className="peer hidden"
          />
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
  const { setValue } = useFormContext()
  const checkList = useCheckList()
  const { handleCheckClick } = useCheckListActions()
  const isChecked = checkList[section]

  const onCheckClick = () => {
    setValue(section, !checkList[section])
    handleCheckClick(section)
  }

  return (
    <button
      type="button"
      className={`rounded-xl  px-5 py-[14px] ${isChecked ? 'bg-mint-1' : 'border border-gray-3 bg-white'}`}
      onClick={onCheckClick}
    >
      <div className="flex-align gap-2">
        <Image src={isChecked ? checkImg : nonCheckImg} width={28} height={28} alt="check" />
        <p className="headline-B mr-auto text-gray-8">{children}</p>
        <Image src={arrowImg} width={28} height={28} alt="arrow-right" />
      </div>
    </button>
  )
}

export const InputCheckAll = () => {
  const { setValue } = useFormContext()
  const isAllChecked = useAllChecked()
  const { handleAllCheckClick } = useCheckListActions()

  const onAllCheckClick = () => {
    const sections = ['personal', 'notification', 'location']
    sections.forEach((section) => setValue(section, !isAllChecked))
    handleAllCheckClick()
  }

  return (
    <button
      type="button"
      className={`rounded-xl  px-5 py-[14px] ${isAllChecked ? 'bg-mint-1' : 'border border-gray-3 bg-white'}`}
      onClick={onAllCheckClick}
    >
      <div className="flex-align gap-2 rounded-xl">
        <Image src={isAllChecked ? checkImg : nonCheckImg} width={28} height={28} alt="check" />
        <p className="headline-B mr-auto text-gray-8">전체 동의</p>
        <Image src={arrowImg} width={28} height={28} alt="arrow-right" />
      </div>
    </button>
  )
}
