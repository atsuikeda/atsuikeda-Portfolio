import { WorkType } from "@/type/WorkType";
import Image from "next/image";

export default function WorkSlider({ imageSrc, description }: WorkType) {
  return (

    <div className="relative block h-96 ">
      <Image src={imageSrc} alt={description} fill className="object-cover " />
    </div>
  );
}
