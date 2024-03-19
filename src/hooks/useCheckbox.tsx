import React from "react";

export const useCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return {
    checked,
    handleChange,
  };
};
