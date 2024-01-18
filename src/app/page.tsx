import HomeWorks from "@/components/templates/HomeWorks";
import HomeBlog from "@/components/templates/HomeBlog";

// ここでworks sliderを取得して、子へprops

export default function Home() {
  return (
    <div className="px-10 mx-auto max-w-3xl">
      <HomeWorks />
      <HomeBlog />
    </div>
  );
}
