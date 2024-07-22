import OnboardingForm from "./components/onboarding_form";
import onBoardingImage from "./assets/onboarding-image.jpg";
import Image from "next/image";

export default function OnBoardingPage() {
  return (
    <div className="h-screen flex">
      <div className="h-screen w-[50%] flex items-center">
        <div className="w-[400px] mx-auto">
          <OnboardingForm />
        </div>
      </div>
      <div className="h-screen w-[50%] max-w-[50%] bg-red-800 relative flex-1">
        {/* <div className="bg-green-500 w-full h-full"> */}{" "}
        <Image
          src={onBoardingImage}
          alt={"onboarding image"}
          layout="fill"
          objectFit="cover"
        />
        {/* </div> */}
      </div>
    </div>
  );
}
