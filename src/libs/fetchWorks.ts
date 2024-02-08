import { WorksType } from "@/type/WorkType";
import { client } from "./client";

export default async function fetchWorks() {
  const data = await client.get({
    endpoint: "works",
    queries: {
      fields: "id,title,image,imgAlt,link",
    },
  });
  const WorksData: WorksType[] = data.contents;

  return WorksData;
}
