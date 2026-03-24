import { Link, Navigate, useParams } from "react-router-dom";
import { majorArcanaCards } from "../assets/figma";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./CardDetailPage.module.css";

type CardKey = keyof typeof majorArcanaCards;

interface CardData {
  number: string;
  name: string;
  keywords: string[];
  meaning: string;
  imageKey: CardKey;
}

const CARD_DATA: Record<string, CardData> = {
  "the-fool": {
    number: "0",
    name: "The Fool",
    keywords: ["Beginnings", "Innocence", "Spontaneity"],
    meaning: "taking a leap of faith; letting your heart guide the way; being true to your inner child",
    imageKey: "theFool",
  },
  "the-magician": {
    number: "I",
    name: "The Magician",
    keywords: ["Manifestation", "Resourcefulness", "Power"],
    meaning: "taking CONTROL; manifesting the best; knowing your own power",
    imageKey: "theMagician",
  },
  "the-high-priestess": {
    number: "II",
    name: "The High Priestess",
    keywords: ["Intuition", "Mystery", "Subconscious"],
    meaning: "seeing through the veil; following your gut feeling; playing it by ear",
    imageKey: "theHighPriestess",
  },
  "the-empress": {
    number: "III",
    name: "The Empress",
    keywords: ["Fertility", "Nature", "Abundance"],
    meaning: "attracting wealth; being seen as motherly; owning your feminine power",
    imageKey: "theEmpress",
  },
  "the-emperor": {
    number: "IV",
    name: "The Emperor",
    keywords: ["Authority", "Structure", "Stability"],
    meaning: "having BDE (google it); aligning with your power; being the leader of your flock",
    imageKey: "theEmperor",
  },
  "the-hierophant": {
    number: "V",
    name: "The Hierophant",
    keywords: ["Tradition", "Conformity", "Education"],
    meaning: "staying true to tradition; following a spiritual path; seeking a mentor",
    imageKey: "theHierophant",
  },
  "the-lovers": {
    number: "VI",
    name: "The Lovers",
    keywords: ["Love", "Harmony", "Choices"],
    meaning: "to love with all your heart; making THE RIGHT choice; loving yourself",
    imageKey: "theLovers",
  },
  "the-chariot": {
    number: "VII",
    name: "The Chariot",
    keywords: ["Control", "Willpower", "Victory"],
    meaning: "SWIFT CHANGES; fast results; riding the road to victory",
    imageKey: "theChariot",
  },
  "strength": {
    number: "VIII",
    name: "Strength",
    keywords: ["Courage", "Patience", "Control"],
    meaning: "taming the beast within; persevering THROUGH challenge; Test OF your faith",
    imageKey: "strength",
  },
  "the-hermit": {
    number: "IX",
    name: "The Hermit",
    keywords: ["Soul-Searching", "Introspection", "Guidance"],
    meaning: "seeking answers within; valuing your alone time; the path to enlightenment",
    imageKey: "theHermit",
  },
  "wheel-of-fortune": {
    number: "X",
    name: "Wheel of Fortune",
    keywords: ["Luck", "Karma", "Cycles"],
    meaning: "what goes around comes around; having the chance of a lifetime; having a date with destiny",
    imageKey: "wheelOfFortune",
  },
  "justice": {
    number: "XI",
    name: "Justice",
    keywords: ["Fairness", "Truth", "Law"],
    meaning: 'weighing matters carefully; choosing what you "know" IS right instead of IS EASY',
    imageKey: "justice",
  },
  "the-hanged-man": {
    number: "XII",
    name: "The Hanged Man",
    keywords: ["Suspension", "Restriction", "Letting Go"],
    meaning: "NEW perspective on an old matter; surrendering ideals; seeing the bigger picture",
    imageKey: "theHangedMan",
  },
  "death": {
    number: "XIII",
    name: "Death",
    keywords: ["Endings", "Transformation", "Transition"],
    meaning: "a challenging change; seeing beyond the veil; a sobering experience",
    imageKey: "death",
  },
  "temperance": {
    number: "XIV",
    name: "Temperance",
    keywords: ["Balance", "Moderation", "Patience"],
    meaning: 'Achieving inner balance; finding peace with old challenges; being in a state of "flow"',
    imageKey: "temperance",
  },
  "the-devil": {
    number: "XV",
    name: "The Devil",
    keywords: ["Bondage", "Addiction", "Materialism"],
    meaning: "on a wayward path; manipulating those around you; indulging in a guilty pleasure",
    imageKey: "theDevil",
  },
  "the-tower": {
    number: "XVI",
    name: "The Tower",
    keywords: ["Sudden Upheaval", "Chaos", "Revelation"],
    meaning: "a rude awakening; being blindsided by change; inspired by deep soul searching",
    imageKey: "theTower",
  },
  "the-star": {
    number: "XVII",
    name: "The Star",
    keywords: ["Hope", "Faith", "Rejuvenation"],
    meaning: "seeking guidance; being the star of your own life; wishing upon a star",
    imageKey: "theStar",
  },
  "the-moon": {
    number: "XVIII",
    name: "The Moon",
    keywords: ["Illusion", "Fear", "Anxiety"],
    meaning: "a gateway to the unknown; trusting your instincts; finding meaning in your dreams",
    imageKey: "theMoon",
  },
  "the-sun": {
    number: "XIX",
    name: "The Sun",
    keywords: ["Joy", "Success", "Vitality"],
    meaning: "living la dolce vita; liberating blocked energy; listening to your inner child",
    imageKey: "theSun",
  },
  "judgement": {
    number: "XX",
    name: "Judgement",
    keywords: ["Reflection", "Reckoning", "Awakening"],
    meaning: "a higher level of awareness; feeling reborn; transforming your limiting beliefs",
    imageKey: "judgement",
  },
  "the-world": {
    number: "XXI",
    name: "The World",
    keywords: ["Completion", "Integration", "Travel"],
    meaning: "A NEW CHAPTER; limitless possibilities; feeling one with the world",
    imageKey: "theWorld",
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
          {card.number} - {card.name}
        </h1>
        <hr className={styles.divider} />

        <div className={styles.navRow}>
          <Link to="/" className={styles.navBtn} aria-label="Home">⌂</Link>
          <Link to="/major-arcana" className={styles.navBtn} aria-label="Back to Major Arcana">↜</Link>
        </div>

        <div className={styles.keywords}>
          {card.keywords.map((kw) => (
            <p key={kw}>{kw}</p>
          ))}
        </div>
        <span className={styles.star} aria-hidden>✦</span>

        <div className={styles.cardBox}>
          <img
            className={styles.cardImage}
            src={majorArcanaCards[card.imageKey]}
            alt={card.name}
          />
          <hr className={styles.innerDivider} />
          <p className={styles.meaning}>{card.meaning}</p>
        </div>
      </main>
    </PhoneShell>
  );
}
