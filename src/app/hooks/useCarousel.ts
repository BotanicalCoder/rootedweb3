"use client";
import useEmblaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import { useCallback, useState, useEffect } from "react";

export function useCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      setActiveIndex((prevState) => prevState - 1);
      return emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      setActiveIndex((prevState) => prevState + 1);

      return emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    emblaRef,
    scrollPrev,
    scrollNext,
    prevBtnDisabled,
    nextBtnDisabled,
    activeIndex,
  };
}
