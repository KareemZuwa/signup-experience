import React from "react";
import styles from "./PendingView.module.css";

export const PendingView = () => {
  return (
    <div className={styles.pending_view_wrapper}>
      <div className={styles.loader}></div>
      <h3>Creating Account</h3>
    </div>
  );
};
