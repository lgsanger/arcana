import { Link } from "react-router-dom";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./HomePage.module.css";

function Star() {
  return (
    <span className={styles.star} aria-hidden>
      ✦
    </span>
  );
}

export function HomePage() {
  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="1:2">
        <h1 className={styles.title}>Arcana AID</h1>
        <hr className={styles.divider} />
        <div className={styles.tagline}>
          <p>Welcome to your tarot cheat sheet</p>
          <p>SPIRITUALITY MADE EASY</p>
        </div>
        <nav className={styles.nav} aria-label="Main">
          <Link className={styles.navLink} to="/major-arcana">
            Major Arcana ☾
          </Link>
          <Star />
          <button type="button" className={`${styles.navLink} ${styles.navBtnDisabled}`} disabled>
            Minor Arcana ☽
          </button>
          <Star />
          <button type="button" className={`${styles.navLink} ${styles.navBtnDisabled}`} disabled>
            Zodiac Signs ✦
          </button>
          <Star />
          <Link className={styles.navLink} to="/daily-pull">
            Daily Pull ☼
          </Link>
        </nav>
      </main>
    </PhoneShell>
  );
}
