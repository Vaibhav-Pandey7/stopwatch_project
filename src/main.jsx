import { useState ,useRef} from "react";
import { createRoot } from "react-dom/client";


function Stopwatch(){
  const [result,setresult]=useState(0);
  const intervalRef=useRef(null);

  function timer(x){
    // let prev=result;
    if(x==='start'){
      if(intervalRef.current===null){
        intervalRef.current=setInterval(()=>{
          setresult(prev=>prev+1);
        },1000)
      }else{
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setresult(0);
        timer(x);
      }
    }else if(x==='stop'){
      clearInterval(intervalRef.current);
      intervalRef.current=null;
    }else{
      if(intervalRef.current!==null){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
      }
      setresult(0);
    }
  }

    return(
      <div style={{backgroundColor:"pink"}}>
        <h1>{result}</h1>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <button onClick={()=>{timer('start');}}>Start</button>
          <button onClick={()=>{timer('stop');}}>Stop</button>
          <button onClick={()=>{timer('reset');}}>Reset</button>
        </div>
      </div>
    );
}

createRoot(document.getElementById('root')).render(<Stopwatch/>);
