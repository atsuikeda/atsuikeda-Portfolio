import SectionTitle from "@/components/Parts/SectionTitle";
import Link from "next/link";

export default function HomeBlog() {
  return (
    <section className="mt-8">
      <div className="text-center md:flex items-baseline">
        <SectionTitle title="Blog" />
        <Link href="blog" className="text-gray-700 hover:text-gray-500 md:ml-8">
          View all →
        </Link>
      </div>

      <div className="mt-4 px-4">
        <p className="p-24 text-center text-2xl text-gray-700 ">coming soon...</p>
      </div>
    </section>
  );
}
