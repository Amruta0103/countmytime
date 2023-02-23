import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);

  // const reset = () => {
  //   // let interval = setInterval(()=>{
  //   //   clearInterval(interval);
      
  //   // })
  //   console.log("reset clicked")
  // }

  // eslint-disable-next-line 
  useEffect(()=> {
    let interval = setInterval(()=>{
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0 ){
          setSeconds(59);
          setMinutes(minutes -1)
        }
      }else{
        setSeconds(seconds - 1);
      }
    },1000)
    // eslint-disable-next-line 
  },[seconds]);


  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const Timer = styled.div`
  margin: auto;
  font-size: 5em;
  `

  return(
    <Timer>
      {timerMinutes}:{timerSeconds}
      {/* <button onClick={() => reset()}>reset</button>       */}
    </Timer>
  )
};

export default Timer; 