import React from "react";
import { UniqueSellingPoints } from "./UniqueSellingPoints";
import { CreateAccountSection } from "./CreateAccountSection";
import styles from "./FormSection.module.css";

export const FormSection = () => {
  return (
    <div className={styles.form_section_wrapper}>
      <CreateAccountSection />
      <UniqueSellingPoints />
    </div>
  );
};
