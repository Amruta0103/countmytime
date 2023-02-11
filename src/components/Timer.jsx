import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
 
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
    </Timer>
  )
};

export default Timer; 