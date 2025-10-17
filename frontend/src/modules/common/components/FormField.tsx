import React from "react";
import type { FormFieldProps } from "../types/FormData";
import { Input } from "@/components/ui/input";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
  return (
    <div>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
        className="w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {error && (
        <span className="text-sm text-red-500 mt-1">{error.message}</span>
      )}
    </div>
  );
};

export default FormField;
