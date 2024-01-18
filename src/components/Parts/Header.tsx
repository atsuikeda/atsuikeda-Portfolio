import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="py-8 mx-auto">
        <Link href="/" className="w-64 block mx-auto">
          <h1 className="text-center text-4xl font-bold text-gray-800">
            Atsu Portfolio
          </h1>
        </Link>
        <nav className="flex justify-center text-gray-700">
          <Link href="/works" className="p-4  hover:text-gray-500">
            Works
          </Link>
          <Link href="/about" className="p-4 hover:text-gray-500">
            About
          </Link>
          <Link href="/blog" className="p-4 hover:text-gray-500">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

