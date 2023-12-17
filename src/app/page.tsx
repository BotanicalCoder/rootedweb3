import Image from "next/image";
import CarouselContainer from "./components/carousel-container";
import PartnerReviews from "./components/partner-reviews";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col items-center justify-between p-2 md:px-16 md:py-8 overflow-hidden">
      {/* header */}
      <section className="container relative mt-8 flex flex-col justify-center items-center bg-[#18221f] ">
        <div className="homeHeader "></div>
        <div className="noise"></div>

        <div className="absolute top-[20%] md:top-[15%] xl:top-[4rem] lg:top-10 z-10 py-4">
          <div className="relative flex flex-col gap-8 justify-center items-center w-full mx-auto text-center md:pt-[10rem]  lg:pt-14 xl:pt-10 h-full">
            <h1 className="text-white text-3xl md:text-5xl  xl:text-6xl font-bold md:w-[70%] lg:w-[60%]">
              Your Gateway to a{" "}
              <span className="text-rootedpurple">Decentralized </span> Future
            </h1>
            <p className="text-[#EDFFEC] text-sm text-center md:w-[30rem] lg:w-[46rem]">
              Welcome to the world of Web3, where the internet becomes truly
              yours. Explore the limitless possibilities, revolutionary
              technologies, and exciting opportunities that await you in the
              decentralized realm.
            </p>
          </div>
        </div>
        <div className="absolute top-[22rem] md:top-[38rem] lg:top-[18rem] xl:top-[20rem]  z-10 w-screen h-[15rem] md:h-[30rem] 2xl:h-[40rem] 2xl:w-[40vw] mx-auto ">
          <Image src="/background-gradient.png" alt="" fill priority={true} />
        </div>
      </section>

      {/* carousel container */}
      <CarouselContainer />

      {/* 3d image section */}
      <section className="container z-10 flex flex-col gap-4 md:flex-row items-center justify-between relative mb-14">
        <div className="flex flex-col gap-[1.5rem] md:gap-[0.5rem] lg:gap-[1.5rem] xl:justify-between  lg:w-[30rem] xl:w-[32rem] ">
          <div className="w-full md:w-[80%] lg:w-[80%] xl:w-[90%] flex gap-4 justify-between items-center ">
            <h3 className="text-[#EDFFEC] text-2xl md:text-4xl  xl:text-5xl font-bold ">
              Unlock everywhere. <br /> Every moment.
            </h3>

            <div className="w-[5rem] h-[5rem] relative">
              <Image src="/images/Cross.png" alt="" fill priority={true} />
            </div>
          </div>

          <p className="text-base text-[#EDFFECA3]">
            Convert your narratives into concise, decentralized content
            optimized for the Web3 world. Easily explore overviews and delve
            deeper into the details whenever desired.
          </p>
        </div>

        <div className="block w-full lg:w-[20rem] h-[20rem]  relative">
          <Image src="/images/unlock.png" alt="" fill priority={true} />
        </div>
      </section>

      {/* partner reviews  */}
      <PartnerReviews />
    </main>
  );
}
