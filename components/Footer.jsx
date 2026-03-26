import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
  RiMapPinFill,
} from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)} // Direction usually lowercase "up"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className=" mt-16 xl:mt-32 bg-primary"
    >
      <div className="container mx-auto">
        <div
          className="py-16 xl:py-[100px] flex flex-col xl:flex-row
        gap-[60px] xl:gap-[30px]
        "
        >
          {/* logo and text */}
          <div className="flex-1">
            <Link href="/" className="flex mb-6">
              <Image src="/assets/logo.svg" width={230} height={48} alt="" />
            </Link>
            <p className="text-border max-w-[270px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              saepe non pariatur quibusdam ex eveniet.
            </p>
          </div>
          {/* contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contact</h4>
            <ul className=" flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPinFill className="text-accent text-xl " />
                <p>Kolfe Keranyo, Ayer Tena, ETHIOPIA</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="text-accent text-xl " />
                <p>+251 (912) 345 678</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="text-accent text-xl " />
                <p>fewzanhomecare@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Newsletter</h4>
            <p className="mb-9">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis totam et odio qui, autem aperiam quod molestiae modi
              sequi dignissimos!
            </p>
            {/* input */}
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Enter Your email"
                className="
              bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex
              items-center
              "
              />
              <button
                className="bg-accent w-12 h-[12] absolute
              
              right-2 top-2 bottom-2 text-primary texl-xl flex items-center justify-center

              "
              >
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div
        className="container mx-auto xl:px-0 py-12 border-t border-border/10
      
      flex flex-col gap-6 xl:flex-row items-center justify-between
      "
      >
        <p className="text-border">
          Copyright &copy; 2026 FewzanHomeCare. All rights reserved
        </p>
        <Socials
          containerStyles={"flex gap-6 text-white"}
          iconStyles="
        
        hover:text-accent transition-all        "
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
