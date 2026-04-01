import { useState } from "react";

const Clock=()=>{
    const [time,setTime]=useState(0);
    return(
        <div>
            <h1>{time}</h1>
        </div>
    )
}
export default Clock;