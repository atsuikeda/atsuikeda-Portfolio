"use client";

import { WorkType } from "@/type/WorkType";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";

import WorkSlider from "./WorkSlider";

type Props = {
  works: WorkType[];
};

export default function Slider({ works }: Props) {
  return (
    <Splide
      hasTrack={false}
      options={{
        rewind: true,
        interval: 3000,
        type: "loop",
        autoplay: true,
      }}
    >
      <SplideTrack>
        {works.map((work) => (
          <SplideSlide>
            <WorkSlider
              key={work.id}
              imageSrc={work.imageSrc}
              description={work.description}
            />
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="hidden md:block" >
        <div className="splide__arrows" />
      </div>

      <div className="md:hidden">
        <ul className="splide__pagination" />
      </div>
    </Splide>
  );
}
