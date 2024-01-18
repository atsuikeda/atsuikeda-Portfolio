import SectionTitle from "@/components/Parts/SectionTitle";
import Link from "next/link";
import Slider from "../Parts/Slider";
import { works } from "@/type/WorkType";

export default function HomeWorks() {
  return (
    <section>
      <div className="flex items-baseline ">
        <SectionTitle title="Works" />
        <Link href="works" className="ml-8 text-gray-700 hover:text-gray-500">
          View all →
        </Link>
      </div>

      <div className="px-4 mt-8">
        <Slider works={works} />
      </div>
    </section>
  );
}
