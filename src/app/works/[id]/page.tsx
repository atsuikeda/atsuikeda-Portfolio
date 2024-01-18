
import WorkItem from "@/components/Parts/WorkItem";
import { WorkType, works } from "@/type/WorkType";

export default function WorkPage({
  params: { id },
}: {
  params: { id: string };
}) {

  const data: WorkType = works.find((work) => work.id === id)!;
  
  return (
    <div className="container p-10 mx-auto max-w-lg">
      <WorkItem data={data} />
    </div>
  );
}
