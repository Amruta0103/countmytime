import { useTimer } from '../context/TimerContext';
import styled from 'styled-components';

const Timer = () => {
  const {iniSec,seconds,iniMin,minutes,timeUp, setIsPaused, isPaused} = useTimer()
  console.log(isPaused);
  let wpttl;
  if(iniMin === 0 ){
    wpttl = (iniSec/seconds)*100
  }

  return(
    <TimerBox>
      <Display>
        {
        timeUp ? 
          <TimeUpMsg>Time's Up 🎉</TimeUpMsg>
        :
          <TimeBlock>
            <TimeSubBlock>
              <Time>{minutes}</Time>
              <Time>{seconds}</Time>
            </TimeSubBlock>
            <Line>
              <LineFill style={!isPaused ? {width:`${wpttl}%`} : {width:"100%"}}></LineFill>
            </Line>
          </TimeBlock>
        }
      </Display>
      <ButtonsBlock>
        {
          isPaused ? 
          <div></div>
          :
          <Button style={{color:"black"}} onClick={()=> setIsPaused(!isPaused)}>Stop</Button>
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
flex-direction: column;
justify-content: center;
align-items: center;
`
const TimeSubBlock = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 2px solid indianred;
margin: 0.5rem auto;
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
const Line = styled.div`
width: 100%;
height: 0.3rem;
border: 2px solid indianred;
`
const LineFill = styled.div`
background: indianred;
height: 100%;
// min-width: 100%;
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
 