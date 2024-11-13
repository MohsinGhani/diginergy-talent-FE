import Image from "next/image";
import React from "react";

import CommonTypography from "../shared/Typography";

const Header = () => {
  return (
    <div className="w-full py-4 px-8 flex justify-between items-center border border-[#1414141A] border-opacity-10">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/diginergy-logo.png"
          alt="logo"
          width={30}
          height={30}
        />
        <CommonTypography type="title" level={3} classes="!font-normal">
          DigiNergy
        </CommonTypography>
      </div>
    </div>
  );
};

export default Header;
