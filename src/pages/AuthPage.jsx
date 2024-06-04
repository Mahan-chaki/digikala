import { useState } from "react";
import SendOtp from "../components/SendOtp";
import CheckOtp from "../components/CheckOtp";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtp setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && <CheckOtp setStep={setStep} mobile={mobile} />}
    </div>
  );
}

export default AuthPage;
