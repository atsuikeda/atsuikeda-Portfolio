import Modal from "@/components/elements/Modal";
import WorkItem from "@/components/elements/WorkItem";
import fetchWorkItem from "@/libs/fetchWorkItem";
import { WorkItemType } from "@/type/WorkType";

export default async function WorkModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const workItems = await fetchWorkItem();
  const workItem: WorkItemType = workItems.find(
    (workItem) => workItem.link === id
  )!;
  return (
    <Modal>
      <WorkItem work={workItem} />
    </Modal>
  );
}
