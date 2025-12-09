import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Anas")
  const [form, setform] = useState({email:"", phone:""})

  const handleClick = () => {
    alert("I am clicked");
  };

  const handleMouseOver = ()=>{
    alert("I am Mouse Over.")
  }


  const handleChange = (e)=>{
    // setName(e.target.value)
    setform({...form, [e.target.name]:e.target.value})
    console.log(form);
    
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      <div onMouseOver={handleMouseOver} className="red">
        I am a red div.
      </div>

      <input type="text" name="email" value={form?.email} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  );
}

export default App;
