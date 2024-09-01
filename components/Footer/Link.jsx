import Link from "next/link";

export function Linkpages() {
  return (
    <div className="flex flex-col gap-5 p-2 max-md:mx-auto">
        <Link href="/pages/index">Home</Link>
        <Link href="/articles/blog">Blog</Link>
        <Link href="/articles/contact">Contact</Link>
    </div>
  );
}
