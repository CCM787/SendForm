
import {FormProvider, useForm} from "react-hook-form"
import { useDispatch} from "react-redux";
import { thunkSendData } from "../../redux/actions/formDataAction";
import { thunkSetFlag } from "../../redux/actions/setFlagAction";
import Agreement from "../Agreement/Agreement";
import Email from "../Blanc/Email";
import Name from "../Blanc/Name";
import Telephone from "../Blanc/Telephone";
import Button from "../Button/Button";
import './Form.css'


function Form(props) {
  const dispatch = useDispatch()
  const methods = useForm({
    mode:"onBlur"
  });
  const { handleSubmit, formState:{errors}, reset } = methods;
  const onSubmit = async data => {
    try{
      console.log(data);
      await dispatch(thunkSetFlag())
      // await dispatch(thunkSendData(data))
      await reset();  
    }
    catch(err){
      console.error('Произошла ошибка!', err)
    }
  }
  
    return (
      <>
      <h1>Заголовок формы</h1>
      <FormProvider {...methods} >  
      <form onSubmit={handleSubmit(onSubmit)}>
      <Name/>
      <div style={{height:40}}>
          {errors?.name && <p className='inputForm'>{errors?.name?.message || "Error!"} </p>}
        </div>
      <Telephone/>
      <div style={{height:40}}>
          {errors?.telephone && <p className='inputForm'>{errors?.telephone?.message || "Error!"} </p>}
        </div>
      <Email/>
      <div style={{height:40}}>
          {errors?.email && <p className='inputForm'>{errors?.email?.message || "Error!"} </p>}
        </div>
      <Button/>
      </form>
      </FormProvider>
      <Agreement/>
        </>
    );
  }


export default Form;
