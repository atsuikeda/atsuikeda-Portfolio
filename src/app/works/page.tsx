
import Works from "@/components/Works";
import {works} from "@/type/WorkType";

// worksを取得

export default function WorksPage() {
  return (
    <>
     <Works works={works} />
    </>
  );
}
