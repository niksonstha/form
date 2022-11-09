import { useState } from "react";
import "./FormField.css";
const Form = () => {
  const [firstnameInput, setFirstnameInput] = useState("");
  const [lastnameInput, setLastnameInput] = useState("");
  const [firstnameHead, setFirstnameHead] = useState();
  const [lastnameHead, setLastnameHead] = useState();

  let inputChangeOne = (event) => {
    setFirstnameInput(event.target.value);
    console.log(event.target.value);
  };
  let inputChangeTwo = (event) => {
    setLastnameInput(event.target.value);
    console.log(event.target.value);
  };
  let onSubmit = () => {
    setFirstnameHead(firstnameInput);
    setLastnameHead(lastnameInput);
    setFirstnameInput("");
    setLastnameInput("");
  };
  return (
    <>
      <div className="form">
        <h1>
          Hello, {firstnameHead} {lastnameHead}
        </h1>
        <input
          type="text"
          placeholder="Enter your firstname"
          onChange={inputChangeOne}
          value={firstnameInput}
        />
        <input
          type="text"
          placeholder="Enter your lastname"
          onChange={inputChangeTwo}
          value={lastnameInput}
        />

        <button onClick={onSubmit}>Click me 👍</button>
      </div>
    </>
  );
};

export default Form;
