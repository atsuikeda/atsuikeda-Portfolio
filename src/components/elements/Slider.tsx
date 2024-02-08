"use client";
import { WorkSliderType } from "@/type/WorkType";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import WorkSlider from "./WorkSlider";

export default function Slider({ works }: { works: WorkSliderType[] }) {
  return (
    <Splide
      hasTrack={false}
      options={{
        rewind: true,
        interval: 3000,
        type: "loop",
        autoplay: true,
      }}
      className="md:px-14"
    >
      <SplideTrack>
        {works.map((work) => (
          <SplideSlide key={work.id}>
            <WorkSlider
              work={work}
            />
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="hidden md:block">
        <div className="splide__arrows" />
      </div>

      <div className="md:hidden">
        <ul className="splide__pagination" />
      </div>
    </Splide>
  );
}
