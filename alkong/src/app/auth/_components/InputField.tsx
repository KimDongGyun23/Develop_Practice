"use client";

import { useFormContext } from "react-hook-form";

interface InputFieldProps {
  label: string;
  placeholder: string;
  section: string;
}

const InputField = ({ label, placeholder, section }: InputFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flexColumn gap-2">
      <label className="font-bold">{label}</label>
      <input
        className=" px-4 py-[10px]"
        {...register(section)}
        placeholder={placeholder}
      />
      {errors[section] && errors[section].message && (
        <p className="text-red-500">{errors[section].message.toString()}</p>
      )}
    </div>
  );
};

export default InputField;
