import React, { useState } from "react";
import { UniqueSellingPoints } from "./UniqueSellingPoints";
import { CreateAccountSection } from "./CreateAccountSection";
import styles from "./FormSection.module.css";
import { SuccessView } from "../successview/SuccessView";
import { PendingView } from "../pending-view/PendingView";

export const FormSection = () => {
  const [isPending, setIsPending] = useState(false);
  const [onSuccess, setOnSuccess] = useState(false);
  return (
    <div className={styles.main_wrapper}>
      {!isPending && !onSuccess && (
        <div className={styles.form_section_wrapper}>
          <CreateAccountSection
            setIsPending={setIsPending}
            setOnSuccess={setOnSuccess}
          />
          <UniqueSellingPoints />
        </div>
      )}
      {isPending && <PendingView />}
      {onSuccess && <SuccessView />}
    </div>
  );
};
