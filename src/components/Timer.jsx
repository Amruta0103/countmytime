import { useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [edit, setEdit] = useState(true);

  const resetTimer = () => {
    setTimeUp(false)
    setEdit(true);
  }

  const timer = () => {
    setIsPaused(!isPaused)
    setEdit(false)
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

  return(
    <TimerBox>
      <Display>
        {timeUp ? 
          <TimeUpMsg>Time's Up 🎉</TimeUpMsg>
        :
          <TimeBlock>
            <Time itemType='number' contentEditable={edit} suppressContentEditableWarning={true} onBlur={(min) => setMinutes(min.target.innerText)}>
              {minutes}
            </Time>
            <span>:</span>
            <Time id='sec' itemType='number' contentEditable={edit} suppressContentEditableWarning={true} onBlur={(sec) => setSeconds(sec.target.innerText)}>
              {seconds}
            </Time>
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
`
const Display = styled.div`
font-size: 7em;
`
const TimeUpMsg = styled.div`
font-weight: 200;
`
const TimeBlock = styled.div`
display: flex;
`
const Time = styled.div`
margin: auto;
border: 1px solid transparent;
box-shadow: none;
outline: none;
caret-color: rgba(255,255,255,0.3);
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
width: 9rem;
border-radius: 2rem;
margin: 0.5rem;
text-align: center;
border: 1px solid transparent;
`

export default Timer; 
 