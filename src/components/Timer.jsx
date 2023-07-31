import { useTimer } from '../context/TimerContext';
import styled from 'styled-components';

const Timer = () => {
  const {seconds, minutes,timeUp} = useTimer()
  // const [isPaused, setIsPaused] = useState(true);
  // const [minutes, setMinutes] = useState('');
  // const [seconds, setSeconds] = useState('');
  // const [timeUp, setTimeUp] = useState(false);
  // const [edit, setEdit] = useState(true);
  // console.log("here",minutes, seconds)

  // const focus = () => {
    // let value = " ";
  // }

  // const resetTimer = () => {
  //   setMinutes('')
  //   setSeconds('')
  //   setTimeUp(false)
  //   console.log(minutes,"&",seconds)
  //   // setEdit(true);
  // }

  // const timer = () => {
  //   setIsPaused(!isPaused)
  //   // setEdit(false)
  // }

  // let interval = setInterval(()=>{
  //   console.log("yaha",minutes);
  //   if(!isPaused){
  //     // if(seconds === '' && minutes === ''){
  //     //   setSeconds(0)
  //     //   setMinutes(0);
  //     // }
  //     // setSeconds(parseInt(seconds));
  //     // setMinutes(parseInt(minutes));
  //     clearInterval(interval);
  //       // if(minutes === ''){
  //         // setMinutes(0) 
  //       // }
  //       if (seconds === 0){
  //         if (minutes === 0 || ''){
  //           clearInterval(interval);
  //           setSeconds(0);
  //           setMinutes(0);
  //           setIsPaused(true);
  //           setTimeUp(true);
  //         }else{
  //           setSeconds(59);
  //           setMinutes(minutes - 1)
  //         }
  //       }else{
  //         setSeconds(seconds - 1)
  //       }
  //   }else{
  //     clearInterval(interval);
  //   }
  // },1000)

  // const newSec = seconds <= 9 ? `0${seconds}` : seconds ;

  return(
    <TimerBox>
      <Display>
        {
        timeUp ? 
          <TimeUpMsg>Time's Up 🎉</TimeUpMsg>
        :
          <TimeBlock>
            <Time>{minutes <10 ? `0${minutes}` : minutes}</Time>
            <Time>{seconds <10 ?`0${seconds}` : seconds}</Time>
          </TimeBlock>
        }
      </Display>
        {/* <ButtonsBlock>
          {
            timeUp ? 
            <Button style={{color:"black"}} onClick={resetTimer} >Reset</Button>
            :
            <Button style={{color:"black"}} onClick={timer}>
              {isPaused? "start" : "stop"}
            </Button>
          }
        </ButtonsBlock> */}
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
const Time = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 8rem;
height: 8rem;
font-size: 8rem;
color: white;
margin: auto;
border: 1px solid transparent;
background: transparent;
text-align: center;
`
// const ButtonsBlock = styled.div`
// margin: 1rem 0rem;
// display: flex;
// align-items: center;
// `
// const Button = styled.button`
// color: black;
// font-size: 1em;
// height: 3rem;
// width: 6rem;
// border-radius: 2rem;
// margin: 0.5rem;
// text-align: center;
// border: 1px solid transparent;
// `

export default Timer; 
 