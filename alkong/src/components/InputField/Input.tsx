'use client'

import type { FieldValues, UseFormRegister } from 'react-hook-form'

interface InputFieldProps {
  placeholder: string
  register: ReturnType<UseFormRegister<FieldValues>>
}

export const Input = ({ placeholder, register }: InputFieldProps) => {
  return (
    <input
      className="rounded-xl border border-mint-5 px-6 pb-4 pt-[14px] placeholder:text-gray-6 focus:outline-none"
      placeholder={placeholder}
      {...register}
    />
  )
}
