"use client";
import { CpTextField } from "@/app/components/_index";
import { Button } from "@radix-ui/themes";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";

const onBoardingFormSchema = z.object({
  fullName: z.string().min(5).trim(),
  email: z.string().email(),
  phoneNumber: z.string().min(10),
});

type OnBoardingFormSchema = z.infer<typeof onBoardingFormSchema>;

const OnboardingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OnBoardingFormSchema>({
    resolver: zodResolver(onBoardingFormSchema),
  });

  const onSubmitOnboardingData = (data: OnBoardingFormSchema) => {
    console.log(data);
  };
  return (
    <form
      className="pr-[100px]"
      onSubmit={handleSubmit(onSubmitOnboardingData)}
    >
      <CpTextField
        labelProps={{
          id: "full-name",
        }}
        textInputFieldProps={{
          placeholder: "Full name",
          ...register("fullName"),
        }}
        errorTextProps={{
          children: errors.fullName?.message,
        }}
      >
        Full name
      </CpTextField>
      <CpTextField
        labelProps={{
          id: "email",
        }}
        textInputFieldProps={{
          placeholder: "Email",
          type: "email",
          ...register("email"),
        }}
        errorTextProps={{
          children: errors.email?.message,
        }}
      >
        Email
      </CpTextField>
      <CpTextField
        labelProps={{
          id: "phone-number",
          className: "mb-8",
        }}
        textInputFieldProps={{
          placeholder: "+1 (555) 555-5555",
          ...register("phoneNumber"),
        }}
        errorTextProps={{
          children: errors.phoneNumber?.message,
        }}
      >
        Phone number
      </CpTextField>

      <Button size={"3"} className="w-full max-w-[350px] cursor-pointer">
        Get Started
      </Button>
    </form>
  );
};

export default OnboardingForm;
