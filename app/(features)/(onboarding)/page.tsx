import OnboardingForm from "./compenents/onboarding_form";

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
          <OnboardingForm />
        </div>
      </div>
      <div className="h-screen w-[50%] bg-red-800"></div>
    </div>
  );
}
