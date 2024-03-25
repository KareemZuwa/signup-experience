import React from "react";
import { InputFieldProps } from "../types/interfaces";
import styles from "./InputField.module.css";

export const InputField = ({
  label,
  name,
  type,
  placeholder,
  icon,
  errorMessage,
  value,
  handleOnChange,
}: InputFieldProps) => {
  return (
    <div className={styles.input_field}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <div className={styles.input_area}>
        <input
          type={type}
          name={name}
          id={name}
          className={`${styles.input} ${
            errorMessage && value !== "" ? styles.input_error : ""
          }`}
          placeholder={placeholder}
          onChange={(event) => handleOnChange(event)}
        />
        {icon && <i>{icon}</i>}
      </div>
      <span className={styles.error_message}>{errorMessage}</span>
    </div>
  );
};
