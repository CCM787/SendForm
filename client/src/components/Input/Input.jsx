/* eslint-disable react/prop-types */
import React from "react";
import { useFormContext } from "react-hook-form";

import { INPUT_TYPES } from "./constants";

export const Input = ({ type }) => {
  const methods = useFormContext();

  const {
    formState: { errors },
  } = methods;

  if (type === INPUT_TYPES.EMAIL) {
    return (
      <React.Fragment>
        <input
          type="email"
          placeholder="Электронная почта"
          {...methods.register("email", {
            pattern: {
              value: /^\S+@\S+$/,
              message: "Введите почту",
            },
          })}
        />
        <div style={{ height: 40 }}>
          {errors?.email && (
            <p className="inputForm">{errors?.email?.message || "Error!"} </p>
          )}
        </div>
      </React.Fragment>
    );
  }
  if (type === INPUT_TYPES.NAME) {
    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Имя*"
          {...methods.register("name", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^[а-яА-Я ]+$/,
              message: "Разрешено вводить только русские буквы!",
            },
          })}
        />
        <div style={{ height: 40 }}>
          {errors?.name && (
            <p className="inputForm">{errors?.name?.message || "Error!"} </p>
          )}
        </div>
      </React.Fragment>
    );
  }
  if (type === INPUT_TYPES.PHONE) {
    return (
      <React.Fragment>
        <input
          type="tel"
          placeholder="Номер телефона*"
          defaultValue={"+7"}
          {...methods.register("phone", {
            required: "Поле обязательно к заполнению",
            pattern: {
              value: /^(8|\+7)[\d]{7,10}/,
              message: "Разрешено вводить только цифры и +",
            },
            minLength: {
              value: 11,
              message: "Введите номер телефона",
            },
            maxLength: {
              value: 12,
              message: "Введите номер телефона",
            },
          })}
        />
        <div style={{ height: 40 }}>
          {errors?.phone && (
            <p className="inputForm">{errors?.phone?.message || "Error!"} </p>
          )}
        </div>
      </React.Fragment>
    );
  }
};
