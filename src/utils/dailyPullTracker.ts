import { todayKey } from "./dateKey";

const STORAGE_KEY = "arcanaaid_daily_pull_seen";

export function hasDailyPullBeenSeen(): boolean {
  return localStorage.getItem(STORAGE_KEY) === todayKey();
}

export function markDailyPullSeen(): void {
  localStorage.setItem(STORAGE_KEY, todayKey());
}
