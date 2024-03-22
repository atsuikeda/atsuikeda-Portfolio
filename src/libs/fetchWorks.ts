import { WorksType } from "@/type/WorkType";
import { client } from "./client";

export default async function fetchWorks() {
  const data = await client.get({
    endpoint: "works",
    queries: {
      fields: "id,title,image,imgAlt,link",
    },
    customRequestInit: {
      cache: "no-store",
    },
  });
  const WorksData: WorksType[] = data.contents;

  return WorksData;
}
