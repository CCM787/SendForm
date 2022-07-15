import React from 'react';
import './congratulation.css'
function Congratulation(props) {
  return (
    <div className='Congratulation'>
      <img src="./check.png" alt="img"/>
      <p className='Sent'>Заявка отправлена!</p>
      <p className='Sent'>Менеджер уже звонит, посмотрите на телефон</p>
    </div>
  );
}

export default Congratulation;
