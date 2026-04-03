import { useState } from "react";
import Clock from "./Clock";

function App(){
  const [color,setColor]=useState('green');
  return(
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h1>Digital Clock Using React Js</h1>
      <select name="" id="" onChange={(event)=>setColor(event.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
      </select>
      <Clock color={color}/>
    </div>
  )
}
export default App;
