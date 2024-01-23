import About from "@/components/templates/About";
import Skills from "@/components/templates/Skills";

export default function AboutPage() {
  return (
    <div className="px-5 mx-auto max-w-2xl">
      <div className="p-12 bg-white rounded">
        <About />
        <Skills />
      </div>
    </div>
  );
}
