"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";

import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const links = [
  {
    name: "home",
    link: "home",
  },
  {
    name: "about",
    link: "about",
  },
  {
    name: "services",
    link: "services",
  },
  {
    name: "projects",
    link: "projects",
  },
  {
    name: "contact",
    link: "contact",
  },
];
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center 
    justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill className="text-2xl text-white" />
      </SheetTrigger>
      <SheetContent className="bg-primary border-none text-white">
        <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Navigation Menu
            </SheetDescription>
          </SheetHeader>
          <ul
            className="w-full flex 
          flex-col gap-10 
          justify-center text-center"
          >
            {links.map((link, index) => {
              return (
                <li
                  key={index}
                  className="text-white uppercase font-primary
                font-medium
                tracking-[1.2px]

                
                
                
                "
                >
                  <ScrollLink
                    to={link.link}
                    smooth
                    spy
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={() => setIsOpen(false)} //close when links are clicked
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/* Socials */}
          <Socials containerStyles="text-white text-xl flex gap-6" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
