import { MAJOR_ARCANA, type MajorArcanaCard } from "../data/majorArcana";
import { todayKey } from "./dateKey";

/**
 * Deterministically maps a date string to an index in [0, 22).
 * Same date always produces the same card; changes at midnight.
 */
function dateToIndex(dateKey: string): number {
  let hash = 0;
  for (let i = 0; i < dateKey.length; i++) {
    hash = (hash * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return hash % MAJOR_ARCANA.length;
}

export function getDailyCard(): MajorArcanaCard {
  return MAJOR_ARCANA[dateToIndex(todayKey())];
}
