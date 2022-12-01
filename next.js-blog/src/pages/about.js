import Link from "next/link";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <style jsx>{`
        a {
          text-decoration: none;
          color: blue;
          font-size: 40px;
        }
        .active {
          color: yellow;
          background-color: blueviolet;
        }
        a:hover {
          color: aquamarine
        }
      `}</style>
    </div>
  );
}
