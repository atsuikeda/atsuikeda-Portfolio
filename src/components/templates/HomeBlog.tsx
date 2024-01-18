import SectionTitle from "@/components/Parts/SectionTitle";
import Link from "next/link";

export default function HomeBlog() {
  return (
    <section>
      <div className="flex items-baseline mt-10">
        <SectionTitle title="Blog" />
        <Link href="blog" className="ml-8 text-gray-700 hover:text-gray-500">
          View all →
        </Link>
      </div>

      <div className="my-8 px-4">
        <p className="my-14 text-center text-2xl text-gray-700 font-bold ">coming soon...</p>
      </div>
    </section>
  );
}