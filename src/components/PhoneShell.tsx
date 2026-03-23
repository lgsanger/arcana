import type { ReactNode } from "react";
import styles from "./PhoneShell.module.css";

type Props = {
  children: ReactNode;
};

export function PhoneShell({ children }: Props) {
  return <div className={styles.shell}>{children}</div>;
}
