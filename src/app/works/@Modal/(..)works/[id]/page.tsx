import Modal from "@/components/Parts/Modal";
import WorkItem from "@/components/Parts/WorkItem";
import { WorkType, works } from "@/type/WorkType";

export default function WorkModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const data: WorkType = works.find((work) => work.id === id)!;

  return (
    <Modal>
      <WorkItem title={data.title} description={data.description} imageSrc={data.imageSrc} />
    </Modal>
  );
}
