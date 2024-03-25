import { useState } from "react";

export const useFormValidation = () => {
  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateFirstname = (firstname: string) => {
    if (firstname.trim() === "") {
      setFirstnameError("Firstname is required");
    } else if (firstname.length < 2) {
      setFirstnameError("Firstname must contain at least 2 characters");
    } else {
      setFirstnameError("");
    }
  };

  const validateLastname = (lastname: string) => {
    if (lastname.trim() === "") {
      setLastnameError("Lastname is required");
    } else if (lastname.length < 2) {
      setLastnameError("Lastname must contain at least 2 characters");
    } else {
      setLastnameError("");
    }
  };

  const validateEmail = (email: string) => {
    // Regular expression pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain 1 capital, 1 digit, 1 special character & at least 6 characters"
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = (
    confirmPassword: string,
    password: string
  ) => {
    if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  return {
    firstnameError,
    validateFirstname,
    lastnameError,
    validateLastname,
    emailError,
    validateEmail,
    passwordError,
    validatePassword,
    confirmPasswordError,
    validateConfirmPassword,
  };
};
