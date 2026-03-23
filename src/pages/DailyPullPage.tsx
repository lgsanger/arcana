import { Link } from "react-router-dom";
import { figmaAssets } from "../assets/figma";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./DailyPullPage.module.css";

export function DailyPullPage() {
  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="1:5">
        <h1 className={styles.title}>Daily Pull</h1>
        <div className={styles.divider} aria-hidden>
          <img src={figmaAssets.dailyPullDivider} alt="" />
        </div>
        <div className={styles.homeRow}>
          <Link to="/" className={styles.homeBtn} aria-label="Home">
            ⌂
          </Link>
        </div>
        <p className={styles.blurb}>Daily tarot card pull from the major arcana</p>
        <span className={styles.star} aria-hidden>
          ✦
        </span>
        <section className={styles.cardWrap} aria-labelledby="daily-card-title">
          <div className={styles.cardImage}>
            <img src={figmaAssets.highPriestessCard} alt="" />
          </div>
          <div className={styles.cardBody}>
            <p id="daily-card-title" className={styles.cardName}>
              The High Priestess
            </p>
            <div className={styles.innerDivider} aria-hidden>
              <img src={figmaAssets.dailyPullCardDivider} alt="" />
            </div>
            <div className={styles.keywords}>
              <p>Intuition</p>
              <p>mystery</p>
              <p>subconscious</p>
            </div>
          </div>
        </section>
      </main>
    </PhoneShell>
  );
}
