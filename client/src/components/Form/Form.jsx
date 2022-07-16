/* eslint-disable react/prop-types */
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { thunkSendData } from "../../redux/actions/formDataAction";
import Agreement from "../Agreement/Agreement";
import Button from "../Button/Button";
import "./Form.css";
import { INPUT_TYPES } from "../Input/constants";
import { Input } from "../Input";

function Form({ onClick }) {
  const dispatch = useDispatch();
  const methods = useForm({
    mode: "onBlur",
  });
  const {
    handleSubmit,
    formState: { isValid },
    reset,
  } = methods;
  const onSubmit = async (data) => {
    try {
      console.log(data); // смотрим какие данные отправляются на сервер
      onClick(false); // должна находиться под запросом на сервер, для демонстрации смены страниц поднял выше, при ошибке с отправкой на сервер, данные в форме сбрасываются
      await dispatch(thunkSendData(data)); // пост запрос на сервер
      reset();
    } catch (err) {
      console.error("Произошла ошибка!", err);
      reset();
    }
  };

  return (
    <>
      <h1>Заголовок формы</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input type={INPUT_TYPES.NAME} />
          <Input type={INPUT_TYPES.PHONE} />
          <Input type={INPUT_TYPES.EMAIL} />

          <Button type="submit" disabled={!isValid} value="Начать работу" />
        </form>
      </FormProvider>
      <Agreement />
    </>
  );
}

export default Form;
