import { SignupStep } from "@/app/_types/auth";
import InputField from "./InputField";
import { useFormContext } from "react-hook-form";

const FirstSignupStep = ({ handleNextStep }: SignupStep) => {
  const { trigger } = useFormContext();

  const handleClickNextButton = async () => {
    const isValid = await trigger(["id", "password", "confirm"]);
    if (isValid) {
      handleNextStep();
      console.log("성공");
    } else console.log("실패");
  };

  return (
    <>
      <InputField
        label="아이디"
        section="id"
        placeholder="6~12자/영문 소문자, 숫자 사용 가능"
      />

      <InputField
        label="비밀번호"
        section="password"
        placeholder="8~16자/영문자, 숫자 모두 혼용"
      />

      <InputField
        label="비밀번호 확인"
        section="confirm"
        placeholder="비밀번호를 다시 입력해 주세요."
      />

      <button
        type="button"
        className={` bg-gray-300 w-full`}
        onClick={handleClickNextButton}
      >
        다음으로
      </button>
    </>
  );
};

export default FirstSignupStep;
