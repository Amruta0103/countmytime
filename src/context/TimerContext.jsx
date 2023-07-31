import { useState, useContext, createContext } from "react";

export const TimerContext = createContext();

export function TimerProvider({children}) {
  const [iniSec, setIniSec] = useState(0);
  const [seconds, setSeconds] = useState('');
  const [minutes, setMinutes] = useState('');
  const [hours, setHours] = useState(0);
  const [disp, setDisp] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [timeUp, setTimeUp] = useState(false);

  return(
    <TimerContext.Provider
      value={{iniSec,setIniSec,seconds,setSeconds,minutes,setMinutes, hours, setHours,disp, setDisp,isPaused, setIsPaused,timeUp, setTimeUp}}
    >
      {children}
    </TimerContext.Provider>
  )
}

export function useTimer() {
  return useContext(TimerContext);
}