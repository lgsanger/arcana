import { Link } from "react-router-dom";
import { PhoneShell } from "../components/PhoneShell";
import styles from "./PlaceholderPage.module.css";

export function MajorArcanaPage() {
  return (
    <PhoneShell>
      <main className={styles.page}>
        <h1 className={styles.title}>Major Arcana</h1>
        <p className={styles.text}>
          Card browser from your Figma frames (The Fool through The World) can be wired here next—each
          screen is available as a separate node via the Figma MCP.
        </p>
        <Link className={styles.back} to="/">
          ← Back home
        </Link>
      </main>
    </PhoneShell>
  );
}
