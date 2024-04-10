import React from "react";
import styles from "./SuccessView.module.css";
import { CheckIcon } from "@heroicons/react/24/solid";

export const SuccessView = () => {
  return (
    <div className={styles.success_view_wrapper}>
      <CheckIcon className={styles.check_icon} />
      <h3>Thank you for registering an account</h3>
    </div>
  );
};
