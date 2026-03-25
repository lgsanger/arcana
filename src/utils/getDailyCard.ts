import { MAJOR_ARCANA, type MajorArcanaCard } from "../data/majorArcana";

/** Returns today's date as a YYYY-MM-DD string in local time. */
function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

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
