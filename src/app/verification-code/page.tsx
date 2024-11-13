"use client";

import AuthCards from "@/components/shared/AuthCards";

const VerificationCode = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <AuthCards
      title="Verification Code"
      subtitle="Verification code has been sent to your email. Enter code below."
      fields={[
        {
          label: "Verification Code",
          name: "code",
          requiredMessage: "Please enter the code!",
        },
      ]}
      buttonText="Verify email"
      handleSubmit={handleSubmit}
    />
  );
};

export default VerificationCode;
