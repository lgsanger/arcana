import { Link, Navigate, useParams } from "react-router-dom";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./CardDetailPage.module.css";

interface CardData {
  number: string;
  name: string;
  keywords: string[];
  meaning: string;
}

const CARD_DATA: Record<string, CardData> = {
  "the-fool": {
    number: "0",
    name: "THE FOOL",
    keywords: ["Beginnings", "Innocence", "Spontaneity"],
    meaning: "taking a leap of faith; letting your heart guide the way; being true to your inner child",
  },
  "the-magician": {
    number: "I",
    name: "THE MAGICIAN",
    keywords: ["Manifestation", "Resourcefulness", "Power"],
    meaning: "taking CONTROL; manifesting the best; knowing your own power",
  },
  "the-high-priestess": {
    number: "II",
    name: "THE HIGH PRIESTESS",
    keywords: ["Intuition", "Mystery", "Subconscious"],
    meaning: "seeing through the veil; following your gut feeling; playing it by ear",
  },
  "the-empress": {
    number: "III",
    name: "THE EMPRESS",
    keywords: ["Fertility", "Nature", "Abundance"],
    meaning: "attracting wealth; being seen as motherly; owning your feminine power",
  },
  "the-emperor": {
    number: "IV",
    name: "THE EMPEROR",
    keywords: ["Authority", "Structure", "Stability"],
    meaning: "having BDE (google it); aligning with your power; being the leader of your flock",
  },
  "the-hierophant": {
    number: "V",
    name: "THE HIEROPHANT",
    keywords: ["Tradition", "Conformity", "Education"],
    meaning: "staying true to tradition; following a spiritual path; seeking a mentor",
  },
  "the-lovers": {
    number: "VI",
    name: "THE LOVERS",
    keywords: ["Love", "Harmony", "Choices"],
    meaning: "to love with all your heart; making THE RIGHT choice; loving yourself",
  },
  "the-chariot": {
    number: "VII",
    name: "THE CHARIOT",
    keywords: ["Control", "Willpower", "Victory"],
    meaning: "SWIFT CHANGES; fast results; riding the road to victory",
  },
  "strength": {
    number: "VIII",
    name: "STRENGTH",
    keywords: ["Courage", "Patience", "Control"],
    meaning: "taming the beast within; persevering THROUGH challenge; Test OF your faith",
  },
  "the-hermit": {
    number: "IX",
    name: "THE HERMIT",
    keywords: ["Soul-Searching", "Introspection", "Guidance"],
    meaning: "seeking answers within; valuing your alone time; the path to enlightenment",
  },
  "wheel-of-fortune": {
    number: "X",
    name: "WHEEL OF FORTUNE",
    keywords: ["Luck", "Karma", "Cycles"],
    meaning: "what goes around comes around; having the chance of a lifetime; having a date with destiny",
  },
  "justice": {
    number: "XI",
    name: "JUSTICE",
    keywords: ["Fairness", "Truth", "Law"],
    meaning: "weighing matters carefully; choosing what you \"know\" IS right instead of IS EASY",
  },
  "the-hanged-man": {
    number: "XII",
    name: "THE HANGED MAN",
    keywords: ["Suspension", "Restriction", "Letting Go"],
    meaning: "NEW perspective on an old matter; surrendering ideals; seeing the bigger picture",
  },
  "death": {
    number: "XIII",
    name: "DEATH",
    keywords: ["Endings", "Transformation", "Transition"],
    meaning: "a challenging change; seeing beyond the veil; a sobering experience",
  },
  "temperance": {
    number: "XIV",
    name: "TEMPERANCE",
    keywords: ["Balance", "Moderation", "Patience"],
    meaning: "Achieving inner balance; finding peace with old challenges; being in a state of \"flow\"",
  },
  "the-devil": {
    number: "XV",
    name: "THE DEVIL",
    keywords: ["Bondage", "Addiction", "Materialism"],
    meaning: "on a wayward path; manipulating those around you; indulging in a guilty pleasure",
  },
  "the-tower": {
    number: "XVI",
    name: "THE TOWER",
    keywords: ["Sudden Upheaval", "Chaos", "Revelation"],
    meaning: "a rude awakening; being blindsided by change; inspired by deep soul searching",
  },
  "the-star": {
    number: "XVII",
    name: "THE STAR",
    keywords: ["Hope", "Faith", "Rejuvenation"],
    meaning: "seeking guidance; being the star of your own life; wishing upon a star",
  },
  "the-moon": {
    number: "XVIII",
    name: "THE MOON",
    keywords: ["Illusion", "Fear", "Anxiety"],
    meaning: "a gateway to the unknown; trusting your instincts; finding meaning in your dreams",
  },
  "the-sun": {
    number: "XIX",
    name: "THE SUN",
    keywords: ["Joy", "Success", "Vitality"],
    meaning: "living la dolce vita; liberating blocked energy; listening to your inner child",
  },
  "judgement": {
    number: "XX",
    name: "JUDGEMENT",
    keywords: ["Reflection", "Reckoning", "Awakening"],
    meaning: "a higher level of awareness; feeling reborn; transforming your limiting beliefs",
  },
  "the-world": {
    number: "XXI",
    name: "THE WORLD",
    keywords: ["Completion", "Integration", "Travel"],
    meaning: "A NEW CHAPTER; limitless possibilities; feeling one with the world",
  },
};

export function CardDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const card = slug ? CARD_DATA[slug] : undefined;

  if (!card) return <Navigate to="/major-arcana" replace />;

  return (
    <PhoneShell>
      <main className={styles.page}>
        <h1 className={styles.title}>
          {card.number} — {card.name}
        </h1>
        <hr className={styles.divider} />

        <div className={styles.navRow}>
          <Link to="/" className={styles.navBtn} aria-label="Home">⌂</Link>
          <Link to="/major-arcana" className={styles.navBtn} aria-label="Back to Major Arcana">↩</Link>
        </div>

        <p className={styles.keywords}>
          {card.keywords.join(" · ")}
        </p>
        <span className={styles.star} aria-hidden>✦</span>

        <div className={styles.cardBox}>
          <div className={styles.meaningWrap}>
            <p className={styles.meaning}>{card.meaning}</p>
          </div>
        </div>
      </main>
    </PhoneShell>
  );
}
