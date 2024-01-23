
import { WorkType } from "@/type/WorkType";
import SectionTitle from "../Parts/SectionTitle";
import WorkCard from "../Parts/WorkCard";

type Props = {
  works: WorkType[]
}

export default function Works({works}: Props) {
  return(
    <section>
        <SectionTitle title="Works" sub="制作物一覧です。" />

        <div className="px-8 mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              id={work.id}
              title={work.title}
              description={work.description}
              imageSrc={work.imageSrc}
            />
          ))}
        </div>
      </section>
  )
}