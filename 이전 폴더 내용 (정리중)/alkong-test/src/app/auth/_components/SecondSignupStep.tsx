import { SignupStep } from "@/app/_types/auth";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const SecondSignupStep = ({ handleNextStep }: SignupStep) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  const handleClickNextButton = async () => {
    const isValid = await trigger([
      "name",
      "phoneNumber",
      "birthdate",
      "gender",
    ]);
    if (isValid) {
      handleNextStep();
      console.log("성공");
    } else console.log("실패");
  };

  return (
    <>
      <InputField
        label="이름"
        section="name"
        placeholder="성명을 입력해주세요."
      />

      <InputField
        label="전화번호"
        section="phoneNumber"
        placeholder="전화번호를 입력해주세요."
      />

      <InputField
        label="생년월일"
        section="birthdate"
        placeholder="생년월일 8자리를 입력해주세요."
      />

      <div>
        <p className="font-bold">성별</p>
        <div className="flexBetween gap-2 text-center">
          <div className="flex-1">
            <input
              className="hidden peer"
              type="radio"
              value="male"
              id="male"
              {...register("gender")}
            />
            <label
              htmlFor="male"
              className="block w-full peer-checked:bg-gray-300 py-3"
            >
              남성
            </label>
          </div>
          <div className="flex-1">
            <input
              className="hidden peer"
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label
              htmlFor="female"
              className="block w-full peer-checked:bg-gray-300 py-3 "
            >
              여성
            </label>
          </div>
        </div>
        {errors && errors.gender && <p>{errors.gender.message?.toString()}</p>}
      </div>

      <button
        type="button"
        className={`bg-gray-300 w-full`}
        onClick={handleClickNextButton}
      >
        다음으로
      </button>
    </>
  );
};

export default SecondSignupStep;
