import { WorkType } from "@/type/WorkType";
import Image from "next/image";

export default function WorkItem({ title, description, imageSrc }: WorkType) {
  return (
    <div className="bg-white">
      <div className="">
        <Image src={imageSrc} alt="" width={500} height={250} sizes="100vw" className="w-full h-auto" />
      </div>

      <div className="p-4">
        <h2 className="text-xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
