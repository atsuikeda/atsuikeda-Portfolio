import HomeWorks from "@/components/templates/HomeWorks";
import HomeBlog from "@/components/templates/HomeBlog";

// ここでworks sliderを取得して、子へprops

export default function Home() {
  return (
    <div className="container px-5 mx-auto xl:max-w-screen-lg">
      <HomeWorks />
      <HomeBlog />
    </div>
  );
}
