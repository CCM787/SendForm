import * as React from "react";
import { useFormContext } from "react-hook-form";

export default function Email() {
  const methods = useFormContext();
  return <input type='text' placeholder="Электронная почта" {...methods.register("email",{
    pattern: {
      value: /^\S+@\S+$/,
      message: 'Введите почту'
    }
  } )} />;
}
