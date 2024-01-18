import Image from "next/image";
import SectionTitle from "../Parts/SectionTitle";

export default function About() {
  return (
    <section>
      <SectionTitle title="About" />
      <div className="px-4 mt-8 justify-center flex flex-wrap">
        <div className="relative w-52 h-52 rounded-full overflow-hidden">
          <Image
            src={"https://picsum.photos/200"}
            alt="プロフィール画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4 pl-4  text-gray-700">
          <p className="text-lg font-bold">池田 睦</p>
          <p className="mt-2">
            自己紹介
            <br />
            エンジニア目指して学習中です。
            <br />
            洋服や革製品、料理が好きです。
          </p>
        </div>
      </div>
    </section>
  );
}
