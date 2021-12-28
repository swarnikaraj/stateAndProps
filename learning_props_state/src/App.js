import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [count,setCount] = useState(11)

  const incSing=(val)=>{
    setCount(count+val)
  };

  if(count>=25){
    return <div>reached max val</div>
  };

  return (
    <div className="App">
     counter: {count}

     
     
    {/* {

      count<25 &&(
     <div>
     <button onClick={()=>incSing(1)}>inc Single</button>
     <button  onClick={()=>incSing(2)}>inc Double</button>
     </div>
      )
    } */}

    <div>
     <button onClick={()=>incSing(1)}>inc Single</button>
     <button  onClick={()=>incSing(2)}>inc Double</button>
     </div>

     <div>Counter is {count%2==0? "Even":"Odd"}</div>
    </div>
  );
}




export default App;
