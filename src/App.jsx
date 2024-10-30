import { useState } from "react";

function App() {
  // let num = 0

 const [num , setNum] = useState (0)
  return (
    <>
   <button onClick={()=>{
    // console.log("add" , num)
    setNum(num +1);
    
   }}>ADD +</button>

  
   <br/><br/>
  <p>{num }</p>
   <br/>

   <button onClick={()=>{
    // console.log("maines" ,num );
    setNum(num-1)
    
   }}>MAINES -</button>
    </>
  )
}

export default App
