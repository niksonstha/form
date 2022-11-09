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
          fname: value,
          lname: prevValue.lname,
          email: prevValue.email,
          phone: prevValue.phone,
        };
      } else if (name === "lname") {
        return {
          fname: prevValue.fname,
          email: prevValue.email,
          phone: prevValue.phone,
          lname: value,
        };
      } else if (name === "email") {
        return {
          fname: prevValue.fname,
          email: value,
          phone: prevValue.phone,
          lname: prevValue.lname,
        };
      } else if (name === "phone") {
        return {
          fname: prevValue.fname,
          email: prevValue.email,
          phone: value,
          lname: prevValue.lname,
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
