import type { UseFormRegister, FieldError } from "react-hook-form";
export type FormData = {
  name: string;
  email: string;
};
export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: keyof FormData;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = "email" | "text";
