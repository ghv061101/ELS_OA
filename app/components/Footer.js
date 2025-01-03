import React from "react";
import Image from "next/image";

export default function Footer({ ...props }) {
  return (
    <footer {...props} className={`${props.className} flex justify-center items-center p-8 sm:p-4 bg-teal-800 h-[387px
] w-[1943px
]`}>
      <div className="mx-auto mb-3.5 flex w-full max-w-[1448px] flex-col gap-[20px] ">
        {/* First Row of Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* First Card */}
          <div className="flex w-full max-w-[400px] items-start gap-[20px] rounded-[14px] bg-cyan-900 px-[30px] py-6 sm:w-full">
            <Image src="/images/phone.png" alt="Phone Number" width={60} height={60} className="object-contain" />
            <div className="flex flex-col">
              <p className="text-[20px] font-normal tracking-[0.08px] text-white">Phone Number</p>
              <p className="text-white text-[16px]">+974 3118 1843</p>
            </div>
          </div>
          {/* Second Card */}
          <div className="flex w-full max-w-[400px] items-start gap-[20px] rounded-[14px] bg-cyan-900 px-[30px] py-6 sm:w-full">
            <Image src="/images/email.png" alt="Email Address" width={60} height={60} className="object-contain" />
            <div className="flex flex-col">
              <p className="text-[20px] font-normal tracking-[0.08px] text-white">Email Address</p>
              <p className="text-white text-[16px]">Elbrithcqhr@gmail.com</p>
            </div>
          </div>
          {/* Third Card */}
          <div className="flex w-full max-w-[400px] items-start gap-[20px] rounded-[14px] bg-cyan-900 px-[30px] py-6 sm:w-full">
            <Image src="/images/locate.png" alt="Office Location" width={60} height={60} className="object-contain" />
            <div className="flex flex-col">
              <p className="text-[20px] font-normal tracking-[0.08px] text-white">Office Location</p>
              <p className="text-white text-[16px]">Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>

        {/* Second Row for Logo and Text Block */}
        <div className="flex flex-wrap px-[100px] items-center gap-6 ">
          {/* Fourth Card: Logo */}
          <div className="flex w-full max-w-[400px] items-start gap-[20px] rounded-[14px]  px-[30px] py-6 sm:left-[10px] sm:w-full">
            <div className="flex flex-col bg-white ">
              <Image src="/images/logo.png" alt="Image" width={312} height={60} className="h-[80px] left-[16%] object-contain" />
            </div>
          </div>
          <div className="flex w-full max-w-[400px] items-start gap-[20px] rounded-[14px]  px-[30px] py-6 sm:w-screen">
            <div className="flex flex-col ">
              <p className="text-[16px] tracking-[0.9px] text-white  font-normal">
                Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins.
              </p>
            </div>
          </div>
        </div>

        {/* Final Row for Address */}
        <div className="flex gap-[10px] px-[100px]">
          <Image src="/images/locq.png" alt="Location" width={16} height={16} className="object-contain" />
          <p className="text-white text-[16px] font-normal tracking-[0.px]">
            Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
          </p>
        </div>
      </div>
    </footer>
  );
}
