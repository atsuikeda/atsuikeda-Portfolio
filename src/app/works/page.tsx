

import Works from "@/components/templates/Works";
import {works} from "@/type/WorkType";

// worksを取得

export default function WorksPage() {
  return (
    <div  className="container px-10 mx-auto xl:max-w-screen-lg">
     <Works works={works} />
    </div>
  );
}
