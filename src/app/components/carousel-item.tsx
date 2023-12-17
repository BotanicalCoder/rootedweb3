import React from "react";
import CustomButton from "./button-container";
import Image from "next/image";

type PropType = {
  images: { src: string; alt: string; text: string }[];
  emblaRef: any;
};

export const Carousel = (props: PropType) => {
  const { emblaRef, images } = props;
  // const [emblaRef, emblaApi] = useEmblaCarousel();

  return (
    <div className="embla__viewport" ref={emblaRef}>
      <div className="embla__container ">
        {images.map((image) => {
          return (
            <div className="embla__slide " key={image.src}>
              <div className="h-full flex flex-col gap-4 justify-center items-center mx-auto p-4">
                <div className="w-[20rem] h-[12rem] my-[1rem] relative">
                  {/* <img
                  className="w-[20rem] h-[12rem] my-[1rem] "
                  src={image.src}
                /> */}

                  <Image src={image.src} alt="" fill priority={true} />
                </div>

                <div className="w-[20rem] flex flex-col gap-2">
                  <p className="text-base w-[15rem] ">{image.text}</p>
                  <div className="w-fit">
                    <CustomButton showLeftIcon={true} text="Learn More" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
