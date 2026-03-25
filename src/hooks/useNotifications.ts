import { useCallback, useEffect, useState } from "react";
import { hasDailyPullBeenSeen } from "../utils/dailyPullTracker";

const supported = typeof window !== "undefined" && "Notification" in window;

function currentPermission(): NotificationPermission {
  return supported ? Notification.permission : "denied";
}

function fireReminderNotification() {
  if (!supported || Notification.permission !== "granted") return;
  new Notification("Arcana AID — Daily Pull", {
    body: "Your daily tarot card is waiting. Tap to reveal it.",
    tag: "daily-pull-reminder",
  });
}

/**
 * Manages browser notification permission and fires a daily pull reminder.
 *
 * On mount: if permission is already granted and today's pull hasn't been seen,
 * a system notification fires immediately.
 *
 * requestPermission: asks the user, then fires if they accept.
 */
export function useNotifications() {
  const [permission, setPermission] = useState<NotificationPermission>(currentPermission);

  useEffect(() => {
    if (permission === "granted" && !hasDailyPullBeenSeen()) {
      fireReminderNotification();
    }
  }, []); // intentionally run once on mount

  const requestPermission = useCallback(async () => {
    if (!supported) return;
    const result = await Notification.requestPermission();
    setPermission(result);
    if (result === "granted" && !hasDailyPullBeenSeen()) {
      fireReminderNotification();
    }
  }, []);

  return { permission, supported, requestPermission };
}
