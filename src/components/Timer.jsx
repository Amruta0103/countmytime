import { useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
  let newMins, newSecs;
  const [isPaused, setIsPaused] = useState(true);
  const [timerMessage, setTimerMessage] = useState(false); 
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleChangeOne = (e) => {
    newMins = e.target.value;
    console.log("this is newMins",newMins);
  }

  const handleChangeTwo = (f) => {
    newSecs = f.target.value;
    console.log("this is newSecs",newSecs);
  }

  const newTime = () => {
    if(newMins === undefined){
      newMins = 0;
    }
    if(newSecs === undefined){
      newSecs = 0;
    }
    console.log("nava time", newMins, newSecs)
    setMinutes(newMins);
    setSeconds(newSecs);
  }

  let interval = setInterval(()=>{
    if(!isPaused){
      clearInterval(interval);
        if (seconds === 0){
          if (minutes !== 0 ){
            setSeconds(59);
            setMinutes(minutes - 1)
          }else{
            setSeconds(0);
            setMinutes(0);
            clearInterval(interval);
            return setTimerMessage(true);
          }
        }else{
          setSeconds(seconds - 1)
        }
    }else{
      clearInterval(interval);
    }
  },1000) 


  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const Timer = styled.div`
  margin: auto;
  font-size: 5em;
  `
  const InputTime = styled.input`
  height: 2rem;
  width: 8rem;
  border-radius: 2rem;
  `

  return(
    <Timer>
      <InputTime placeholder='Enter time here' onChange={handleChangeOne}/>
      <InputTime placeholder='Enter time here' onChange={handleChangeTwo}/>
      <button onClick={newTime}>Set New Value</button>
      <button onClick={() => setIsPaused(!isPaused)}>
        {isPaused ? "Start" : "Stop"}
      </button>
      {/* <button>Reset</button> */}
      <br />
      {timerMinutes}:{timerSeconds}
      <br />
      {timerMessage ? "Time's Up!!" : " "}
    </Timer>
  )
};

export default Timer; 
 