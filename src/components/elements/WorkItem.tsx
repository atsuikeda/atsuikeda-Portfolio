import { WorkItemType } from "@/type/WorkType";
import Image from "next/image";
import parse from "html-react-parser";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function WorkItem({ work }: { work: WorkItemType }) {
  return (
    <div className="bg-white overflow-scroll">
      <div className="relative h-80 border-b border-gray-400">
        <Image
          src={work.image.url}
          alt={work.imgAlt}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-8">
        <div>
          {work.url ? (
            <Link href={work.url} target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80">
              <h2 className="text-2xl">{work.title}</h2>
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className="pl-2 h-5"
              />
            </Link>
          ) : (
            <h2 className="text-2xl">{work.title}</h2>
          )}
        </div>
        <div className="p-2 mt-2">{parse(work.description)}</div>
      </div>
    </div>
  );
}
