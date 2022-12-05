import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.inner}>
          <h3>(주) 야타브엔터</h3>
          <ul>
            <li>대표 | 이성찬, 조은상</li>
            <li>
              주소 | 서울특별시 성동구 뚝섬로17가길 48 성수에이원 지식산업센터
              301호
            </li>
            <li>사업자등록번호 | 750-88-01121</li>
          </ul>
          <div>Copyright © YATAVENT Corp. All rights reserved.</div>
        </div>
      </div>
    </div>
  );
}
