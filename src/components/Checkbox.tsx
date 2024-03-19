import React from "react";
import styles from "./Checkbox.module.css";
import { CheckboxProps } from "../types/interfaces";

export const Checkbox = ({ checked, handleChange }: CheckboxProps) => {
  return (
    <div>
      <label htmlFor="agreeToTerms" className={styles.label}>
        <input
          type="checkbox"
          id="agreeToTerms"
          name="agreeToTerms"
          checked={checked}
          onChange={(e) => handleChange(e)}
        />
        <p>I agree to the terms and conditions</p>
      </label>
    </div>
  );
};
