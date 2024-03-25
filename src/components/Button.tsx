import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "../types/interfaces";

export const Button = ({ isDisabled }: ButtonProps) => {
  return (
    <button className={isDisabled ? styles.sumbit_button_disabled : styles.sumbit_button} disabled={isDisabled}>
      Create Account
    </button>
  );
};
