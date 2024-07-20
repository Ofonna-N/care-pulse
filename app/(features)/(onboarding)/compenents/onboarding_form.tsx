import { CpTextField } from "@/app/components/_index";
import { Button } from "@radix-ui/themes";
import React from "react";

const OnboardingForm = () => {
  return (
    <form className="pr-[100px]">
      <CpTextField
        labelProps={{
          id: "full-name",
        }}
        textInputFieldProps={{
          placeholder: "Full name",
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
