import styled from "styled-components";
import { useTimer } from "../context/TimerContext";

const Timer = () => {
  const {seconds,setSeconds,minutes,setMinutes,isPaused,setIsPaused, timeUp,setTimeUp} = useTimer();
  console.log(minutes,"&",seconds)

  const resetTimer = () => {
    setMinutes(0);
    setSeconds(0);
    setTimeUp(false);
  }

  let interval = setInterval(()=>{
    // console.log("1",minutes,"&",seconds)
    if(!isPaused){
      clearInterval(interval);
        if(seconds === 0 ){ 
          if(minutes !== 0){
            if(minutes>59){
              setMinutes(59);
            }else{
              setSeconds(59);
              setMinutes(minutes-1);
            }
          }else{
            clearInterval(interval);
            setSeconds(0);
            setMinutes(0);
            setIsPaused(true);
            setTimeUp(true);
          }
        }else if(seconds > 59){
          setSeconds(59)
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
            <InpBlock>
              <InpVal id="min" maxLength={2} placeholder="--" onChange={(e) => setMinutes(parseInt(e.target.value ))} value={minutes || ''} disabled={isPaused? false : true}/>
              <Span>:</Span>
              <InpVal max={59} maxLength={2} placeholder="--" onChange={(e) => setSeconds(parseInt(e.target.value))} value={seconds || ''} disabled={isPaused ? false : true}/>
            </InpBlock>
            <LabelBlock>
            <InpLabel>Minutes</InpLabel>
            <InpLabel>Seconds</InpLabel>
            </LabelBlock>
          </TimeBlock>
        }
      </Display>
      <Buttons>
        <Button style={{color:"black"}} onClick={()=>setIsPaused(!isPaused)}>
          {isPaused? "Start" : "Stop"}
        </Button>
        <Button style={{color:"black"}} onClick={resetTimer} >Reset</Button>
      </Buttons>
    </TimerBox>
  )
}

const TimerBox = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
border-radius: 2rem;
`
const Display = styled.div`
border-radius: 2rem 2rem 0 0;
flex: 3;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const TimeUpMsg = styled.div`
font-weight: 200;
font-size: 5rem;
`
const TimeBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const InpBlock = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Span = styled.div`
font-size: 5rem;
margin: auto;
`
const InpVal = styled.input`
margin: 0.5rem auto;
display: flex;
align-items: center;
justify-content: center;
width: 8rem;
height: 8rem;
font-size: 5rem;
color: white;
border: 1px solid transparent;
background: transparent;
text-align: center;
`
const LabelBlock = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
`
const InpLabel = styled.label`
margin: auto;
background: transparent;
height: 2rem;
width: 5rem;
border: 1px solid transparent;
`
const Buttons = styled.div`
border-radius: 0 0 2rem 2rem;
flex: 1;
width: 100%;
display: flex;
justify-content: center;
// align-items: center;
`
const Button = styled.button`
color: black;
font-size: 1em;
height: 1.5rem;
width: 5rem;
border-radius: 2rem;
margin: 0.5rem;
text-align: center;
border: 1px solid transparent;
`

export default Timer;
