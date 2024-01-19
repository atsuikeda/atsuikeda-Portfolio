import SectionTitle from "@/components/Parts/SectionTitle";
import Link from "next/link";
import Slider from "../Parts/Slider";
import { works } from "@/type/WorkType";

export default function HomeWorks() {
  return (
    <section>
      <div className="text-center md:flex items-baseline">
        <SectionTitle title="Works" />
        <Link href="works" className="hover:text-gray-500 md:ml-8">
          View all →
        </Link>
      </div>

      <div className="mt-4">
        <Slider works={works} />
      </div>
    </section>
  );
}
