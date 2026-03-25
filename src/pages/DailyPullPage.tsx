import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PhoneShell } from "../components/PhoneShell";
import { getDailyCard } from "../utils/getDailyCard";
import { markDailyPullSeen } from "../utils/dailyPullTracker";
import styles from "./DailyPullPage.module.css";

const card = getDailyCard();

export function DailyPullPage() {
  useEffect(() => {
    markDailyPullSeen();
  }, []);

  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="1:5">
        <h1 className={styles.title}>Daily Pull</h1>
        <hr className={styles.divider} />
        <div className={styles.homeRow}>
          <Link to="/" className={styles.homeBtn} aria-label="Home">⌂</Link>
        </div>
        <p className={styles.blurb}>Daily tarot card pull from the major arcana</p>
        <span className={styles.star} aria-hidden>✦</span>

        <section className={styles.cardWrap} aria-labelledby="daily-card-title">
          <img
            className={styles.cardImage}
            src={card.image}
            alt={card.name}
          />
          <p id="daily-card-title" className={styles.cardName}>{card.name}</p>
          <hr className={styles.innerDivider} />
          <div className={styles.keywords}>
            {card.keywords.map((kw) => (
              <p key={kw}>{kw}</p>
            ))}
          </div>
        </section>
      </main>
    </PhoneShell>
  );
}
