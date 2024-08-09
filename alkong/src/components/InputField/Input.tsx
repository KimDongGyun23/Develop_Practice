'use client'

import type { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputFieldProps {
  type: string
  placeholder: string
  register: ReturnType<UseFormRegister<FieldValues>>
}

interface InputGenderProps {
  register: ReturnType<UseFormRegister<FieldValues>>
}

export const Input = ({ type, placeholder, register }: InputFieldProps) => {
  return (
    <input
      type={type}
      className="rounded-xl border border-mint-5 px-6 pb-4 pt-[14px] placeholder:text-gray-6 focus:outline-none"
      placeholder={placeholder}
      {...register}
    />
  )
}

export const InputGender = ({ register }: InputGenderProps) => {
  const genders = ['male', 'female']

  return (
    <div className="flex gap-[15px] text-center">
      {genders.map((gender) => (
        <div className="flex-1" key={gender}>
          <input className="peer hidden" type="radio" value={gender} id={gender} {...register} />
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
