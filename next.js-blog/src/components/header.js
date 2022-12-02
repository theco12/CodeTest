import Link from "next/link";
import styles from "../styles/header.module.css";
import Image from "next/image";
import logo from "../image/logo.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image src={logo} width={170} height={63} />
            </a>
          </Link>
        </div>
        <div className={styles.Gnb}>
          <Link href="/about">
            <a className={styles.menu}>서비스소개</a>
          </Link>
          <Link href="/about">
            <a className={styles.menu}>정보 </a>
          </Link>
          <Link href="/comm/nextfile">
            <a className={styles.menu}>NEXT.js</a>
          </Link>
          <Link href="/comm/notice">
            <a className={styles.menu}>설명</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
