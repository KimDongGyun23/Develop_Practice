import { SignupStep } from "@/app/_types/auth";
import { useFormContext } from "react-hook-form";

const ThirdSignupStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <div>
        <label>
          <input type="checkbox" {...register("terms")} />
          모든 약관에 동의합니다.
        </label>
        {errors?.terms && <p>{errors.terms.message?.toString()}</p>}
      </div>
      <button type="submit" className="bg-gray-300 w-full">
        회원가입
      </button>
    </>
  );
};

export default ThirdSignupStep;
