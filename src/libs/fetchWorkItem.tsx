import { WorkItemType } from "@/type/WorkType";
import { client } from "./client";

export default async function fetchWorkItem() {
  const data = await client.get({
    endpoint: "works",
    queries: {
      fields: "id,title,description,image,imgAlt,link",
    },
  });
  const WorksData: WorkItemType[] = data.contents;

  return WorksData;
}
