import { WorkType } from "@/type/WorkType";
import Image from "next/image";

export default function WorkSlider({imageSrc}: WorkType) {
  return (
    <>
    <div>slider sample</div>
    <Image src={imageSrc} alt="slider image" width={300} height={300} />
    </>
  )
}