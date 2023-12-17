import React from "react";
import CustomButton from "./button-container";
import Image from "next/image";

type PropType = {
  images: { src: string; alt: string; name: string; text: string }[];
  emblaRef: any;
  activeIndex: number;
};

export const ReviewCarousel = (props: PropType) => {
  const { emblaRef, images, activeIndex } = props;

  return (
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container ">
        {images.map((image, index) => {
          return (
            <div className="embla__slide embla__slide--review" key={image.src}>
              <div className="h-full flex flex-col gap-4 justify-center items-start mx-auto p-4">
                <div className="w-[24rem]  flex flex-col gap-2">
                  <p
                    className={[
                      "text-base w-full ",
                      index == activeIndex ? "text-white" : "text-[#EDFFECA3]",
                    ].join(" ")}
                  >
                    {image.text}
                  </p>
                </div>

                <div className="flex flex-row gap-2 items-center">
                  <div className="w-12 h-12 relative">
                    <Image src={image.src} alt="" fill priority={true} />
                  </div>

                  <p
                    className={[
                      index == activeIndex ? "text-white" : "text-[#EDFFECA3]",
                    ].join(" ")}
                  >
                    {image.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
