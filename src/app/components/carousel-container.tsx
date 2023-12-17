"use client";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useCarousel } from "../hooks/useCarousel";
import { Carousel } from "./carousel-item";

function CarouselContainer() {
  const { emblaRef, scrollPrev, scrollNext, prevBtnDisabled, nextBtnDisabled } =
    useCarousel();

  return (
    <section className="w-full flex flex-col mb-[2rem] md:mt-[2rem] lg:mt-[15rem] z-10 embla">
      <div className="flex flex-col lg:flex-row justify-between items-center  ">
        <div className="flex flex-col w-full gap-2 md:w-[30rem] ">
          <h3 className="text-[#EDFFEC] text-3xl md:text-4xl font-bold ">
            Unlock New Realms
          </h3>
          <p className=" text-base md:text-xl">
            Discover the limitless possibilities of Web3 as we journey beyond
            the conventional web. Explore decentralized finance (DeFi),
            blockchain gaming, NFTs, and more, unlocking new realms of
            innovation and opportunity
          </p>
        </div>
        <div className="my-[5rem] md:my-0 flex gap-12">
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

      {/* carousel */}
      <Carousel
        emblaRef={emblaRef}
        images={[
          {
            src: "/images/vr-headset.png",
            alt: "",
            text: "Explore immersive worlds, connect with a global community, and experience a decentralized metaverse. ",
          },
          {
            src: "/images/coin-pot.png",
            alt: "",
            text: "Transform your financial landscape by accessing decentralized finance (DeFi) platforms",
          },
          {
            src: "/images/astronaut.png",
            alt: "",
            text: "Engage with decentralized space projects, discover NFT and be part of an intergalactic community.",
          },
        ]}
      />
    </section>
  );
}

export default CarouselContainer;
