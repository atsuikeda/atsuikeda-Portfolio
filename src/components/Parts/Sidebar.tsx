import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden sm:py-24 sm:flex sm:flex-col sm:fixed sm:inset-y-0 sm:w-1/4 sm:bg-gray-200">
      <Link href="/" className="hover:text-gray-500">
        <h1 className="text-center text-4xl">Atsu Portfolio</h1>
      </Link>
      <nav className="mt-8 space-y-8 flex flex-col text-center">
        <Link href="/works" className=" hover:text-gray-500">
          Works
        </Link>
        <Link href="/about" className=" hover:text-gray-500">
          About
        </Link>
        <Link href="/blog" className=" hover:text-gray-500">
          Blog
        </Link>
      </nav>
    </div>
  );
}
