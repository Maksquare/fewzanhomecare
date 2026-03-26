"use client";
import { useRef } from "react";
import { inView, useInView } from "framer-motion";
import CountUp from "react-countup";

import React, { use } from "react";

const statsData = [
  {
    endCountNum: 99,
    endCountText: "%",
    text: "Client Satisfaction Rate",
  },
  {
    endCountNum: 12,
    endCountText: "k",
    text: "Care Plans Delivered",
  },
  {
    endCountNum: 1300,
    endCountText: "+",
    text: "Families Served",
  },
  {
    endCountNum: 5,
    endCountText: "+",
    text: "Years of Compassionate Care",
  },
];

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { treshold: 0.2 });
  return (
    <div ref={ref} className="mt-16 xl:mt-32 bg-primary py-10 w-full">
      <div className="container mx-auto h-full">
        <div className="text-white flex flex-col items-center
        justify-between  xl:flex-row h-full gap-12 text-center xl:text-left
        ">
          {statsData.map((statData, index) => {
            return <div className="w-full" key={index}>
              <div className="text-5xl font-semibold">
                {inView && (<CountUp
                  start={0}
                  end={statData.endCountNum}
                  delay={0.5}
                  duration={3}
                />)}
                <span>{statData.endCountText}</span>
              </div>
              <p>{statData.text}</p>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
