import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode?assets.logo_dark: assets.logo} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode?assets.mail_icon_dark:assets.mail_icon} alt="" className="w-6" />
          abhinavdevofficial@gmail.com
        </div>
      </div>

      <div className="text-center text-sm  lg:text-[18px] sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
<p>© {new Date().getFullYear()} Abhinav A. All rights reserved.</p>
        {/* <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/AbhinavWebDev" target="_blank"   rel="noopener noreferrer"
>
              GitHub
            </a>
          </li>
          <li>
            <a
  href="https://www.linkedin.com/in/abhinav-a-23363024b"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

          </li>
          <li>
            <a href="" target="_blank">
              Email
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Footer;
