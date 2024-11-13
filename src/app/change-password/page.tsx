"use client";

import AuthCards from "@/components/shared/AuthCards";

const ChangePassword = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <AuthCards
      title="Change Password"
      subtitle="Enter password"
      fields={[
        {
          label: "New password",
          name: "password",
          requiredMessage: "Please input the new password!",
        },
        {
          label: "Confirm password",
          name: "new-password",
          requiredMessage: "Please confirm new password!",
        },
      ]}
      buttonText="Change password"
      handleSubmit={handleSubmit}
    />
  );
};

export default ChangePassword;
