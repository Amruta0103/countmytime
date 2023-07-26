import { useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
  // let newMins, newSecs;
  const [isPaused, setIsPaused] = useState(true);
  // const [isShowTimer, setShowTimer] = useState(true);
  // const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState(0);

  // const changedTime = () => {
  //   console.log("focused")
  // }

  // const setTimer = (e) => {
  //   setSeconds(e.target.value);
  //   console.log(seconds);
  // }
  const timerHandler = () => {
    setIsPaused(!isPaused);
  }

  let interval = setInterval(()=>{
    if(!isPaused){
      clearInterval(interval);
        if (seconds === 0){
          setIsPaused(true);
          // if (minutes !== 0 ){
          //   setSeconds(59);
          //   setMinutes(minutes - 1)
          // }else{
          //   setSeconds(0);
          //   setMinutes(0);
          //   clearInterval(interval);
          //   setShowTimer(!isShowTimer);
          //   return setIsPaused(!isPaused);
          // }
        }else{
          setSeconds(seconds - 1)
        }
    }else{
      clearInterval(interval);
    }
  },1000) 


  return(
    <TimerBox>
      <Time itemType='number' contentEditable={true} suppressContentEditableWarning={true} onBlur={(e) => setSeconds(e.target.innerText)}>
        {seconds}
      </Time>
      <SettingBlock>
        <ButtonsBlock>
          <Button style={{color:"black"}} onClick={timerHandler}>
            {isPaused? "start" : "stop"}
          </Button>
        </ButtonsBlock>
      </SettingBlock>
    </TimerBox>
  )
};

const TimerBox = styled.div`
margin: auto;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
height: inherit;
`
const Time = styled.div`
font-size: 7em;
margin: auto;
`
// const TimeInput = styled.input`
// margin: auto;
// font-size: inherit;
// width: 200px;
// background: transparent;
// border: none;
// box-shadow: none;
// `
const SettingBlock = styled.div`
margin: 0rem;
`
// const InputBlock = styled.div`
// margin: auto;
// `
// const InputTime = styled.input`
// text-align: center;
// font-size: 1.5em;
// color: white;
// height: 2rem;
// width: 8rem;
// margin: 0.5rem;
// border-width: 0px;
// border-bottom: 1.5px solid black;
// background-color: transparent;

// :: placeholder{
//   color: white;
//   text-align: center;
// }

// &:focus {
//   border-bottom: 1.5px solid white;
//   outline: transparent none 0px;
// }
// `
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
 