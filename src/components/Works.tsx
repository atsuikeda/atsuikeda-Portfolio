
import { WorkType } from "@/type/WorkType";
import SectionTitle from "./Parts/SectionTitle";
import WorkCard from "./Parts/WorkCard";

type Props = {
  works: WorkType[]
}

export default function Works({works}: Props) {
  return(
    <section>
        <SectionTitle title="Works" sub="制作物一覧です。" />

        <div className="px-4 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              imageSrc={work.imageSrc}
            />
          ))}
        </div>
      </section>
  )
}