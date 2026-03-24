import { Link } from "react-router-dom";
import { majorArcanaThumbs } from "../assets/figma";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./MajorArcanaPage.module.css";

interface CardDef {
  slug: string;
  name: string;
  thumb: string;
}

const CARDS: CardDef[] = [
  { slug: "the-fool",          name: "0 — The Fool",            thumb: majorArcanaThumbs.theFool },
  { slug: "the-magician",      name: "I — The Magician",        thumb: majorArcanaThumbs.theMagician },
  { slug: "the-high-priestess",name: "II — The High Priestess", thumb: majorArcanaThumbs.theHighPriestess },
  { slug: "the-empress",       name: "III — The Empress",       thumb: majorArcanaThumbs.theEmpress },
  { slug: "the-emperor",       name: "IV — The Emperor",        thumb: majorArcanaThumbs.theEmperor },
  { slug: "the-hierophant",    name: "V — The Hierophant",      thumb: majorArcanaThumbs.theHierophant },
  { slug: "the-lovers",        name: "VI — The Lovers",         thumb: majorArcanaThumbs.theLovers },
  { slug: "the-chariot",       name: "VII — The Chariot",       thumb: majorArcanaThumbs.theChariot },
  { slug: "strength",          name: "VIII — Strength",         thumb: majorArcanaThumbs.strength },
  { slug: "the-hermit",        name: "IX — The Hermit",         thumb: majorArcanaThumbs.theHermit },
  { slug: "wheel-of-fortune",  name: "X — Wheel of Fortune",   thumb: majorArcanaThumbs.wheelOfFortune },
  { slug: "justice",           name: "XI — Justice",            thumb: majorArcanaThumbs.justice },
  { slug: "the-hanged-man",    name: "XII — The Hanged Man",    thumb: majorArcanaThumbs.theHangedMan },
  { slug: "death",             name: "XIII — Death",            thumb: majorArcanaThumbs.death },
  { slug: "temperance",        name: "XIV — Temperance",        thumb: majorArcanaThumbs.temperance },
  { slug: "the-devil",         name: "XV — The Devil",          thumb: majorArcanaThumbs.theDevil },
  { slug: "the-tower",         name: "XVI — The Tower",         thumb: majorArcanaThumbs.theTower },
  { slug: "the-star",          name: "XVII — The Star",         thumb: majorArcanaThumbs.theStar },
  { slug: "the-moon",          name: "XVIII — The Moon",        thumb: majorArcanaThumbs.theMoon },
  { slug: "the-sun",           name: "XIX — The Sun",           thumb: majorArcanaThumbs.theSun },
  { slug: "judgement",         name: "XX — Judgement",          thumb: majorArcanaThumbs.judgement },
  { slug: "the-world",         name: "XXI — The World",         thumb: majorArcanaThumbs.theWorld },
];

function CardTile({ card }: { card: CardDef }) {
  return (
    <Link
      to={`/major-arcana/${card.slug}`}
      className={styles.card}
      aria-label={card.name}
    >
      <img className={styles.cardImg} src={card.thumb} alt={card.name} />
    </Link>
  );
}

export function MajorArcanaPage() {
  const top18 = CARDS.slice(0, 18);
  const last4 = CARDS.slice(18);

  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="1:3">
        <h1 className={styles.title}>Major Arcana</h1>
        <hr className={styles.divider} />
        <div className={styles.homeRow}>
          <Link to="/" className={styles.homeBtn} aria-label="Home">
            ⌂
          </Link>
        </div>
        <div className={styles.description}>
          <p>The Major Arcana consists of 22 foundational tarot cards</p>
          <p>(0–XXI) representing major life lessons, karmic influences,</p>
          <p>and archetypal themes, often called &ldquo;The Fool&rsquo;s Journey&rdquo;.</p>
          <p>&nbsp;</p>
          <p>Click the card to learn more</p>
        </div>
        <span className={styles.star} aria-hidden>✦</span>

        <div className={styles.grid3}>
          {top18.map((card) => (
            <CardTile key={card.slug} card={card} />
          ))}
        </div>

        <div className={styles.grid2}>
          {last4.map((card) => (
            <CardTile key={card.slug} card={card} />
          ))}
        </div>

        <span className={styles.bottomStar} aria-hidden>✦</span>
      </main>
    </PhoneShell>
  );
}
