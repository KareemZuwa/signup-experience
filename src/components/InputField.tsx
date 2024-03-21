import React from "react";
import { InputFieldProps } from "../types/interfaces";
import styles from "./InputField.module.css";

export const InputField = ({
  label,
  name,
  type,
  placeholder,
  icon,
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
          className={styles.input}
          placeholder={placeholder}
          onChange={(event) => handleOnChange(event)}
        />
        {icon && (
          <span>
            {icon}
          </span>
        )}
      </div>
    </div>
  );
};
