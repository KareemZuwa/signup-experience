import { ReactElement } from "react";

export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  handleOnChange: (event: any) => void;
  Icon?: ReactElement;
}

export interface CheckboxProps {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
