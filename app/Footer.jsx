import React from "react";
import { sourceCodePro } from "./styles/fonts";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className={`p-4 backdrop-blur-sm bg-gray/800 text-white w-full grid grid-cols-3 fixed bottom-0 ${sourceCodePro.className}`}
    >
      <p className={`text-center ${sourceCodePro.className}`}>
        Engineered by EverEye El 
      </p>
      <p className={`text-center ${sourceCodePro.className}`}>
        &copy; MANTRA AI Labs {year}
      </p>
      <p className={`text-center ${sourceCodePro.className}`}>
        Follow on Twitter @evereyecodes
      </p>
    </footer>
  );
};

export default Footer;
