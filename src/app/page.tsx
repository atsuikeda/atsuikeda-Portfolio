import HomeWorks from "@/components/templates/HomeWorks";
import HomeBlog from "@/components/templates/HomeBlog";
import fetchWorkSlider from "@/libs/fetchWorkSlider";

export default async function Home() {
  const works = await fetchWorkSlider();

  return (
    <div className="container px-5 mx-auto xl:max-w-screen-lg">
      <HomeWorks works={works} />
      <HomeBlog />
    </div>
  );
}
