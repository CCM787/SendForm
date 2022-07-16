import "./App.css";
import Form from "./components/Form/Form";
import Congratulation from "./components/Congratulation/Congratulation";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function App() {
  const [showForm, setShowForm] = useState(true);
  console.log(showForm, ">>>>>>>");

  return (
    <>
      <div>
        <CSSTransition
          in={!showForm}
          timeout={750}
          classNames="pages"
          appear={true}
        >
          {showForm ? <Form onClick={setShowForm} /> : <Congratulation />}
        </CSSTransition>
      </div>
    </>
  );
}
export default App;
