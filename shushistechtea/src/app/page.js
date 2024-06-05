import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Shushi's Tech Tea</h1>
        <p>
          Welcome to Shushi's Tech Tea blog.
        </p>
      </div>

      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/design">Design</Link>
          </li>
          <li>
            <Link href="/ethic">Ethics</Link>
          </li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
