import './App.css';
import { useSelector } from 'react-redux';
import Form from './components/Form/Form';
import Congratulation from './components/Congratulation/Congratulation';


function App() {
  const isOpen = useSelector(state => state.setFlag)
  console.log(isOpen, '>>>>>>>');
  return (
   <>
   {!isOpen ? <Form/> : < Congratulation/>}
   </>
  );
}

export default App;
