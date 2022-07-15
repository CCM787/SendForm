import * as React from "react";
import { useFormContext } from "react-hook-form";

export default function Name() {
  const methods = useFormContext();
  return <input type='text' placeholder="Имя*" {...methods.register('name', {
    required: "Поле обязательно к заполнению",
    pattern: {
      value: /^[а-яА-Я ]+$/,
      message: 'Разрешено вводить только русские буквы!'
    },
  } )} />;
}
