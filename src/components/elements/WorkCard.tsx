import { WorksType } from "@/type/WorkType";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ work }: {work: WorksType}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="border-b border-gray-400 overflow-hidden">
        <Link
          href={`works/${work.link}`}
          className="relative block h-60 transition transform md:hover:scale-110"
        >
          <Image src={work.image.url} alt={work.imgAlt} fill className="object-cover " />
        </Link>
      </div>

      <div className="p-4 ">
        <Link href={`works/${work.link}`}>
          <h3 className="text-xl hover:text-gray-500">
            {work.title}
          </h3>
        </Link>
      </div>
    </div>
  );
}
