"use client";

import Header from "@/components/Header";
import SuppliersName from "@/components/SuppliersName";


const Home = () => {
  // const handleSubmit = (values) => {
  //   console.log("Form Values:", values);
  // };

  return (
    <div>
       <Header/>
   
<SuppliersName/>
       
    </div>
 
    
    
    // <AuthCards
    //   title="Login"
    //   subtitle="to get started"
    //   fields={[
    //     {
    //       label: "Email",
    //       name: "email",
    //       requiredMessage: "Please input your email!",
    //     },
    //     {
    //       label: "Password",
    //       name: "password",
    //       requiredMessage: "Please input your password!",
    //     },
    //   ]}
    //   buttonText="Login"
    //   forgotPassword
    //   handleSubmit={handleSubmit}
    // />
    
  );
};

export default Home;