import React,{useState} from 'react';
import One from './one';
function App () {
    const[num,setNum]=useState("");
    const[fullNum,setfullNum]=useState("");
const onSubmit = () => { 
    setfullNum(num);
}
const inputEvent = (event) => {
    console.log(event.target.value);
    setNum(event.target.value);
}
    return (
        <div>
            <h1>{fullNum}</h1>
<input type="num" placeholder="Input a Num.." 
onChange={inputEvent} value={num}/>
<button onClick={onSubmit} >SUBMIT</button>
 <div>
  <One />
  </div>
  </div>
    );
    }
export default App;