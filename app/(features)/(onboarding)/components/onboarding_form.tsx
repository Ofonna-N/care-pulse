"use client";
import { CPErrorText, CpTextField } from "@/app/components/_index";
import { Button, TextField } from "@radix-ui/themes";
import "react-phone-number-input/style.css";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

const onBoardingFormSchema = z.object({
  fullName: z.string().min(5).trim(),
  email: z.string().email(),
  phoneNumber: z.string().min(10).trim(),
});

type OnBoardingFormSchema = z.infer<typeof onBoardingFormSchema>;

const OnboardingForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<OnBoardingFormSchema>({
    resolver: zodResolver(onBoardingFormSchema),
  });

  const onSubmitOnboardingData = (data: OnBoardingFormSchema) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitOnboardingData)} className="w-[350px]">
      <section className="mb-[50px]">
        <h1 className="text-[34px] mb-[80px]">CarePulse</h1>
        <h3 className="text-[35px] py-4">Hi there, ...</h3>
        <p className="text-[18px]">Get started with appointments.</p>
      </section>
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
      <Controller
        control={control}
        name={"phoneNumber"}
        render={function ({
          field,
          fieldState: { error },
        }): React.ReactElement {
          return (
            <div className="mb-8 max-w-[350px]">
              <PhoneInput
                inputComponent={TextField.Root}
                size={"3"}
                placeholder="Enter phone number"
                defaultCountry="US"
                value={field.value}
                onChange={(value) => field.onChange(value)}
                countryCallingCodeEditable
                international
              />
              <CPErrorText errorMesssage={error?.message} />
            </div>
          );
        }}
      />

      <Button size={"3"} className="w-full max-w-[350px] cursor-pointer">
        Get Started
      </Button>
    </form>
  );
};

export default OnboardingForm;
