import Image from "next/image";
import SectionTitle from "../elements/SectionTitle";

export default function About() {
  return (
    <section>
      <SectionTitle title="About" />
      <div className="px-4 mt-8 justify-center flex flex-wrap">
        <div className="relative w-52 h-52 rounded-full overflow-hidden">
          <Image
            src="/portfolio-me.jpg"
            alt="プロフィール画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4 pl-4">
          <p className="text-xl">池田 睦</p>
          <p className="mt-2">
            1997年6月23日生まれ<br />
            現在はWebエンジニアを目指して学習中です。<br />
            主にReact,Next.jsをメインとしたフロントエンドの学習に力を入れています。<br />
            料理・洋服・革製品が好き。
          </p>
        </div>
      </div>
    </section>
  );
}
