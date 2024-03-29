import React, { useState } from "react";
import styles from "./CreateAccountSection.module.css";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Checkbox } from "../../components/Checkbox";
import { useCheckbox } from "../../hooks/useCheckbox";
import { PasswordToggleReturnType } from "../../types/interfaces";
import { usePasswordToggle } from "../../hooks/usePasswordToggle";
import { useFormValidation } from "../../hooks/useFormValidation";

export const CreateAccountSection = () => {
  const {
    checked: agreementChecked,
    handleChange: handleAgreementCheckChange,
  } = useCheckbox();
  const { inputType, icon }: PasswordToggleReturnType = usePasswordToggle();
  const {
    firstnameError,
    lastnameError,
    emailError,
    passwordError,
    confirmPasswordError,
    validateFirstname,
    validateLastname,
    validateEmail,
    validatePassword,
    validateConfirmPassword,
  } = useFormValidation();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    "confirm-password": "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the state
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    if (name === "firstname") {
      validateFirstname(value);
    } else if (name === "lastname") {
      validateLastname(value);
    } else if (name === "email") {
      validateEmail(value);
    } else if (name === "password") {
      validatePassword(value);
    } else if (name === "confirm-password") {
      validateConfirmPassword(value, values.password);
    }
  };

  console.log(values);
  console.log(agreementChecked);

  const isFormValid = () => {
    return (
      values.firstname &&
      values.lastname &&
      values.email &&
      values.password &&
      values["confirm-password"] &&
      firstnameError === "" &&
      lastnameError === "" &&
      emailError === "" &&
      passwordError === "" &&
      confirmPasswordError === "" &&
      agreementChecked
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);
    // Additional form submission logic can go here
    // Create formData object
    // const formData = new FormData();
    // Object.entries(values).forEach(([key, value]) => {
    //   formData.append(key, value);
    // });

    // Additional form submission logic can go here, using the formData object
    // console.log(formData);
  };

  return (
    <div className={styles.create_account_section_wrapper}>
      <h2 className={styles.title}>Create your Account</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.input_group}>
          <InputField
            label="Firstname"
            name="firstname"
            type="text"
            value={values.firstname}
            handleOnChange={handleInputChange}
            errorMessage={firstnameError}
          />
        </div>
        <InputField
          label="Lastname"
          name="lastname"
          type="text"
          value={values.lastname}
          handleOnChange={handleInputChange}
          errorMessage={lastnameError}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          handleOnChange={handleInputChange}
          errorMessage={emailError}
        />
        <InputField
          label="Password"
          name="password"
          type={inputType}
          handleOnChange={handleInputChange}
          errorMessage={passwordError}
          icon={icon}
        />
        <InputField
          label="Confirm Password"
          name="confirm-password"
          type={inputType}
          handleOnChange={handleInputChange}
          errorMessage={confirmPasswordError}
          icon={icon}
        />
        <Checkbox
          checked={agreementChecked}
          handleChange={handleAgreementCheckChange}
        />
        <Button isDisabled={!isFormValid()} />
      </form>
    </div>
  );
};
