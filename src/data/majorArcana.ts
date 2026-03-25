import { majorArcanaCards } from "../assets/figma";

export interface MajorArcanaCard {
  slug: string;
  name: string;
  keywords: [string, string, string];
  image: string;
}

export const MAJOR_ARCANA: MajorArcanaCard[] = [
  { slug: "the-fool",           name: "The Fool",           keywords: ["Beginnings",     "Innocence",    "Adventure"],    image: majorArcanaCards.theFool },
  { slug: "the-magician",       name: "The Magician",       keywords: ["Manifestation",  "Power",        "Skill"],        image: majorArcanaCards.theMagician },
  { slug: "the-high-priestess", name: "The High Priestess", keywords: ["Intuition",      "Mystery",      "Subconscious"], image: majorArcanaCards.theHighPriestess },
  { slug: "the-empress",        name: "The Empress",        keywords: ["Abundance",      "Nurturing",    "Fertility"],    image: majorArcanaCards.theEmpress },
  { slug: "the-emperor",        name: "The Emperor",        keywords: ["Authority",      "Structure",    "Stability"],    image: majorArcanaCards.theEmperor },
  { slug: "the-hierophant",     name: "The Hierophant",     keywords: ["Tradition",      "Guidance",     "Conformity"],   image: majorArcanaCards.theHierophant },
  { slug: "the-lovers",         name: "The Lovers",         keywords: ["Love",           "Harmony",      "Choice"],       image: majorArcanaCards.theLovers },
  { slug: "the-chariot",        name: "The Chariot",        keywords: ["Control",        "Willpower",    "Victory"],      image: majorArcanaCards.theChariot },
  { slug: "strength",           name: "Strength",           keywords: ["Courage",        "Patience",     "Compassion"],   image: majorArcanaCards.strength },
  { slug: "the-hermit",         name: "The Hermit",         keywords: ["Solitude",       "Wisdom",       "Reflection"],   image: majorArcanaCards.theHermit },
  { slug: "wheel-of-fortune",   name: "Wheel of Fortune",   keywords: ["Change",         "Cycles",       "Fate"],         image: majorArcanaCards.wheelOfFortune },
  { slug: "justice",            name: "Justice",            keywords: ["Fairness",       "Truth",        "Balance"],      image: majorArcanaCards.justice },
  { slug: "the-hanged-man",     name: "The Hanged Man",     keywords: ["Surrender",      "Pause",        "Perspective"],  image: majorArcanaCards.theHangedMan },
  { slug: "death",              name: "Death",              keywords: ["Transformation", "Endings",      "Transition"],   image: majorArcanaCards.death },
  { slug: "temperance",         name: "Temperance",         keywords: ["Balance",        "Moderation",   "Purpose"],      image: majorArcanaCards.temperance },
  { slug: "the-devil",          name: "The Devil",          keywords: ["Bondage",        "Materialism",  "Addiction"],    image: majorArcanaCards.theDevil },
  { slug: "the-tower",          name: "The Tower",          keywords: ["Disruption",     "Chaos",        "Revelation"],   image: majorArcanaCards.theTower },
  { slug: "the-star",           name: "The Star",           keywords: ["Hope",           "Renewal",      "Serenity"],     image: majorArcanaCards.theStar },
  { slug: "the-moon",           name: "The Moon",           keywords: ["Illusion",       "Fear",         "Subconscious"], image: majorArcanaCards.theMoon },
  { slug: "the-sun",            name: "The Sun",            keywords: ["Joy",            "Success",      "Vitality"],     image: majorArcanaCards.theSun },
  { slug: "judgement",          name: "Judgement",          keywords: ["Reflection",     "Absolution",   "Awakening"],    image: majorArcanaCards.judgement },
  { slug: "the-world",          name: "The World",          keywords: ["Completion",     "Integration",  "Wholeness"],    image: majorArcanaCards.theWorld },
];
