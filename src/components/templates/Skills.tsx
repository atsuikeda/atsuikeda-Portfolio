import SectionTitle from "../Parts/SectionTitle";

export default function Skills() {
  return (
    <section>
    <div className="mt-10">
      <SectionTitle title="Skills" sub="現在学習中の技術です。" />
      <div className="mt-6 px-8 text-gray-700 space-y-2">
        <h3 className="text-lg font-bold">言語</h3>
        <p >HTML, CSS, JavaScript, TypeScript</p>
        <h3 className="mt-2 text-lg font-bold">フレームワーク&ライブラリ</h3>
        <p>React, Next.js, TailwindCSS</p>
        <h3 className="mt-2 text-lg font-bold">ツール</h3>
        <p>Git</p>
      </div>
    </div>
  </section>
  )
}