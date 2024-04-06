export interface ButtonProps {
  isDisabled?: boolean;
  title: string;
  icon?: JSX.Element;
}

export interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value?: string;
  placeholder?: string;
  errorMessage?: string | undefined;
  handleOnChange: (event: any) => void;
  icon?: JSX.Element;
}

export interface CheckboxProps {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PasswordToggleReturnType {
  inputType: string;
  icon: JSX.Element;
  toggleVisibility: () => void;
}
