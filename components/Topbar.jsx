// 'use client';
import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import React from "react";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#018475] to-[#00b7a9] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        {/* Phone, mail and Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">
            
            {/* phone */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                {" "}
                <RiPhoneFill />
              </div>
               <p className="font-medium text-white flex items-center">+2519 1234 5678</p>
            
            </div>
            {/* Mail */}
             <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary text-white flex items-center justify-center">
                {" "}
                <RiMailFill />
              </div>
              <p className="font-medium text-white flex items-center">fewzanhomecare@gmail.com</p>
            
            </div>
          </div>
          {/* Socials */}
          <Socials containerStyles="flex items-center gap-8 mx-auto  xl:mx-0" iconStyles="text-primary text-white"/>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
