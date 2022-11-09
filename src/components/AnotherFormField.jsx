import { useState } from "react";
import "./FormField.css";
const AnotherFormField = () => {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });

  let inputChange = (event) => {
    console.log(event.target.value);
    const value = event.target.value;
    const name = event.target.name;

    setFullname((prevValue) => {
      //   console.log(prevValue);
      if (name === "fname") {
        return {
          ...prevValue,
          fname: value,
        };
      } else if (name === "lname") {
        return {
          ...prevValue,
          lname: value,
        };
      } else if (name === "email") {
        return {
          ...prevValue,
          email: value,
        };
      } else if (name === "phone") {
        return {
          ...prevValue,
          phone: value,
        };
      }
    });
  };

  let onSubmit = () => {};
  return (
    <>
      <div className="form">
        <h1>
          Hello,{fullname.fname} {fullname.lname}
        </h1>
        <span>{fullname.email}</span>
        <span>{fullname.phone}</span>
        <input
          type="text"
          placeholder="Enter your firstname"
          onChange={inputChange}
          name="fname"
          value={fullname.fname}
        />
        <input
          type="text"
          placeholder="Enter your lastname"
          onChange={inputChange}
          name="lname"
          value={fullname.lname}
        />
        <input
          type="text"
          placeholder="Enter your email"
          onChange={inputChange}
          name="email"
          value={fullname.email}
        />
        <input
          type="text"
          placeholder="Enter your phone"
          onChange={inputChange}
          name="phone"
          value={fullname.phone}
        />

        <button onClick={onSubmit}>Click me 👍</button>
      </div>
    </>
  );
};

export default AnotherFormField;
