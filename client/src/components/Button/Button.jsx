import React from 'react';
import { useForm } from 'react-hook-form';

function Button(props) {
  const { 
    formState: { isValid } 
    } = useForm({
    });
  return (
    <input type="submit" disabled={!isValid} value="Начать работу"/>
  );
}

export default Button;
