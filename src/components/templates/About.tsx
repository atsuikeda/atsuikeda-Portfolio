import Image from "next/image";
import SectionTitle from "../elements/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function About() {
  return (
    <section>
      <SectionTitle title="About" />
      <div className="px-4 mt-8 justify-center flex flex-wrap">
        <div className="relative w-52 h-52 rounded-full overflow-hidden">
          <Image
            src="/profile-image.jpg"
            alt="プロフィール画像"
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-4 pl-4">
          <div className="flex items-end">
            <p className="text-xl">池田 睦</p>
            <Link
              href="https://github.com/atsuikeda"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80"
            >
              <FontAwesomeIcon icon={faGithub} className="pl-3 h-5" />
            </Link>
          </div>
          <p className="mt-2">
            1997年6月23日生まれ
            <br />
            現在はWebエンジニアを目指して学習中です。
            <br />
            主にReact,Next.jsをメインとしたフロントエンドの学習に力を入れています。
            <br />
            料理・洋服・革製品が好き。
          </p>
        </div>
      </div>
    </section>
  );
}
