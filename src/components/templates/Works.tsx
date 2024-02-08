
import { WorksType } from "@/type/WorkType";
import SectionTitle from "../elements/SectionTitle";
import WorkCard from "../elements/WorkCard";

export default function Works({works}:{ works: WorksType[]}) {
  return(
    <section>
        <SectionTitle title="Works" sub="制作物一覧です。" />

        <div className="px-8 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              work={work}
            />
          ))}
        </div>
      </section>
  )
}