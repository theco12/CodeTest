import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Link href="/about">
        <a>어바웃페이지</a>
      </Link>
      <Link href="/about">
        <a>어바웃페이지</a>
      </Link>
      <Link href="/about">
        <a>어바웃페이지</a>
      </Link>
    </div>
  );
}
