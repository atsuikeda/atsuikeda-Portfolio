"use client";

import { WorkType } from "@/type/WorkType";
import { Splide, SplideSlide } from "splide-nextjs/react-splide";
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
        width: window.innerWidth / 2,
        perPage: 2,
        type: "loop",
        autoplay: true,
        perMove: 1,
      }}
    >
      {works.map((work) => (
        <SplideSlide>
          <WorkSlider key={work.id} imageSrc={work.imageSrc}  />
        </SplideSlide>
      ))}
    </Splide>
  );
}
