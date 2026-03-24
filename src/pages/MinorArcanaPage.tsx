import { Link, useNavigate } from "react-router-dom";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./MinorArcanaPage.module.css";

const SUITS = [
  {
    name: "Swords — Air ⌯",
    keywords: ["Mental journey", "Fears", "Limiting beliefs"],
  },
  {
    name: "Wands — Fire 🜂",
    keywords: ["Passionate journey", "Purpose", "Career"],
  },
  {
    name: "Cups — Water ◎",
    keywords: ["Emotional journey", "Love life", "Family"],
  },
  {
    name: "Pentacles — Earth ⚘",
    keywords: ["Material journey", "Finances", "Material assets"],
  },
];

export function MinorArcanaPage() {
  const navigate = useNavigate();

  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="79:18">
        <h1 className={styles.title}>Minor Arcana</h1>
        <hr className={styles.divider} />
        <div className={styles.homeRow}>
          <Link to="/" className={styles.homeBtn} aria-label="Home">⌂</Link>
        </div>

        <p className={styles.description}>
          The Minor Arcana make up a majority of your basic 78-card deck. There are 56 Minor Arcana
          cards. Within them, there are 10 cards to represent the journey or story that each element
          (suit) goes through, plus the court cards, which represent characters (people).
        </p>

        <button
          type="button"
          className={styles.interpretBtn}
          onClick={() => navigate("/minor-arcana/interpreting")}
        >
          Click here to learn about interpreting each card
        </button>

        <span className={styles.star} aria-hidden>✦</span>

        {SUITS.map((suit) => (
          <div key={suit.name} className={styles.suitCard}>
            <p className={styles.suitHeader}>{suit.name}</p>
            <hr className={styles.suitInnerDivider} />
            <div className={styles.suitKeywords}>
              {suit.keywords.map((kw) => (
                <p key={kw}>{kw}</p>
              ))}
            </div>
          </div>
        ))}

        <span className={styles.bottomStar} aria-hidden>✦</span>
      </main>
    </PhoneShell>
  );
}
