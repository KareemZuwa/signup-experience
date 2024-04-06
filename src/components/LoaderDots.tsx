import React from "react";
import styles from "./Loaderdots.module.css";

export const LoaderDots = () => {
  return (
    <span className={styles.loader}>
      <span className={styles.loader__dot}>.</span>
      <span className={styles.loader__dot}>.</span>
      <span className={styles.loader__dot}>.</span>
    </span>
  );
};
