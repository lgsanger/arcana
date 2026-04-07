/**
 * Card image assets served from /public/cards/.
 * These are static files committed to the repo — they never expire.
 */

/** Thumbnail images used on the Major Arcana list page. */
export const majorArcanaThumbs = {
  theFool:          "/cards/thumbs/the-fool.png",
  theMagician:      "/cards/thumbs/the-magician.png",
  theHighPriestess: "/cards/thumbs/the-high-priestess.png",
  theEmpress:       "/cards/thumbs/the-empress.png",
  theEmperor:       "/cards/thumbs/the-emperor.png",
  theHierophant:    "/cards/thumbs/the-hierophant.png",
  theLovers:        "/cards/thumbs/the-lovers.png",
  theChariot:       "/cards/thumbs/the-chariot.png",
  strength:         "/cards/thumbs/strength.png",
  theHermit:        "/cards/thumbs/the-hermit.png",
  wheelOfFortune:   "/cards/thumbs/wheel-of-fortune.png",
  justice:          "/cards/thumbs/justice.png",
  theHangedMan:     "/cards/thumbs/the-hanged-man.png",
  death:            "/cards/thumbs/death.png",
  temperance:       "/cards/thumbs/temperance.png",
  theDevil:         "/cards/thumbs/the-devil.png",
  theTower:         "/cards/thumbs/the-tower.png",
  theStar:          "/cards/thumbs/the-star.png",
  theMoon:          "/cards/thumbs/the-moon.png",
  theSun:           "/cards/thumbs/the-sun.png",
  judgement:        "/cards/thumbs/judgement.png",
  theWorld:         "/cards/thumbs/the-world.png",
} as const;

/** Full-size card illustration images used on the Daily Pull and card detail pages. */
export const majorArcanaCards = {
  theFool:          "/cards/full/the-fool.png",
  theMagician:      "/cards/full/the-magician.png",
  theHighPriestess: "/cards/full/the-high-priestess.png",
  theEmpress:       "/cards/full/the-empress.png",
  theEmperor:       "/cards/full/the-emperor.png",
  theHierophant:    "/cards/full/the-hierophant.png",
  theLovers:        "/cards/full/the-lovers.png",
  theChariot:       "/cards/full/the-chariot.png",
  strength:         "/cards/full/strength.png",
  theHermit:        "/cards/full/the-hermit.png",
  wheelOfFortune:   "/cards/full/wheel-of-fortune.png",
  justice:          "/cards/full/justice.png",
  theHangedMan:     "/cards/full/the-hanged-man.png",
  death:            "/cards/full/death.png",
  temperance:       "/cards/full/temperance.png",
  theDevil:         "/cards/full/the-devil.png",
  theTower:         "/cards/full/the-tower.png",
  theStar:          "/cards/full/the-star.png",
  theMoon:          "/cards/full/the-moon.png",
  theSun:           "/cards/full/the-sun.png",
  judgement:        "/cards/full/judgement.png",
  theWorld:         "/cards/full/the-world.png",
} as const;

/** Card images used on the Zodiac Signs page. */
export const zodiacCardImages = {
  aries:       "/cards/zodiac/aries.png",       // The Emperor
  taurus:      "/cards/zodiac/taurus.png",      // The Hierophant
  gemini:      "/cards/zodiac/gemini.png",      // The Lovers
  cancer:      "/cards/zodiac/cancer.png",      // The Chariot
  leo:         "/cards/zodiac/leo.png",         // Strength
  virgo:       "/cards/zodiac/virgo.png",       // The Hermit
  libra:       "/cards/zodiac/libra.png",       // Justice
  scorpio:     "/cards/zodiac/scorpio.png",     // Death
  sagittarius: "/cards/zodiac/sagittarius.png", // Temperance
  capricorn:   "/cards/zodiac/capricorn.png",   // The Devil
  aquarius:    "/cards/zodiac/aquarius.png",    // The Star
  pisces:      "/cards/zodiac/pisces.png",      // The Moon
} as const;

/** @deprecated - use majorArcanaCards.theHighPriestess instead */
export const figmaAssets = {
  highPriestessCard: "/cards/full/the-high-priestess.png",
} as const;
