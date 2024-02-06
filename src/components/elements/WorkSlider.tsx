import { WorkSliderType} from "@/type/WorkType";
import Image from "next/image";

export default function WorkSlider({ work }: { work: WorkSliderType}) {
  return (
    <div className="relative block h-96 ">
      <Image src={work.image.url} alt={work.imgAlt} fill className="object-cover " />
    </div>
  );
}
