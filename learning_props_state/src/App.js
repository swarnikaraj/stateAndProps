import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [count,setCount] = useState(11)

  const incSing=()=>{
    setCount(count+1)
  }

  const doubInc=()=>{
    setCount(count+2)
  }
  return (
    <div className="App">
     counter: {count}

     <button onClick={incSing}>inc Single</button>
     <button  onClick={doubInc}>inc Double</button>
    </div>
  );
}


function Counter({inc_count}){


}

export default App;
