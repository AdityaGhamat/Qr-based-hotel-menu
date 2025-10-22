import { useState } from "react";
import OtpInput from "../components/OtpInput";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
const OtpVerificationPage = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleVerify = () => {
    localStorage.setItem(
      "access_token",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30"
    );
    navigate("/admin/123456");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-2xl font-bold">OTP Verification</h1>
      <p className="text-gray-500">Enter the 6-digit code sent to your email</p>

      <OtpInput value={otp} onChange={setOtp} />
      <Button onClick={handleVerify} className="w-40">
        Verify OTP
      </Button>
    </div>
  );
};

export default OtpVerificationPage;
