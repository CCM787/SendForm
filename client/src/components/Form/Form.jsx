
import {useForm} from "react-hook-form"
import { useDispatch} from "react-redux";
import { thunkSendData } from "../../redux/actions/formDataAction";
import { thunkSendForm } from "../../redux/actions/sendFormAction";
import './Form.css'


function Form() {
  const dispatch = useDispatch()
    const { register, 
      handleSubmit, 
      reset,
      formState: { errors, isValid } 
      } = useForm({
        mode:"onBlur"
      });

      const onSubmit = (data) =>{
        dispatch(thunkSendForm())
        dispatch(thunkSendData(data))
        console.log(data);
        reset();
      }
    return (
      <>
      <h1>Заголовок формы</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
        <input type='text' placeholder="Имя*"{...register('name', {
          required: "Поле обязательно к заполнению",
          pattern: {
            value: /^[а-яА-Я ]+$/,
            message: 'Разрешено вводить только русские буквы!'
          },
        } )} />
        </label>
        <div style={{height:40}}>
          {errors?.name && <p className='inputForm'>{errors?.name?.message || "Error!"} </p>}
        </div>

        <label>
        <input type='tel' placeholder="Номер телефона*"{...register('telephone', {
          required: "Поле обязательно к заполнению",
          pattern: {
            value: /^([+]?[0-9]{3,25})*$/,
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
        } )} />
        </label>
        <div style={{height:40}}>
          {errors?.telephone && <p className='inputForm'>{errors?.telephone?.message || "Error!"} </p>}
        </div>

        <label>
        <input type='text' placeholder="Электронная почта"{...register('email', {
          pattern: {
            value: /^\S+@\S+$/,
            message: 'Введите почту'
          }
        } )} />
        </label>
        <div style={{height:40}}>
          {errors?.email && <p className='inputForm'>{errors?.email?.message || "Error!"} </p>}
        </div>

        <input type="submit" disabled={!isValid} value="Начать работу"/>
      </form>
      <div className='Agreement'>
     <span className='Agreement-text'> Нажимая кнопку "Начать работу", я даю согласие на обработку персональных данных. </span>
     <a href="./Jack.jpg" download >Условия использования данных</a>    </div>
        </>
    );
  }


export default Form;
