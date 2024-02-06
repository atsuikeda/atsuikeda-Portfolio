
import WorkItem from "@/components/elements/WorkItem";
import fetchWorkItem from "@/libs/fetchWorkItem";
import { WorkItemType } from "@/type/WorkType";

export default async function WorkPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const workItems = await fetchWorkItem();
  const workItem: WorkItemType = workItems.find((workItem) => workItem.link === id)!;
  return (
    <div className="container p-10 mx-auto max-w-lg">
      <WorkItem work={workItem} />
    </div>
  );
}
