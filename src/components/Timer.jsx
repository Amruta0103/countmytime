import { useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  // const [edit, setEdit] = useState(true);
  // console.log("here",minutes, seconds)

  const focus = () => {
    // let value = " ";
  }

  const resetTimer = () => {
    setTimeUp(false)
    // setEdit(true);
  }

  const timer = () => {
    setIsPaused(!isPaused)
    // setEdit(false)
  }

  let interval = setInterval(()=>{
    // console.log("here",typeof(seconds),typeof(minutes));
    if(!isPaused){
      setSeconds(parseInt(seconds));
      setMinutes(parseInt(minutes));
      clearInterval(interval);
        if (seconds === 0){
          if (minutes !== 0 ){
            setSeconds(59);
            setMinutes(minutes - 1)
          }else{
            clearInterval(interval);
            setSeconds(0);
            setMinutes(0);
            setIsPaused(true);
            setTimeUp(true);
          }
        }else{
          setSeconds(seconds - 1)
        }
    }else{
      clearInterval(interval);
    }
  },1000)

  // const newSec = seconds <= 9 ? `0${seconds}` : seconds ;

  return(
    <TimerBox>
      <Display>
        {
        timeUp ? 
          <TimeUpMsg>Time's Up 🎉</TimeUpMsg>
        :
          <TimeBlock>
            <Time maxLength={2} onChange={(e)=> setMinutes(e.target.value)} onFocus={focus} value={minutes}/>
            <Time maxLength={2} onChange={(e)=> setSeconds(e.target.value)} value={seconds}/>
          </TimeBlock>
        }
      </Display>
        <ButtonsBlock>
          {
            timeUp ? 
            <Button style={{color:"black"}} onClick={resetTimer} >Reset</Button>
            :
            <Button style={{color:"black"}} onClick={timer}>
              {isPaused? "start" : "stop"}
            </Button>
          }
        </ButtonsBlock>
    </TimerBox>
  )
};

const TimerBox = styled.div`
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: inherit;
width: 90%;
`
const Display = styled.div`
font-size: 7em;
width: 90%;
height: 10rem;
`
const TimeUpMsg = styled.div`
font-weight: 200;
`
const TimeBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Time = styled.input`
width: 9rem;
height: 8rem;
font-size: 8rem;
color: white;
margin: auto 1.5rem;
padding: 1rem;
border: 1px solid transparent;
box-shadow: none;
outline: none;
caret-color: rgba(255,255,255,0.5);
background: transparent;
text-align: center;
`
const ButtonsBlock = styled.div`
margin: 1rem 0rem;
display: flex;
align-items: center;
`
const Button = styled.button`
color: black;
font-size: 1em;
height: 3rem;
width: 6rem;
border-radius: 2rem;
margin: 0.5rem;
text-align: center;
border: 1px solid transparent;
`

export default Timer; 
 