import { WorkType } from "@/type/WorkType";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({ id, title, imageSrc }: WorkType) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="border-b border-gray-400 overflow-hidden">
        <Link
          href={`works/${id}`}
          className="relative block h-60 transition transform md:hover:scale-110"
        >
          <Image src={imageSrc} alt="" fill className="object-cover " />
        </Link>
      </div>

      <div className="p-4 ">
        <Link href={`works/${id}`}>
          <h3 className="text-lg text-gray-800 font-bold hover:text-gray-500">
            {title}
          </h3>
        </Link>
      </div>
    </div>
  );
}
