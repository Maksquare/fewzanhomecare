import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";
const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* Slider 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px]  flex items-center gap-9 h-full">
          {/* avatar image */}
          <div className="relative  hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.png"
              fill
              className="object-contain"
              alt="Testimonial"
              quality={100}
            />
          </div>
          {/* Testimony */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p className="">
              "Excellent homecare service with genuine warmth. They make a real
              difference in our daily lives."
            </p>
            <p className="font-primary font-semibold text-primary">Abeba</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Slider 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px]  flex items-center gap-9 h-full">
          {/* avatar image */}
          <div className="relative  hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar01.png"
              fill
              className="object-contain"
              alt="Testimonial"
              quality={100}
            />
          </div>
          {/* Testimony */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p className="">
              "the caregivers were attentive and compassionate—my father feels
              truly cared for every day"
            </p>
            <p className="font-primary font-semibold text-primary">Marta</p>
          </div>
        </div>
      </SwiperSlide>
      {/* Slider 3*/}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px]  flex items-center gap-9 h-full">
          {/* avatar image */}
          <div className="relative  hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar02.png"
              fill
              className="object-contain"
              alt="Testimonial"
              quality={100}
            />
          </div>
          {/* Testimony */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p className="">
              "Professional, reliable, and kind. I can finally focus on my work
              knowing my mother is in good hands."
            </p>
            <p className="font-primary font-semibold text-primary">Yonas</p>
          </div>
        </div>
      </SwiperSlide>

      {/* Slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
