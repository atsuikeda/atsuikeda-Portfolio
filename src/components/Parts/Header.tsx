import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="py-2 mx-auto bg-gray-200">
        <Link href="/" className="w-64 block mx-auto">
          <h1 className="text-center text-4xl">
            Atsu Portfolio
          </h1>
        </Link>
        <nav className="mt-2 flex justify-center">
          <Link href="/works" className="px-4 hover:text-gray-500">
            Works
          </Link>
          <Link href="/about" className="px-4 hover:text-gray-500">
            About
          </Link>
          <Link href="/blog" className="px-4 hover:text-gray-500">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

