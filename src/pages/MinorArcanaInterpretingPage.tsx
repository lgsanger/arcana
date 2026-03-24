import { Link } from "react-router-dom";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./MinorArcanaInterpretingPage.module.css";

const NUMBERED = [
  "1 — The Initial Incident",
  "2 — Initial Resistance",
  "3 — The Adventure Begins",
  "4 — Early Success or Obstacle",
  "5 — Unforeseen Complication",
  "6 — Adjustment and Response",
  "7 — Further Complication",
  "8 — Decisive Action",
  "9 — Climax and Closure",
  "10 — Resolution and Outcome",
];

const COURT = [
  {
    title: "Page",
    desc: "Student, Discovering, Messenger, Child-Like Fascination, Youth, Creativity, Devotion, Introspection/Contemplation",
  },
  {
    title: "Knight",
    desc: "Action, Doing, Carrying Out, Extreme Measures, Determination, Impulsive, Passion",
  },
  {
    title: "Queen",
    desc: "Feeling, Encouraging, Supportive, Feminine, Refinement, Intuition, Assurance",
  },
  {
    title: "King",
    desc: "Controlling, Directing, Masculine, Forceful, Authority, Sound Judgement",
  },
];

export function MinorArcanaInterpretingPage() {
  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="97:14">
        <h1 className={styles.title}>Interpreting the Minor Arcana</h1>
        <hr className={styles.divider} />
        <div className={styles.navRow}>
          <Link to="/" className={styles.navBtn} aria-label="Home">⌂</Link>
          <Link to="/minor-arcana" className={styles.navBtn} aria-label="Back">↜</Link>
        </div>

        <p className={styles.intro}>
          Within the Minor Arcana suits, there are 10 cards to represent the journey or story that
          each element (suit) goes through, plus the court cards, which represent characters (people).
        </p>

        <span className={styles.star} aria-hidden>✦</span>

        <section className={styles.section} aria-labelledby="numbered-title">
          <h2 id="numbered-title" className={styles.sectionTitle}>Numbered Cards</h2>
          <hr className={styles.sectionDivider} />
          <div className={styles.sectionContent}>
            {NUMBERED.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="court-title">
          <h2 id="court-title" className={styles.sectionTitle}>Court Cards</h2>
          <hr className={styles.sectionDivider} />
          {COURT.map((entry) => (
            <div key={entry.title} className={styles.courtEntry}>
              <p className={styles.courtTitle}>{entry.title}</p>
              <p className={styles.courtDesc}>{entry.desc}</p>
            </div>
          ))}
        </section>

        <span className={styles.bottomStar} aria-hidden>✦</span>
      </main>
    </PhoneShell>
  );
}
