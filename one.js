import React, {useState} from 'react';
 const One= () => {
const[num,setNum] = useState();
const incNum=()=> { 
    if(num < 10){
    setNum(num+1);
}else{
    setNum(10);
}}
const decNum=()=> {
    if(num > 0){
    setNum(num-1);
}else{
    setNum(0);
}}
return(
<>
<button onClick={decNum}>-</button>
<span>{num}</span>
<button onClick={incNum}>+</button>
</>
);
}
export default One;