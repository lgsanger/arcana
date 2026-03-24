import { Link } from "react-router-dom";
import { zodiacCardImages } from "../assets/figma";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./ZodiacSignsPage.module.css";

const ZODIAC = [
  { sign: "Aries",       card: "The Emperor",    imgKey: "aries"       },
  { sign: "Taurus",      card: "The Hierophant", imgKey: "taurus"      },
  { sign: "Gemini",      card: "The Lovers",     imgKey: "gemini"      },
  { sign: "Cancer",      card: "The Chariot",    imgKey: "cancer"      },
  { sign: "Leo",         card: "Strength",       imgKey: "leo"         },
  { sign: "Virgo",       card: "The Hermit",     imgKey: "virgo"       },
  { sign: "Libra",       card: "Justice",        imgKey: "libra"       },
  { sign: "Scorpio",     card: "Death",          imgKey: "scorpio"     },
  { sign: "Sagittarius", card: "Temperance",     imgKey: "sagittarius" },
  { sign: "Capricorn",   card: "The Devil",      imgKey: "capricorn"   },
  { sign: "Aquarius",    card: "The Star",       imgKey: "aquarius"    },
  { sign: "Pisces",      card: "The Moon",       imgKey: "pisces"      },
] as const;

export function ZodiacSignsPage() {
  return (
    <PhoneShell>
      <main className={styles.page} data-node-id="86:2">
        <h1 className={styles.title}>Zodiac Signs</h1>
        <hr className={styles.divider} />
        <div className={styles.homeRow}>
          <Link to="/" className={styles.homeBtn} aria-label="Home">⌂</Link>
        </div>

        <p className={styles.tagline}>
          Did you know... each zodiac sign has an affiliated tarot card?
        </p>
        <span className={styles.star} aria-hidden>✦</span>

        {ZODIAC.map(({ sign, card, imgKey }) => (
          <div key={sign} className={styles.zodiacCard}>
            <p className={styles.signName}>{sign}</p>
            <hr className={styles.innerDivider} />
            <div className={styles.cardImageWrap}>
              <img
                src={zodiacCardImages[imgKey]}
                alt={`${card} tarot card`}
              />
            </div>
            <p className={styles.tarotCardName}>{card}</p>
          </div>
        ))}

        <span className={styles.bottomStar} aria-hidden>✦</span>
      </main>
    </PhoneShell>
  );
}
