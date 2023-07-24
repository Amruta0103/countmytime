import { useState } from 'react';
import styled from 'styled-components';

const Timer = () => {
  // let newMins, newSecs;
  const [isPaused, setIsPaused] = useState(true);
  const [isShowTimer, setShowTimer] = useState(true);
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState(0);

  // const handleChangeOne = (e) => {
  //   newMins = e.target.value;
  //   console.log("this is newMins",newMins);
  // }

  // const handleChangeTwo = (f) => {
  //   newSecs = f.target.value;
  //   console.log("this is newSecs",newSecs);
  // }

  // const newTime = () => {
  //   if(newMins === undefined){
  //     newMins = 0;
  //   }
  //   if(newSecs === undefined){
  //     newSecs = 0;
  //   }
  //   console.log("nava time", newMins, newSecs)
  //   setMinutes(newMins);
  //   setSeconds(newSecs);
  //   return setShowTimer(true);
  // }

  const timerHandler = () => {
    setIsPaused(!isPaused);
    // if(seconds==0){
      // setIsPaused(true);
    // }
  }

  let interval = setInterval(()=>{
    if(!isPaused){
      clearInterval(interval);
        if (seconds === 0){
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
          if(seconds === 0){
            setIsPaused(true);
          }
        }
    }else{
      clearInterval(interval);
    }
  },1000) 


  // const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  // const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return(
    <TimerBox>
      <div>{seconds}</div>
      <Time>
        <TimeInput type='text' placeholder={seconds} onChangeCapture={(e) => setSeconds(e.target.value)} />
      </Time>
      <SettingBlock>
        {/* <InputBlock> */}
          {/* <InputTime placeholder='Minutes' onChange={handleChangeOne}/> */}
          {/* <InputTime placeholder='Seconds' onChange={handleChangeTwo}/> */}
        {/* </InputBlock> */}
        <ButtonsBlock>
          {/* <Button onClick={newTime}>Set Time</Button> */}
          <Button style={{color:"black"}} onClick={timerHandler}>
            {isPaused? "yes" : "no"}
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
const TimeInput = styled.input`
margin: auto;
font-size: inherit;
width: 200px;
background: transparent;
border: none;
box-shadow: none;
`
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
 