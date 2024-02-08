import Works from "@/components/templates/Works";
import fetchWorks from "@/libs/fetchWorks";

export default async function WorksPage() {
  const works = await fetchWorks();
  return (
    <div className="container px-5 mx-auto xl:max-w-screen-lg">
      <Works works={works} />
    </div>
  );
}
