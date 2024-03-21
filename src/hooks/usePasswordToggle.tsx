import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export interface PasswordToggleReturnType {
  inputType: string;
  icon: JSX.Element;
  toggleVisibility: () => void;
}

export const usePasswordToggle = (): PasswordToggleReturnType => {
  const [visible, setVisibility] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!visible);
  };

  const icon = visible ? (
    <EyeSlashIcon
      style={{ width: "1rem", cursor: "pointer" }}
      onClick={toggleVisibility}
    />
  ) : (
    <EyeIcon
      style={{ width: "1rem", cursor: "pointer" }}
      onClick={toggleVisibility}
    />
  );

  const inputType = visible ? "text" : "password";

  return { inputType, icon, toggleVisibility };
};
