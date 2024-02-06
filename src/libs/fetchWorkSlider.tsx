import { WorkSliderType } from "@/type/WorkType";
import { client } from "./client";

export default async function fetchWorkSlider() {
  const data = await client.get({
    endpoint: "works",
    queries: {
      fields: "id,image,imgAlt",
    },
  });
  const WorkSliderData: WorkSliderType[] = data.contents;

  return WorkSliderData;
}
