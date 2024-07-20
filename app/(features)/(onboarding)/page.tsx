import { CpTextField } from "@/app/components/_index";
import { Button } from "@radix-ui/themes";

export default function OnBoardingPage() {
  return (
    <div className="h-screen flex">
      <div className="h-screen w-[50%]  px-[110px] pt-[60px]">
        <h1 className="text-[24px] mb-[100px]">CarePulse</h1>
        <div>
          <div className="mb-[50px]">
            <h3 className="text-[35px] py-4">Hi there, ...</h3>
            <p className="text-[18px]">Get started with appointments.</p>
          </div>
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
        </div>
      </div>
      <div className="h-screen w-[50%] bg-red-800"></div>
    </div>
  );
}
