"use client";

import AuthCards from "@/components/shared/AuthCards";

const Home = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <AuthCards
      title="Login"
      subtitle="to get started"
      fields={[
        {
          label: "Email",
          name: "email",
          requiredMessage: "Please input your email!",
        },
        {
          label: "Password",
          name: "password",
          requiredMessage: "Please input your password!",
        },
      ]}
      buttonText="Login"
      forgotPassword
      handleSubmit={handleSubmit}
    />
  );
};

export default Home;
