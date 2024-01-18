import { WorkType } from "@/type/WorkType";
import Image from "next/image";

export default function WorkSlider({ imageSrc, description }: WorkType) {
  return (
    <div>
      <div>{description}</div>
      <Image
        src={imageSrc}
        alt={description}
        width={500}
        height={400}
        sizes="100vw"
        className="w-full h-auto"
      />
    </div>
  );
}
