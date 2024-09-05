import React from "react";
import LogoIcon from "@/assets/logo2.png";
import Image from "next/image";

export const Logo = () => {
  return <Image src={LogoIcon} alt="Logo" width={190} height={40} />;
};
