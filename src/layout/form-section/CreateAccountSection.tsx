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

  const [isPending, setIsPending] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the state
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    switch (name) {
      case "firstname":
        validateFirstname(value);
        break;
      case "lastname":
        validateLastname(value);
        break;
      case "email":
        validateEmail(value);
        break;
      case "password":
        validatePassword(value);
        break;
      case "confirm-password":
        validateConfirmPassword(value, values.password);
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      Object.values(values).every((value) => value) &&
      Object.values({
        firstnameError,
        lastnameError,
        emailError,
        passwordError,
        confirmPasswordError,
      }).every((error) => error === "") &&
      agreementChecked
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isFormValid()) {
      // Show loading view
      setIsPending(true);

      setTimeout(() => {
        // Simulate form submission delay
        localStorage.setItem("formData", JSON.stringify(values));
        console.log(localStorage);

        // Hide loading view after form submission is complete
        setIsPending(false);

        // Clear form after a delay (if needed)
        setTimeout(() => {
          setValues({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            "confirm-password": "",
          });
          handleAgreementCheckChange();
        }, 1000); // Adjust the delay time as needed
      }, 2000); // Adjust the delay time as needed
    }
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
        <Button
          title={isPending ? "Creating account..." : "Create Account"}
          isDisabled={isPending || !isFormValid()}
        />
      </form>
    </div>
  );
};
