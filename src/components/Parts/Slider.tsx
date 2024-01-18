"use client";

import { WorkType } from "@/type/WorkType";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';

import WorkSlider from "./WorkSlider";

type Props = {
  works: WorkType[];
};

export default function Slider({ works }: Props) {

  return (
    <Splide
      options={{
        rewind: true,
        interval: 3000,
        type: "loop",
        autoplay: true,
        arrows: false,
        pagination: false,
      }}
    >
      {works.map((work) => (
        <SplideSlide>
          <WorkSlider key={work.id} imageSrc={work.imageSrc} description={work.description} />
        </SplideSlide>
      ))}
    </Splide>
  );
}
