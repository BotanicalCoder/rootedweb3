"use client";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useCarousel } from "../hooks/useCarousel";
import CustomButton from "./button-container";
import { ReviewCarousel } from "./review-carousel";
import { useEffect } from "react";

function PartnerReviews() {
  const { emblaRef, scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled, activeIndex } =
    useCarousel();

    // useEffect()
  return (
    <section className="container z-10 flex flex-col lg:flex-row ">
      <div className="flex flex-col w-full lg:w-[30rem] items-center lg:items-start justify-center gap-4">
        <h3 className="text-[#EDFFEC] text-2xl md:text-4xl  xl:text-5xl font-bold">
          What our Partners say:
        </h3>
        <div className="w-fit !font-bold">
          <CustomButton showLeftIcon={true} text="Become a Partner" />
        </div>

        <div className="mb-[1rem] md:my-0 flex gap-12">
          <button
            onClick={scrollPrev}
            className="embla__prev bg-[#031C15] rounded-full w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer"
          >
            <GoArrowLeft
              style={{
                fontSize: "2.5rem",
                fontWeight: "black",
                color: prevBtnDisabled ? "#6E736E" : "white",
              }}
            />
          </button>
          <button
            onClick={scrollNext}
            className="embla__prev bg-[#031C15] rounded-full w-[4rem] h-[4rem] flex justify-center items-center cursor-pointer"
          >
            <GoArrowRight
              style={{
                fontSize: "2.5rem",
                fontWeight: "black",
                color: nextBtnDisabled ? "#6E736E" : "white",
              }}
            />
          </button>
        </div>
      </div>
      {/* carousel container */}
      <ReviewCarousel
        emblaRef={emblaRef}
        images={[
          {
            src: "/images/review-1.png",
            alt: "",
            name: "Dr Mac Mark",
            text: "Decentralized technologies have the potential to reshape industries and empower individuals. Through Web3, I've experienced a new level of financial freedom and ownership. It's incredible to be part of a community that believes in the power of decentralization.",
          },
          {
            src: "/images/review-2.png",
            alt: "",
            name: "Dr Mac Mark",
            text: "Decentralized technologies have the potential to reshape industries and empower individuals. Through Web3, I've experienced a new level of financial freedom and ownership. It's incredible to be part of a community that believes in the power of decentralization.",
          },
        ]}
        activeIndex={activeIndex}
      />
    </section>
  );
}

export default PartnerReviews;
