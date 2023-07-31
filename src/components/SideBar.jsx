import styled from "styled-components";
import { useTimer } from "../context/TimerContext";

const SideBar = () => {
  const {setIniSec,seconds,setSeconds, minutes,setMinutes, isPaused,setIsPaused, timeUp,setTimeUp} = useTimer();

  const resetTimer = () => {
    setMinutes(0)
    setSeconds(0)
    setTimeUp(false)
  }

  const starter = () => {
    if(minutes && seconds === ''){
      setMinutes(0);
      setSeconds(0);
    }
    console.log(minutes,seconds)
    setIsPaused(!isPaused)
  }

  let interval = setInterval(()=>{
    console.log("maybe",minutes,seconds)
    if(!isPaused){
      clearInterval(interval);
        if (seconds === 0){
          if (minutes !== 0 && ''){
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

  return(
    <SideMain>
      <InpVal maxLength={2} placeholder="00" onChange={(e) => setSeconds(parseInt(e.target.value))} />
      <InpVal id="min" maxLength={2} placeholder="00" onChange={(e) => setMinutes(parseInt(e.target.value))} />
      {
            timeUp ? 
            <Button style={{color:"black"}} onClick={resetTimer} >Reset</Button>
            :
            <Button style={{color:"black"}} onClick={starter}>Start</Button>
          }
    </SideMain>
  )
}

const SideMain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
height: 100%;
border-radius: 2rem 0 0 2rem;
`
const InpVal = styled.input`
width: 5rem;
height: 1.5rem;
margin: 0.5rem auto;
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

export default SideBar;