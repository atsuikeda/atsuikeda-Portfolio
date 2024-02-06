import { WorkItemType } from "@/type/WorkType";
import Image from "next/image";
import parse from "html-react-parser";

export default function WorkItem({ work }: { work: WorkItemType }) {

  return (
    <div className="bg-white overflow-scroll">
      <div className="relative h-80">
        <Image
          src={work.image.url}
          alt={work.imgAlt}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <h2 className="text-2xl">{work.title}</h2>
        <div className="p-2 mt-2">{parse(work.description)}</div>
      </div>
    </div>
  );
}
