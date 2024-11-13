"use client";

import AuthCards from "@/components/shared/AuthCards";

const ForgotPassword = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <AuthCards
      title="Forget Password"
      subtitle="Please enter your email for password reset code"
      fields={[
        {
          label: "Email",
          name: "email",
          requiredMessage: "Please input your email!",
        },
      ]}
      buttonText="Login"
      handleSubmit={handleSubmit}
    />
  );
};

export default ForgotPassword;
