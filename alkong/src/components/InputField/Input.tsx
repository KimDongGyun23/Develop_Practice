'use client'

import { useFormContext } from 'react-hook-form'

interface IInputField {
  type?: string
  section: string
  placeholder: string
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

export const InputGender = () => {
  const { register } = useFormContext()
  const genders = ['male', 'female']

  return (
    <div className="flex gap-[15px] text-center">
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
