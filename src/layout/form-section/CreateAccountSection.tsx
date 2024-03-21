import React from "react";
import styles from "./CreateAccountSection.module.css";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Checkbox } from "../../components/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";
import { PasswordToggleReturnType } from "../../types/interfaces";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";

export const CreateAccountSection = () => {
  const { checked, handleChange } = useCheckbox();
  const { inputType, icon }: PasswordToggleReturnType = usePasswordToggle();

  console.log(checked);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.create_account_section_wrapper}>
      <h2 className={styles.title}>Create your Account</h2>
      <form>
        <InputField
          label="Firstname"
          name="firstname"
          type="text"
          handleOnChange={handleOnChange}
        />
        <InputField
          label="Lastname"
          name="lastname"
          type="text"
          handleOnChange={handleOnChange}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          handleOnChange={handleOnChange}
        />
        <InputField
          label="Password"
          name="password"
          type={inputType}
          handleOnChange={handleOnChange}
          icon={icon}
        />
        <InputField
          label="Confirm Password"
          name="confirm-password"
          type={inputType}
          handleOnChange={handleOnChange}
          icon={icon}
        />
        <Checkbox checked={checked} handleChange={handleChange} />
        <Button />
      </form>
    </div>
  );
};
