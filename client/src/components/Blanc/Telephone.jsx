import * as React from "react";
import { useFormContext } from "react-hook-form";

export default function Telephone() {
  const methods = useFormContext();
  return <input type='telephone' placeholder="Номер телефона*" defaultValue={'+7'}{...methods.register('telephone', {
    required: "Поле обязательно к заполнению",
    pattern: {
      value: /^(8|\+7)[\d]{7,10}/gm,
      message: 'Разрешено вводить только цифры и +'
    },
    minLength: {
      value: 11,
      message: 'Введите номер телефона'
    },
    maxLength: {
      value: 12,
      message: 'Введите номер телефона'
    }
  })} />;
}
