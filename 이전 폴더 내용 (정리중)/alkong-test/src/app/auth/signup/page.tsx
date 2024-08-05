"use client";

import { signIn } from "next-auth/react";
// 클라이언트일때 "next-auth/react"
// 서버일때 "@/auth"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSignupForm } from "@/app/_hooks/useSignupForm";
import FirstSignupStep from "../_components/FirstSignupStep";
import SecondSignupStep from "../_components/SecondSignupStep";
import ThirdSignupStep from "../_components/ThirdSignupStep";
import { FormProvider } from "react-hook-form";
import ProgressBar from "../_components/ProgressBar";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const formMethod = useSignupForm();
  const { handleSubmit } = formMethod;

  const onSubmit = async () => {
    console.log("success");
    let shouldRedirect = false;
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`,
        {
          method: "post",
          body: JSON.stringify({ id: "kt", password: "kt" }),
          credentials: "include",
        }
      );
      console.log(response.status);
      if (response.status === 403) {
        return { message: "user_exists" };
      }
      console.log(await response.json());
      shouldRedirect = true;
      await signIn("credentials", {
        id,
        password,
        redirect: false,
      });
    } catch (err) {
      console.error(err);
      return { message: null };
    }

    if (shouldRedirect) {
      router.replace("/home");
    }
  };
  const [currentStep, setCurrentStep] = useState<number>(0);
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <>
      <ProgressBar currentStep={currentStep} />
      <FormProvider {...formMethod}>
        <form onSubmit={handleSubmit(onSubmit)} className="flexColumn  gap-5">
          {currentStep === 0 && (
            <FirstSignupStep handleNextStep={handleNextStep} />
          )}
          {currentStep === 1 && (
            <SecondSignupStep handleNextStep={handleNextStep} />
          )}
          {currentStep === 2 && <ThirdSignupStep />}
        </form>
      </FormProvider>
    </>
  );
};

export default Signup;
