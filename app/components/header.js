import React from "react";
import Image from "next/image";
export default function Header({ ...props }) {
    return (
        <header {...props} className={`${props.className} self-stretch ml-4 mr-[62px] md:mx-0 bg-white-700`}>
            <div className="flex w-full flex-col">
                <div className="relative z-[1] flex self-stretch bg-white-700 px-14 md:px-5 sm:px-4">
                    <div className="container-xs mt-2.5 flex pl-[78px] pr-14 lg:pl-8 md:px-5 sm:px-4">
                    <Image src="/images/logo.png" alt="Image" width={312} height={60} className="h-[60px] left-[16%] object-contain" />
                    </div>
                </div>
            </div>

        </header>
    );
}