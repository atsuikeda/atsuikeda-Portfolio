import HomeWorks from "@/components/Home/HomeWorks";
import HomeBlog from "@/components/Home/HomeBlog";

// ここでworks sliderを取得して、子へprops

export default function Home() {
  return (
    <>
      <HomeWorks />
      <HomeBlog />
    </>
  );
}
