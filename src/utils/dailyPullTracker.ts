const STORAGE_KEY = "arcanaaid_daily_pull_seen";

function todayKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function hasDailyPullBeenSeen(): boolean {
  return localStorage.getItem(STORAGE_KEY) === todayKey();
}

export function markDailyPullSeen(): void {
  localStorage.setItem(STORAGE_KEY, todayKey());
}
